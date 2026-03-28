"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  email: string;
  courseInterest: string;
  message: string;
};

type Props = {
  buttonLabel: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  courseInterest: "",
  message: ""
};

export function ContactForm({ buttonLabel }: Props) {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const disabled = useMemo(() => {
    return loading || Object.values(form).some((value) => value.trim().length === 0);
  }, [form, loading]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setStatus("idle");
    setMessage("");

    try {
      const payload = new FormData();
      payload.set("name", form.name);
      payload.set("phone", form.phone);
      payload.set("email", form.email);
      payload.set("courseInterest", form.courseInterest);
      payload.set("message", form.message);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: payload
      });

      const result = (await response.json()) as { ok: boolean; message: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to submit form.");
      }

      setStatus("success");
      setMessage("Thanks! Your consultation request has been received.");
      setForm(initialState);
    } catch (error) {
      const details = error instanceof Error ? error.message : "Something went wrong.";
      setStatus("error");
      setMessage(details);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-white/60 bg-white/85 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            required
            value={form.name}
            onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-600"
            name="name"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Phone
          <input
            required
            value={form.phone}
            onChange={(event) => setForm((prev) => ({ ...prev, phone: event.target.value }))}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-600"
            name="phone"
          />
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-600"
            name="email"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Course Interest
          <input
            required
            value={form.courseInterest}
            onChange={(event) => setForm((prev) => ({ ...prev, courseInterest: event.target.value }))}
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-600"
            name="courseInterest"
          />
        </label>
      </div>

      <label className="text-sm font-medium text-slate-700">
        Message
        <textarea
          required
          rows={4}
          value={form.message}
          onChange={(event) => setForm((prev) => ({ ...prev, message: event.target.value }))}
          className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-900 outline-none transition focus:border-brand-600"
          name="message"
        />
      </label>

      <button
        type="submit"
        disabled={disabled}
        className="w-full rounded-xl bg-brand-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {loading ? "Submitting..." : buttonLabel}
      </button>

      {status !== "idle" ? (
        <p className={`text-sm ${status === "success" ? "text-emerald-600" : "text-red-600"}`}>{message}</p>
      ) : null}
    </form>
  );
}

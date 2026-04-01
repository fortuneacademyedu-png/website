import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  courseInterest: string;
  message: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "name",
  "phone",
  "email",
  "courseInterest",
  "message"
];

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.CONTACT_FROM_EMAIL || "Fortune Academy <onboarding@resend.dev>";
const toEmail = process.env.CONTACT_TO_EMAIL || "fortuneacademyedu@gmail.com";

function normalize(payload: FormData): ContactPayload {
  return {
    name: String(payload.get("name") ?? "").trim(),
    phone: String(payload.get("phone") ?? "").trim(),
    email: String(payload.get("email") ?? "").trim().toLowerCase(),
    courseInterest: String(payload.get("courseInterest") ?? "").trim(),
    message: String(payload.get("message") ?? "").trim()
  };
}

async function sendLeadEmail(payload: ContactPayload) {
  if (!resendApiKey) {
    throw new Error("Missing RESEND_API_KEY");
  }

  const resend = new Resend(resendApiKey);
  const subject = `New Lead: ${payload.name} (${payload.courseInterest})`;

  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: payload.email,
    subject,
    text: [
      "New consultation lead received:",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Course Interest: ${payload.courseInterest}`,
      `Message: ${payload.message}`
    ].join("\n")
  });

  if (error) {
    throw new Error(error.message || "Resend failed to deliver email.");
  }
}

export async function POST(request: Request) {
  const formData = await request.formData();
  const payload = normalize(formData);

  const missing = requiredFields.filter((field) => !payload[field]);
  if (missing.length > 0) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please fill all required fields.",
        missing
      },
      { status: 400 }
    );
  }

  if (!emailRegex.test(payload.email)) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please provide a valid email address."
      },
      { status: 400 }
    );
  }

  if (payload.phone.replace(/\D/g, "").length < 10) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please provide a valid phone number."
      },
      { status: 400 }
    );
  }

  try {
    await sendLeadEmail(payload);
  } catch (error) {
    const details = error instanceof Error ? error.message : "Failed to process lead.";
    return NextResponse.json(
      {
        ok: false,
        message: "Lead received but email delivery failed. Verify RESEND_API_KEY and sender domain settings.",
        error: details
      },
      { status: 500 }
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message: "Contact request accepted and delivered."
    },
    { status: 200 }
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fortuneacademyedu.com"),
  title: {
    default: "Fortune Academy | Best Education Councellor in Bangalore",
    template: "%s | Fortune Academy"
  },
  description:
    "Fortune Academy is the best education councellor in Bangalore for expert, data-driven admission guidance across Engineering, Medical, and MBA courses.",
  keywords: [
    "best education councellor in bangalore",
    "best education counsellor in bangalore",
    "best college counsellors",
    "best college counsellors in Bangalore",
    "college admission guidance Bangalore",
    "engineering admission Bangalore",
    "medical admission counselling",
    "MBA admission consultants Bangalore",
    "Fortune Academy"
  ],
  applicationName: "Fortune Academy",
  category: "education",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Fortune Academy | Best Education Councellor in Bangalore",
    description:
      "Fortune Academy, the best education councellor in Bangalore, offers strategic admission guidance, college shortlisting, and end-to-end support.",
    url: "https://fortuneacademyedu.com",
    siteName: "Fortune Academy",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "Fortune Academy"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortune Academy | Best Education Councellor in Bangalore",
    description:
      "Best education councellor in Bangalore for Engineering, Medical, and Management admission guidance with transparent counselling support.",
    images: ["/images/logo.png"]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" }
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/icon-192.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

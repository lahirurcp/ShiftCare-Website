import type { Metadata } from "next";
import { Inter, Syne, Space_Mono } from "next/font/google";
import { CopyProtection } from "@/components/shiftcare/CopyProtection";
import { ThemeProvider } from "@/components/shiftcare/ThemeProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
  display: "swap",
});

// TODO: create /public/og-image.png (1200×630px) and /public/apple-touch-icon.png (180×180px)
export const metadata: Metadata = {
  metadataBase: new URL("https://shiftcare.io"),
  title: "ShiftCare — Clinical Decision Intelligence for Nursing Education",
  description:
    "The AI-powered nurse triage simulator that trains clinical judgment. Real patients. Real decisions. Real consequences. Built for nursing schools and healthcare educators.",
  keywords: [
    "nursing simulation",
    "clinical decision making",
    "nurse triage",
    "healthcare education",
    "NEWS2 scoring",
    "NANDA-I",
    "SBAR",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { "max-image-preview": "large" },
  },
  openGraph: {
    title: "ShiftCare — Clinical Decision Intelligence",
    description:
      "Train nursing students to make life-saving decisions under pressure.",
    url: "https://shiftcare.io",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "ShiftCare — Clinical Decision Intelligence" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ShiftCare — Clinical Decision Intelligence",
    description: "Train nursing students to make life-saving decisions under pressure.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* FOUC prevention — reads localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('sc-theme');document.documentElement.setAttribute('data-theme',t==='light'?'light':'dark');})();`,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${syne.variable} ${spaceMono.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <CopyProtection />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

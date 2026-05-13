import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { CopyProtection } from "@/components/shiftcare/CopyProtection";
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

export const metadata: Metadata = {
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
  openGraph: {
    title: "ShiftCare — Clinical Decision Intelligence",
    description:
      "Train nursing students to make life-saving decisions under pressure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${syne.variable} font-sans antialiased`}
      >
        <CopyProtection />
        {children}
      </body>
    </html>
  );
}

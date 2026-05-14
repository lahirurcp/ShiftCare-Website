import type { Metadata } from "next";
import Link from "next/link";
import { PilotRequestMailtoForm } from "@/components/shiftcare/PilotRequestMailtoForm";
import { getCalBookingUrl, getSalesEmail } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Book a demo — ShiftCare",
  description:
    "Schedule a conversation or request an institution pilot. Public simulator preview stays on the homepage.",
};

export default function BookPage() {
  const calUrl = getCalBookingUrl();
  const salesEmail = getSalesEmail();

  return (
    <main className="relative min-h-screen bg-sc-bg text-sc-text">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-sc-teal/[0.06] blur-[120px]" />
      </div>

      <header className="relative z-10 border-b border-white/5 bg-sc-bg/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/" className="font-display text-sm font-bold text-sc-text">
            Shift<span className="text-sc-teal">Care</span>
          </Link>
          <Link href="/#demo" className="text-sm font-medium text-sc-text-2 hover:text-sc-teal transition-colors">
            Public simulator
          </Link>
        </div>
      </header>

      <div className="relative z-10 mx-auto max-w-3xl px-6 py-16 md:py-24">
        <span className="cinematic-label mb-3 block">For institutions</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Book a conversation or pilot
        </h1>
        <p className="text-sc-text-2 text-base leading-relaxed mb-10">
          The interactive ward on the homepage is a{" "}
          <strong className="text-sc-text">marketing preview</strong>. A guided pilot uses a separate, time-boxed
          environment (seats, educator visibility, agreements) once you are ready.
        </p>

        <div className="space-y-10">
          <section className="rounded-2xl border border-sc-teal/20 bg-sc-surface/40 p-6 md:p-8">
            <h2 className="font-display text-xl font-bold text-sc-text mb-2">Schedule a call</h2>
            <p className="text-sm text-sc-text-2 mb-6 leading-relaxed">
              Add your Cal.com or Calendly link via{" "}
              <code className="rounded bg-sc-bg px-1.5 py-0.5 text-xs text-sc-teal">NEXT_PUBLIC_CAL_BOOKING_URL</code>{" "}
              in Vercel. Until then, use email on the right or below.
            </p>
            {calUrl ? (
              <a
                href={calUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-sc-teal px-6 py-3.5 text-sm font-bold text-sc-bg hover:brightness-110 transition-colors glow-teal"
              >
                Pick a time
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <p className="text-sm text-sc-text-3">
                Scheduler not configured. Write to{" "}
                <a className="text-sc-teal hover:underline" href={`mailto:${salesEmail}`}>
                  {salesEmail}
                </a>{" "}
                or use the form below.
              </p>
            )}
          </section>

          <PilotRequestMailtoForm />
        </div>

        <p className="mt-12 text-center text-xs text-sc-text-3">
          <Link href="/" className="text-sc-teal hover:underline">
            ← Back to ShiftCare
          </Link>
        </p>
      </div>
    </main>
  );
}

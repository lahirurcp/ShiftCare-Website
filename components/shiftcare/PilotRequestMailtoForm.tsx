"use client";

import { useMemo, useState } from "react";
import { getSalesEmail } from "@/lib/site-config";

const subject = encodeURIComponent("ShiftCare — institution pilot / demo request");

export function PilotRequestMailtoForm() {
  const email = getSalesEmail();
  const [institution, setInstitution] = useState("");
  const [role, setRole] = useState("");
  const [cohort, setCohort] = useState("");
  const [country, setCountry] = useState("");
  const [lms, setLms] = useState("");
  const [notes, setNotes] = useState("");

  const mailtoHref = useMemo(() => {
    const lines = [
      "Please include the details below (edit as needed).",
      "",
      `Institution: ${institution || "—"}`,
      `Role: ${role || "—"}`,
      `Approx. cohort / seat count: ${cohort || "—"}`,
      `Country: ${country || "—"}`,
      `LMS / SSO (if any): ${lms || "—"}`,
      "",
      "Goals / timing:",
      notes || "—",
    ];
    const body = encodeURIComponent(lines.join("\n"));
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, institution, role, cohort, country, lms, notes]);

  return (
    <div className="rounded-2xl border border-sc-teal/15 bg-sc-surface/50 p-6 md:p-8">
      <h2 className="font-display text-xl font-bold text-sc-text mb-2">Request a pilot (email)</h2>
      <p className="text-sm text-sc-text-2 mb-6 leading-relaxed">
        Prefer procurement or internal approvals first? Send a structured request. Your mail app opens with
        this template — no data is stored on this marketing site.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">Institution</span>
          <input
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={institution}
            onChange={(e) => setInstitution(e.target.value)}
            placeholder="e.g. School of Health, Example University"
            autoComplete="organization"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">Your role</span>
          <input
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            placeholder="e.g. Simulation lead"
            autoComplete="organization-title"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">Cohort / seats (approx.)</span>
          <input
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={cohort}
            onChange={(e) => setCohort(e.target.value)}
            placeholder="e.g. 60 BSc nursing Y2"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">Country</span>
          <input
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. United Kingdom"
            autoComplete="country-name"
          />
        </label>
        <label className="block">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">LMS / SSO</span>
          <input
            className="mt-1.5 w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={lms}
            onChange={(e) => setLms(e.target.value)}
            placeholder="e.g. Moodle, Blackboard, none"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-xs font-medium text-sc-text-3 uppercase tracking-wide">Goals & timing</span>
          <textarea
            className="mt-1.5 min-h-[100px] w-full rounded-lg border border-white/10 bg-sc-bg/80 px-3 py-2.5 text-sm text-sc-text placeholder:text-sc-text-3 focus:border-sc-teal/40 focus:outline-none focus:ring-1 focus:ring-sc-teal/30"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="What you want to evaluate, ideal start window, procurement constraints…"
          />
        </label>
      </div>
      <a
        href={mailtoHref}
        className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-sc-teal/25 bg-sc-teal/10 px-6 py-3.5 text-sm font-semibold text-sc-teal hover:bg-sc-teal/15 transition-colors"
      >
        Open email with this request
      </a>
      <p className="mt-4 text-xs text-sc-text-3 leading-relaxed">
        CRM tip: connect your scheduler (Cal.com / Calendly) to Airtable or Notion via Zapier/Make so every
        booking creates a lead row automatically.
      </p>
    </div>
  );
}

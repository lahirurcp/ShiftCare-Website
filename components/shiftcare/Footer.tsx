"use client";

import Link from "next/link";

const links: Record<string, { label: string; href: string }[]> = {
  Product: [
    { label: "Features", href: "#workflow" },
    { label: "Demo", href: "#demo" },
    { label: "Book a pilot", href: "/book" },
    { label: "Changelog", href: "#" },
  ],
  Educators: [
    { label: "For Universities", href: "#educators" },
    { label: "For NHS Trusts", href: "#educators" },
    { label: "LMS Integration", href: "#educators" },
    { label: "Case Studies", href: "#" },
  ],
  Clinical: [
    { label: "NEWS2 Framework", href: "#framework" },
    { label: "NANDA-I Mapping", href: "#framework" },
    { label: "NICE Guidelines", href: "#framework" },
    { label: "NMC Standards", href: "#framework" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact", href: "/book" },
    { label: "Data Policy", href: "/privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="relative border-t border-sc-teal/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-lg bg-sc-teal/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-sm bg-sc-teal/80 flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M5 1L8 3V7L5 9L2 7V3L5 1Z" fill="white" opacity="0.9" />
                  </svg>
                </div>
              </div>
              <span className="font-display font-bold text-base text-sc-text">
                Shift<span className="text-sc-teal">Care</span>
              </span>
            </div>
            <p className="text-xs text-sc-text-3 leading-relaxed mb-3">
              Clinical decision intelligence for the next generation of nurses.
            </p>
            <a
              href="mailto:hello@shiftcare.io"
              className="text-xs text-sc-text-3 hover:text-sc-teal transition-colors block mb-4"
            >
              hello@shiftcare.io
            </a>
            <div className="flex items-center gap-1 text-xs text-sc-teal">
              <span className="relative flex h-1.5 w-1.5" aria-hidden>
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sc-teal opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sc-teal" />
              </span>
              <span>All systems operational</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-sc-text text-xs font-semibold uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sc-text-3 text-xs hover:text-sc-teal transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sc-teal/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-sc-text-3">
            © 2024 ShiftCare Ltd. Registered in England & Wales. For educational use only — not a substitute for clinical training.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy", "Terms", "Accessibility", "Cookie Policy"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-sc-text-3 hover:text-sc-teal transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* NHS disclaimer */}
        <div className="mt-6 p-4 rounded-xl bg-sc-surface/40 border border-sc-teal/10">
          <p className="text-xs text-sc-text-3 text-center">
            ShiftCare scenarios are developed with qualified nursing educators and reviewed against current NICE, NHS, and NMC guidelines.
            Clinical content is updated quarterly. Not a medical device. Educational use only.
          </p>
        </div>
      </div>
    </footer>
  );
}

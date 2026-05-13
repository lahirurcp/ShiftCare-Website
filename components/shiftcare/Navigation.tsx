"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "Demo", href: "#demo" },
  { label: "How it Works", href: "#workflow" },
  { label: "Patients", href: "#patients" },
  { label: "Framework", href: "#framework" },
  { label: "Educators", href: "#educators" },
  { label: "Talk to us", href: "/book" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 56);
  });

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: scrolled ? "rgba(6, 13, 26, 0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px) saturate(1.5)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,212,160,0.1)" : "none",
          boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.4)" : "none",
          transition: "background 0.3s, border 0.3s, box-shadow 0.3s",
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-8">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2.5 flex-shrink-0 group">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 rounded-lg bg-sc-teal/15 group-hover:bg-sc-teal/25 transition-colors duration-200" />
              <div className="absolute inset-[3px] rounded-md bg-sc-teal flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1L11 4V10L7 13L3 10V4L7 1Z" fill="#060d1a" opacity="0.95" />
                  <circle cx="7" cy="7" r="2" fill="#060d1a" opacity="0.6" />
                </svg>
              </div>
            </div>
            <span className="font-display font-bold text-[1.05rem] text-sc-text tracking-tight leading-none">
              Shift<span className="text-sc-teal">Care</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.span key={link.href} whileHover={{ y: -1 }} transition={{ type: "spring", stiffness: 400, damping: 28 }} className="inline-block">
                <Link
                  href={link.href}
                  className="text-sm text-sc-text-2 hover:text-sc-text px-3 py-2 rounded-lg hover:bg-white/5 transition-all duration-150 font-medium"
                >
                  {link.label}
                </Link>
              </motion.span>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2 flex-shrink-0">
            <motion.span whileHover={{ y: -1 }} className="inline-block" transition={{ type: "spring", stiffness: 400, damping: 28 }}>
              <Link
                href="/book"
                className="text-sm text-sc-text-3 hover:text-sc-text-2 transition-colors px-4 py-2 font-medium"
              >
                Book demo
              </Link>
            </motion.span>
            <motion.span whileHover={{ y: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 420, damping: 24 }} className="inline-block">
              <Link
                href="#demo"
                className="text-sm font-semibold bg-sc-teal text-sc-bg px-5 py-2.5 rounded-lg hover:bg-sc-teal-2 transition-all duration-150 shadow-lg shadow-sc-teal/20 hover:shadow-sc-teal/35"
              >
                Try simulator
              </Link>
            </motion.span>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 -mr-1 text-sc-text-2 hover:text-sc-text transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            <div className="w-5 h-4 relative flex flex-col justify-between">
              <span
                className={`block h-0.5 rounded-full bg-current transition-all duration-250 origin-center ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full bg-current transition-all duration-250 ${mobileOpen ? "opacity-0 scale-x-0" : ""}`}
              />
              <span
                className={`block h-0.5 rounded-full bg-current transition-all duration-250 origin-center ${mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              />
            </div>
          </button>
        </div>
      </motion.header>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-40 md:hidden"
        initial={false}
        animate={mobileOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, pointerEvents: "auto" as const },
          closed: { opacity: 0, pointerEvents: "none" as const },
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <div
          className="absolute inset-0 bg-sc-bg/97 backdrop-blur-2xl"
          onClick={() => setMobileOpen(false)}
        />
        <motion.nav
          className="relative z-10 flex flex-col items-center justify-center h-full gap-1 px-8"
          variants={{
            open: { y: 0, opacity: 1 },
            closed: { y: 16, opacity: 0 },
          }}
          transition={{ duration: 0.3, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        >
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 12 }}
              animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ delay: 0.08 + i * 0.05, duration: 0.3 }}
            >
              <Link
                href={link.href}
                className="block text-2xl font-display font-semibold text-sc-text hover:text-sc-teal transition-colors py-3"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={mobileOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: 0.08 + navLinks.length * 0.05, duration: 0.3 }}
            className="mt-8"
          >
            <div className="mt-6 flex w-full max-w-xs flex-col gap-3">
              <Link
                href="/book"
                className="block text-center text-base font-bold border border-sc-teal/30 text-sc-teal px-10 py-4 rounded-xl hover:bg-sc-teal/10 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Book demo
              </Link>
              <Link
                href="#demo"
                className="block text-center text-base font-bold bg-sc-teal text-sc-bg px-10 py-4 rounded-xl hover:bg-sc-teal-2 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Try simulator
              </Link>
            </div>
          </motion.div>
        </motion.nav>
      </motion.div>
    </>
  );
}

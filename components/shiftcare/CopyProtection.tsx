"use client";

import { useEffect } from "react";

/**
 * Client-side deterrents against casual copying.
 *
 * IMPORTANT: These are deterrents, not security. A determined user with
 * browser access can always bypass client-side JavaScript restrictions.
 * Real protection comes from the server-side middleware, legal copyright,
 * and keeping sensitive logic server-side.
 */
export function CopyProtection() {
  useEffect(() => {
    // ── Console warning ──────────────────────────────────────────────────────
    const STOP = "color:#ef4444;font-size:48px;font-weight:900;line-height:1.2;";
    const WARN = "color:#f59e0b;font-size:13px;font-weight:600;line-height:1.8;";
    const INFO = "color:#94a3b8;font-size:12px;line-height:1.8;";

    console.log("%c⛔ STOP", STOP);
    console.log(
      "%cThis is a proprietary system owned by ShiftCare Ltd.",
      WARN
    );
    console.log(
      "%cUnauthorised copying, reverse engineering, or redistribution of this " +
      "software is prohibited under the Copyright, Designs and Patents Act 1988 " +
      "and may result in civil and criminal liability.\n\n" +
      "If you believe you have found a security vulnerability, please contact: " +
      "security@shiftcare.io",
      INFO
    );

    // ── Disable right-click context menu ─────────────────────────────────────
    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // ── Block keyboard shortcuts for view-source / DevTools ──────────────────
    const blockShortcuts = (e: KeyboardEvent) => {
      const ctrl = e.ctrlKey || e.metaKey;
      const shift = e.shiftKey;

      const blocked =
        e.key === "F12" ||                            // DevTools
        (ctrl && shift && e.key === "I") ||           // Inspect
        (ctrl && shift && e.key === "J") ||           // Console
        (ctrl && shift && e.key === "C") ||           // Inspector
        (ctrl && e.key === "u") ||                    // View Source
        (ctrl && e.key === "U") ||                    // View Source (caps)
        (ctrl && e.key === "s") ||                    // Save Page
        (ctrl && e.key === "S") ||                    // Save Page (caps)
        (ctrl && e.key === "p") ||                    // Print
        (ctrl && e.key === "P");                      // Print (caps)

      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    // ── Disable drag-to-copy of content ──────────────────────────────────────
    const blockDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    // ── Add copyright meta tag ────────────────────────────────────────────────
    const existingMeta = document.querySelector('meta[name="copyright"]');
    if (!existingMeta) {
      const meta = document.createElement("meta");
      meta.name = "copyright";
      meta.content = `© ${new Date().getFullYear()} ShiftCare Ltd. All rights reserved. Unauthorised reproduction prohibited.`;
      document.head.appendChild(meta);
    }

    document.addEventListener("contextmenu", blockContextMenu);
    document.addEventListener("keydown", blockShortcuts, true);
    document.addEventListener("dragstart", blockDrag);

    return () => {
      document.removeEventListener("contextmenu", blockContextMenu);
      document.removeEventListener("keydown", blockShortcuts, true);
      document.removeEventListener("dragstart", blockDrag);
    };
  }, []);

  return null;
}

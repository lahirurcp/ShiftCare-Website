/**
 * Public env vars for booking and sales CTAs.
 * Set these in Vercel Project → Settings → Environment Variables.
 */

export function getCalBookingUrl(): string | undefined {
  const url = process.env.NEXT_PUBLIC_CAL_BOOKING_URL?.trim();
  return url && url.length > 0 ? url : undefined;
}

export function getSalesEmail(): string {
  return process.env.NEXT_PUBLIC_SALES_EMAIL?.trim() || "hello@shiftcare.io";
}

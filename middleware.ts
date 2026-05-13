import { NextRequest, NextResponse } from "next/server";

/**
 * Middleware: Gate the ShiftCare simulator HTML file.
 *
 * The game is only accessible when loaded as an iframe from this same origin.
 * Direct navigation or hotlinking from external sites is blocked.
 *
 * Bypass is still possible by spoofing the Referer header, but this stops
 * casual direct access, scrapers, and hotlinking.
 */
export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  if (pathname === "/ShiftCare_v11.html") {
    const referer = request.headers.get("referer") ?? "";
    const host = request.headers.get("host") ?? "";

    const isLocalDev =
      host.includes("localhost") || host.includes("127.0.0.1");

    // Allow if referer is from the same host (iframe embed from our own pages)
    const isSameOriginReferer =
      referer.startsWith(`https://${host}`) ||
      referer.startsWith(`http://${host}`) ||
      referer.startsWith("http://localhost") ||
      referer.startsWith("http://127.0.0.1");

    if (!isLocalDev && !isSameOriginReferer) {
      // Redirect direct/external access back to the home page
      return NextResponse.redirect(new URL("/", request.url), {
        status: 302,
        headers: {
          "X-Robots-Tag": "noindex, nofollow",
        },
      });
    }

    // Add extra headers to the game file response
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
    response.headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ShiftCare_v11.html"],
};

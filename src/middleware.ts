import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (
    request.nextUrl.pathname === "/" ||
    request.nextUrl.pathname === "/login" ||
    request.nextUrl.pathname === "/signup"
  ) {
    if (request.cookies.has("authToken")) {
      return NextResponse.redirect(new URL("/browse", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/api/(auth)*", "/api/login/", "/login", "/signup"],
};

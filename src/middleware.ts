import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const isAuthPage = request.nextUrl.pathname.match(/^\/login|\/register/);
  const isRootPage = request.nextUrl.pathname === "/";

  if ((!token && !isAuthPage) || (isRootPage && !token)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && (isAuthPage || isRootPage)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/dashboard/:path*",
    "/rooms/:path*",
    "/characters/:path*",
    "/login",
    "/register",
  ],
}; 
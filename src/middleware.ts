/*
export { default } from "next-auth/middleware"

export const config = { matcher: ["/dashboard"] }
*/

import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (req.nextUrl.pathname === "/") {
    req.nextUrl.pathname = "/dashboard";
    return NextResponse.redirect(req.nextUrl);
  }

  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    if (!session) {
      req.nextUrl.pathname = "/login";
      return NextResponse.redirect(req.nextUrl);
    }
    return NextResponse.next();
  }

  if (req.nextUrl.pathname.startsWith("/login")) {
    if (session) {
      req.nextUrl.pathname = "/dashboard";
      return NextResponse.redirect(req.nextUrl);
    }
  }
}

export const config = {
  matcher: ["/", "/dashboard", "/login"],
};

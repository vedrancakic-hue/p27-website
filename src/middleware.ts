import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const host = req.headers.get("host");
  if (host && host.startsWith("www.")) {
    const url = req.nextUrl.clone();
    url.host = host.replace(/^www\./, "");
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next).*)"],
};


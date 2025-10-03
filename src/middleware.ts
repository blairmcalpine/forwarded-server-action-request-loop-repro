import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
  console.log("middleware", request.nextUrl.pathname);
  return NextResponse.rewrite(
    new URL("/rewrite" + request.nextUrl.pathname, request.url)
  );
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

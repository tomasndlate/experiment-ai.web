import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === "/dashboard") {
        return NextResponse.redirect(new URL("/dashboard/models", req.url));
    }
}

export const config = {
    // Apply middleware only to this paths
    matcher: ["/dashboard"],
};

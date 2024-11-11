import { NextRequest, NextResponse } from "next/server";
import { firestore } from "@/lib/Firebase";

export function GET() {
  return NextResponse.json({
    db: firestore,
  });
}

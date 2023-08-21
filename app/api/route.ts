import { NextResponse } from "next/server";
import { API_URL } from "../lib/api";

export async function GET() {
  const response = await fetch(API_URL);
  const result = await response.json();

  return NextResponse.json({
    success: true,
    data: result.btc.idr,
  });
}

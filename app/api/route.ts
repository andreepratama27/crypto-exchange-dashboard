import { NextResponse } from "next/server";
import { ApiUrl } from "../lib/constant";

export async function GET() {
  const response = await fetch(ApiUrl as string);
  const result = await response.json();

  return NextResponse.json({
    success: true,
    data: result.btc.idr,
  });
}

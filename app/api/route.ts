import { NextResponse } from "next/server";
import { ApiUrl } from "../lib/constant";

export async function GET() {
  // I use a simple endpoint to retrieve current BTC price
  // I chose this endpoint because it doesn't api limit, so I can hit it anytime
  const response = await fetch(ApiUrl as string);
  const result = await response.json();

  return NextResponse.json({
    success: true,
    data: result.btc.idr,
  });
}

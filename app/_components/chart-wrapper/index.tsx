"use client";
import { useStore } from "@/app/lib/store";
import Chart from "../Chart";
import { formatPrice } from "@/app/lib/format";

export default function ChartWrapper() {
  const { currentPrice } = useStore();

  return (
    <div className="w-full bg-gray-100 p-4 rounded mb-4">
      <p className="title text-lg mb-4">
        BTC/IDR - {formatPrice(currentPrice)}
      </p>

      <div className="candlestick w-full border-blue-500">
        <Chart />
      </div>
    </div>
  );
}
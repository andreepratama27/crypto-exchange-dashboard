"use client";
import Charts from "react-apexcharts";
import { chartData, useSimulateData } from "./chartData";
import { useEffect } from "react";

export default function Chart() {
  const { data } = useSimulateData({ delay: 10 });

  return (
    <Charts
      options={chartData.options}
      series={chartData.series}
      type="candlestick"
      height={500}
    />
  );
}

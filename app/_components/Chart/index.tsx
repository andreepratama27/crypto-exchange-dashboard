"use client";
import Charts from "react-apexcharts";
import { chartData, useSimulateData } from "./chartData";

export default function Chart() {
  const { data } = useSimulateData({
    delay: 10,
  });

  return (
    <Charts
      options={chartData.options}
      // series={testObj.series}
      series={[{ data }]}
      type="candlestick"
      height={500}
    />
  );
}

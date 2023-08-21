"use client";
import Charts from "react-apexcharts";
import useWebSocket from "react-use-websocket";
import { chartData, useSimulateData } from "./chartData";
import { useState } from "react";
import { WsUrl } from "@/app/lib/constant";

export default function Chart() {
  const [localData, setLocalData] = useState([]);

  useWebSocket(WsUrl as string, {
    onOpen: () => {
      console.log("Websocket connected");
    },
    onMessage: (message) => {
      setLocalData((prevState) => [...prevState, JSON.parse(message.data)]);
    },
  });

  return (
    <Charts
      options={chartData.options as any}
      series={[{ data: localData }]}
      type="candlestick"
      height={500}
    />
  );
}

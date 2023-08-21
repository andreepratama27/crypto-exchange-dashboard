"use client";
import Charts from "react-apexcharts";
import useWebSocket from "react-use-websocket";
import { chartData } from "./chartData";

// enable this if you wanna simulate ticker with local data
// import { useSimulateData } from "./chartData";

import { useState } from "react";
import { WsUrl } from "@/app/lib/constant";
import ApexChart from "../ApexChart";

export default function Chart() {
  const [localData, setLocalData] = useState<any>([]);

  // if you wanna try some simulation with local ticker data
  // you can use `useSimulateData` hooks and use like this:
  // const { data } = useSimulateData({ delay: TIME_IN_SECOND })
  // and comment the websocket code bellow

  useWebSocket(WsUrl as string, {
    onOpen: () => {
      console.log("Websocket connected");
    },
    onMessage: (message) => {
      setLocalData((prevState: any) => [
        ...prevState,
        JSON.parse(message.data),
      ]);
    },
  });

  return (
    <ApexChart
      options={chartData.options as any}
      series={[{ data: localData }]}
      type="candlestick"
      height={500}
    />
  );
}

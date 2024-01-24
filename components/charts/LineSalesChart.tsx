import React from "react";
import { Chart } from "react-google-charts";

interface SalesData {
  monthName: string;
  totalSales: number;
  numOfBookings: number;
}

interface Props {
  salesData: SalesData[];
}

export function LineSalesChart({ salesData }: Props) {
  // Reverse the data for chronological order
  const reversedData = salesData.slice().reverse();

  const chartData = [
    ["Month", "Sales", "Bookings"],
    ...reversedData.map((data) => [
      data.monthName,
      data.totalSales,
      data.numOfBookings,
    ]),
  ];

  const options = {
    title: "Last 6 Months Performance",
    curveType: "function",
    legend: { position: "bottom" },
  };

  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}

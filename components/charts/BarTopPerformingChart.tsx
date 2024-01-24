import React from "react";
import { Chart } from "react-google-charts";

interface Room {
  roomName: string;
  bookingsCount: number;
}

interface Props {
  rooms: Room[];
}

export function BarTopPerformingChart({ rooms }: Props) {
  const chartData = [
    ["Room", "Bookings"],
    ...rooms.map((room) => [room.roomName, room.bookingsCount]),
  ];

  const options = {
    title: "Top Acknowledged Appeals",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Acknowedged",
      minValue: 0,
    },
    vAxis: {
      title: "Appeals",
    },
  };

  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      data={chartData}
      options={options}
    />
  );
}

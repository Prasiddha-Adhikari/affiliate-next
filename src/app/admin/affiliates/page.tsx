"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const dummyEarnings = {
  "7days": [120, 150, 180, 170, 190, 210, 230],
  "1month": Array(30)
    .fill(0)
    .map((_, i) => 100 + i * 5),
  "1year": Array(12)
    .fill(0)
    .map((_, i) => 1000 + i * 150),
};

const labelsMap = {
  "7days": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  "1month": Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
  "1year": [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ],
};

export default function AdminAffiliateDashboard() {
  const [period, setPeriod] = useState<"7days" | "1month" | "1year">("7days");

  const data = {
    labels: labelsMap[period],
    datasets: [
      {
        label: "Earnings",
        data: dummyEarnings[period],
        borderColor: "rgba(37, 99, 235, 1)", // blue-600
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" as const },
      title: { display: true, text: `Affiliate Earnings (${period})` },
    },
  };

  // Sum earnings for the selected period
  const totalEarned = dummyEarnings[period].reduce((a, b) => a + b, 0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Affiliate Earnings Dashboard</h1>

      <Card className="mb-6">
        <CardContent className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div>
            <p className="text-gray-600">Total Earnings in last</p>
            <p className="text-3xl font-extrabold text-blue-600">{period}</p>
          </div>
          <div>
            <p className="text-gray-600">Amount Earned</p>
            <p className="text-4xl font-extrabold text-green-600">Rs {totalEarned}</p>
          </div>
          <div className="space-x-3">
            <button
              onClick={() => setPeriod("7days")}
              className={`px-4 py-2 rounded ${
                period === "7days"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => setPeriod("1month")}
              className={`px-4 py-2 rounded ${
                period === "1month"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              1 Month
            </button>
            <button
              onClick={() => setPeriod("1year")}
              className={`px-4 py-2 rounded ${
                period === "1year"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              1 Year
            </button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Line data={data} options={options} />
        </CardContent>
      </Card>
    </div>
  );
}

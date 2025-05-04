import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

interface StockChartProps {
  symbol: string;
  prices: number[];
  labels: string[];
}

export const StockChart: React.FC<StockChartProps> = ({
  symbol,
  prices,
  labels,
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: `${symbol} Price`,
        data: prices,
        fill: false,
        borderColor: "#3b82f6",
        backgroundColor: "#3b82f6",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 mb-8 transition-colors">
      <h2 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
        {symbol} Price Chart
      </h2>
      <Line data={data} />
    </div>
  );
};

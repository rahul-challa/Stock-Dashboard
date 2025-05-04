import React from "react";
import { Stock } from "../types/stock";

interface StockTableProps {
  stocks: Stock[];
  loading: boolean;
  onSelect: (symbol: string) => void;
}

export const StockTable: React.FC<StockTableProps> = ({
  stocks,
  loading,
  onSelect,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center py-4">
        <svg className="animate-spin h-6 w-6 text-blue-500" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v8z"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg shadow bg-white dark:bg-gray-800 transition-colors">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-700">
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">
              Symbol
            </th>
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">
              Price
            </th>
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">
              Change
            </th>
            <th className="px-6 py-3 text-left text-gray-700 dark:text-gray-200">
              Change %
            </th>
          </tr>
        </thead>
        <tbody>
          {stocks.map((stock) => (
            <tr
              key={stock.symbol}
              className="border-t border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 cursor-pointer transition"
              onClick={() => onSelect(stock.symbol)}
            >
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-gray-100">
                {stock.symbol}
              </td>
              <td className="px-6 py-4 text-gray-900 dark:text-gray-100">
                ${stock.price.toFixed(2)}
              </td>
              <td
                className={`px-6 py-4 ${
                  stock.change >= 0 ? "text-green-500" : "text-red-400"
                }`}
              >
                {stock.change.toFixed(2)}
              </td>
              <td
                className={`px-6 py-4 ${
                  stock.changePercent >= 0 ? "text-green-500" : "text-red-400"
                }`}
              >
                {stock.changePercent.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

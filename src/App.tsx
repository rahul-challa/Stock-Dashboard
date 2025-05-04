import { useState, useEffect } from "react";
import { StockTable } from "./components/StockTable";
import { SearchBar } from "./components/SearchBar";
import { StockChart } from "./components/StockChart";
import { DarkModeToggle } from "./components/DarkModeToggle";
import { fetchStockData, fetchStockHistory } from "./services/api";
import { Stock } from "./types/stock";

function App() {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedStock, setSelectedStock] = useState<string | null>(null);
  const [chartPrices, setChartPrices] = useState<number[]>([]);
  const [chartLabels, setChartLabels] = useState<string[]>([]);
  const [dark, setDark] = useState(
    () => window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const handleSearch = async (symbol: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchStockData(symbol);
      if (!data || !data["01. symbol"]) {
        setError("Stock not found.");
        setLoading(false);
        return;
      }
      const newStock: Stock = {
        symbol: data["01. symbol"],
        price: parseFloat(data["05. price"]),
        change: parseFloat(data["09. change"]),
        changePercent: parseFloat(data["10. change percent"]),
      };
      setStocks((prev) => [
        newStock,
        ...prev.filter((s) => s.symbol !== newStock.symbol),
      ]);
      setSelectedStock(symbol);

      // Fetch chart data
      const history = await fetchStockHistory(symbol);
      if (history) {
        const dates = Object.keys(history).slice(0, 10).reverse();
        const prices = dates.map((date) =>
          parseFloat(history[date]["4. close"])
        );
        setChartLabels(dates);
        setChartPrices(prices);
      }
    } catch (err) {
      setError("Failed to fetch stock data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSelectStock = async (symbol: string) => {
    setSelectedStock(symbol);
    setLoading(true);
    setError(null);
    try {
      const history = await fetchStockHistory(symbol);
      if (history) {
        const dates = Object.keys(history).slice(0, 10).reverse();
        const prices = dates.map((date) =>
          parseFloat(history[date]["4. close"])
        );
        setChartLabels(dates);
        setChartPrices(prices);
      }
    } catch {
      setError("Failed to fetch chart data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8 transition-colors">
      <DarkModeToggle dark={dark} setDark={setDark} />
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 transition-colors">
          <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900 dark:text-white tracking-tight">
            <span className="text-blue-600 dark:text-blue-400">
              Stock Price
            </span>{" "}
            Dashboard
          </h1>
          <SearchBar onSearch={handleSearch} />
          {error && (
            <div className="text-red-600 bg-red-100 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded p-2 mb-4 text-center">
              {error}
            </div>
          )}
          {selectedStock && chartPrices.length > 0 && (
            <StockChart
              symbol={selectedStock}
              prices={chartPrices}
              labels={chartLabels}
            />
          )}
          <StockTable
            stocks={stocks}
            loading={loading}
            onSelect={handleSelectStock}
          />
          <div className="text-xs text-gray-400 dark:text-gray-500 mt-4 text-center">
            Click a row to view its chart. Powered by Alpha Vantage.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

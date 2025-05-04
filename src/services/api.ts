import axios from "axios";

const API_KEY = "YSTLIBOIPEY5635D";
const BASE_URL = "https://www.alphavantage.co/query";

export const fetchStockData = async (symbol: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: "GLOBAL_QUOTE",
      symbol,
      apikey: API_KEY,
    },
  });
  return response.data["Global Quote"];
};

export const fetchStockHistory = async (symbol: string) => {
  const response = await axios.get(BASE_URL, {
    params: {
      function: "TIME_SERIES_DAILY",
      symbol,
      apikey: API_KEY,
      outputsize: "compact",
    },
  });
  return response.data["Time Series (Daily)"];
};

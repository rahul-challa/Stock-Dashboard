import React from "react";

export const DarkModeToggle: React.FC<{
  dark: boolean;
  setDark: (d: boolean) => void;
}> = ({ dark, setDark }) => (
  <button
    onClick={() => setDark(!dark)}
    className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow transition"
    aria-label="Toggle dark mode"
  >
    {dark ? "🌙 Dark" : "☀️ Light"}
  </button>
);

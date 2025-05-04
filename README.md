# Stock Price Dashboard

A real-time stock price dashboard built with React, TypeScript, and Tailwind CSS. This project was developed as a coding challenge to demonstrate proficiency in modern web development practices.

![Stock Dashboard Screenshot](public/screenshot.png)

## 🚀 Live Demo

Check out the live demo: [Stock Dashboard](https://rahul-challa.github.io/Stock-Dashboard/)

## ✨ Features

- 📊 Real-time stock data display
- 📱 Responsive design with Tailwind CSS
- ⚡ Fast and efficient data fetching
- 🔄 Loading states for better UX
- 🛡️ Error handling for API failures
- 📈 Clean and modern UI

## 🛠️ Tech Stack

- **Frontend Framework:** React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Visualization:** Chart.js
- **API:** [Alpha Vantage](https://www.alphavantage.co/) (Free API)
- **Build Tool:** Vite
- **Deployment:** GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (or npm/yarn)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rahul-challa/Stock-Dashboard.git
cd Stock-Dashboard
```

2. Install dependencies:
```bash
pnpm install
```

3. Create a `.env` file in the root directory and add your Alpha Vantage API key:
```env
VITE_ALPHA_VANTAGE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
pnpm run dev
```

5. Build for production:
```bash
pnpm run build
```

## 📦 Project Structure

```
Stock-Dashboard/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   └── utils/         # Utility functions
├── public/            # Static assets
└── index.html         # Entry HTML file
```

## 🔧 Configuration

The project uses the following configuration files:
- `vite.config.ts` - Vite configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

## 🚀 Deployment

The project is deployed using GitHub Pages. The deployment is automated using GitHub Actions. Any push to the main branch will trigger a new deployment.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

Rahul Challa - [GitHub](https://github.com/rahul-challa)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS

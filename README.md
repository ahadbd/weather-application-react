# SkyCast - Weather Application

A responsive, beautifully designed React web application for displaying real-time weather data and 5-day forecasts. Built with a clean, minimalist card-based UI and premium glassmorphism styling.

## ✨ Features
- **Real-Time Weather Data**: Instantly see the target city's current temperature, 'feels like' temperature, humidity, wind speed, and daily highs/lows!
- **5-Day Forecast**: Clean grid display of upcoming weather patterns, intelligently curated and separated into days.
- **Glassmorphism UI**: A premium, minimalist interface built with Tailwind CSS v4. Smooth hover animations and animated scaling create an engaging look and feel.
- **Robust Error Handling**: Graceful fallback UI states for missing cities, missing API keys, or simple typos. 
- **Responsive Navigation**: Adaptively resizes from a broad multi-column design on Desktop to a slick stacking UI on Mobile.

## 🛠 Tech Stack
- **React 19** (Vite)
- **Tailwind CSS v4**
- **Lucide React** (Icons)
- **Axios** (API Client)

## 🚀 Setup Instructions
1. Clone the repository.
2. Run `npm install` inside the project root to install dependencies.
3. Obtain a free API key from [OpenWeatherMap](https://openweathermap.org/api).
4. Since the key is required, create a `.env` file based on `.env.example` and add your key:
   ```env
   VITE_OPENWEATHER_API_KEY=your_api_key_goes_here
   ```
5. Run `npm run dev` to start the dynamic development server. Open `http://localhost:5173` to view it in your browser. 

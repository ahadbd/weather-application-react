import React, { useState } from 'react';
import { Loader2, AlertCircle, CloudSun } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CurrentWeather from './components/CurrentWeather';
import Forecast from './components/Forecast';
import { fetchWeather } from './services/weatherApi';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city, country) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);

    try {
      const data = await fetchWeather(city, country);
      setWeatherData(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 sm:p-8 font-sans transition-all duration-500 ease-in-out relative flex flex-col items-center">
      
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/50 blur-[120px]" />
      </div>

      <div className="w-full max-w-4xl relative z-10 mx-auto mt-4 sm:mt-12">
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center space-x-3 mb-2">
            <CloudSun size={40} className="text-blue-500 drop-shadow-sm" />
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-800">Sky<span className="text-blue-500">Cast</span></h1>
          </div>
          <p className="text-slate-500 text-lg">Your beautiful weather companion</p>
        </header>

        <SearchBar onSearch={handleSearch} />

        <div className="min-h-[400px] flex flex-col transition-all duration-300">
          {loading && (
            <div className="flex flex-col items-center justify-center flex-1 space-y-4 animate-in fade-in duration-300">
              <Loader2 size={48} className="animate-spin text-blue-500" />
              <p className="text-slate-500 font-medium text-lg tracking-wide">Fetching the skies...</p>
            </div>
          )}

          {error && (
            <div className="glass-card flex flex-col items-center justify-center py-12 text-center border-red-100 bg-red-50/50 animate-in fade-in zoom-in-95 duration-300">
              <AlertCircle size={48} className="text-red-400 mb-4" />
              <p className="text-red-500 font-semibold text-xl">{error}</p>
            </div>
          )}

          {weatherData && !loading && !error && (
            <div className="space-y-4">
              <CurrentWeather data={weatherData.current} />
              <Forecast data={weatherData.forecast} />
            </div>
          )}
          
          {!weatherData && !loading && !error && (
             <div className="flex-1 flex flex-col items-center justify-center text-slate-400 mt-20 opacity-80">
                <CloudSun size={80} className="mb-6 text-slate-300 drop-shadow-sm" />
                <p className="text-xl font-medium tracking-wide">Enter a city to see the weather.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

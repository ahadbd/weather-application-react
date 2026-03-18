import React from 'react';
import { Droplets, Thermometer, Wind, ArrowDown, ArrowUp } from 'lucide-react';

const CurrentWeather = ({ data }) => {
  if (!data) return null;

  const { name, sys, weather, main, wind } = data;
  const iconUrl = `https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`;

  return (
    <div className="glass-card mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-800 to-slate-500 mb-2 tracking-tight">
            {name}, {sys.country}
          </h2>
          <p className="text-xl text-slate-500 capitalize">{weather[0].description}</p>
        </div>
        
        <div className="flex items-center justify-center">
          <img 
            src={iconUrl} 
            alt={weather[0].description} 
            className="w-32 h-32 object-contain drop-shadow-xl"
          />
          <div className="ml-2">
            <span className="text-6xl font-black text-slate-800 tracking-tighter">
              {Math.round(main.temp)}&deg;
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center gap-3 bg-white/40 rounded-2xl p-4">
          <div className="bg-orange-100 p-2 rounded-xl text-orange-600">
            <Thermometer size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Feels Like</p>
            <p className="text-lg font-bold text-slate-800">{Math.round(main.feels_like)}&deg;</p>
          </div>
        </div>

        <div className="flex items-center gap-3 bg-white/40 rounded-2xl p-4">
          <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
            <Droplets size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Humidity</p>
            <p className="text-lg font-bold text-slate-800">{main.humidity}%</p>
          </div>
        </div>

        <div className="flex flex-col justify-center bg-white/40 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-1 text-slate-700">
                <ArrowUp size={18} className="text-red-500" />
                <span className="text-sm font-medium">High</span>
                <span className="font-bold ml-auto">{Math.round(main.temp_max)}&deg;</span>
            </div>
            <div className="flex items-center gap-2 text-slate-700">
                <ArrowDown size={18} className="text-indigo-500" />
                <span className="text-sm font-medium">Low</span>
                <span className="font-bold ml-auto">{Math.round(main.temp_min)}&deg;</span>
            </div>
        </div>

        <div className="flex items-center gap-3 bg-white/40 rounded-2xl p-4">
          <div className="bg-teal-100 p-2 rounded-xl text-teal-600">
            <Wind size={24} />
          </div>
          <div>
            <p className="text-sm text-slate-500 font-medium">Wind</p>
            <p className="text-lg font-bold text-slate-800">{wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;

import React from 'react';

const Forecast = ({ data }) => {
  if (!data?.list) return null;

  // Group forecast by day and pick the item closest to 12:00 PM for each day
  const dailyForecasts = {};
  
  data.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    const hour = parseInt(item.dt_txt.split(' ')[1].split(':')[0], 10);
    
    if (!dailyForecasts[date]) {
      dailyForecasts[date] = item;
    } else {
      // Prefer readings closest to noon
      const currentDiff = Math.abs(12 - parseInt(dailyForecasts[date].dt_txt.split(' ')[1].split(':')[0], 10));
      const newDiff = Math.abs(12 - hour);
      if (newDiff < currentDiff) {
        dailyForecasts[date] = item;
      }
    }
  });

  const next5Days = Object.values(dailyForecasts).slice(1, 6);

  if (next5Days.length === 0) return null;

  return (
    <div className="glass-card animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
      <h3 className="text-xl font-bold text-slate-800 mb-6">5-Day Forecast</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {next5Days.map((item, index) => {
          const dateObj = new Date(item.dt * 1000);
          const dayName = dateObj.toLocaleDateString('en-US', { weekday: 'short' });
          const iconUrl = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
          
          return (
            <div 
              key={index}
              className="flex flex-col items-center p-4 bg-white/40 rounded-2xl hover:bg-white/60 transition-colors"
            >
              <p className="font-semibold text-slate-600 mb-1">{dayName}</p>
              <img 
                src={iconUrl} 
                alt={item.weather[0].description} className="w-16 h-16 drop-shadow-md" 
              />
              <div className="mt-2 text-center">
                <span className="font-bold text-lg text-slate-800">{Math.round(item.main.temp_max)}&deg;</span>
                <span className="text-sm font-medium text-slate-500 ml-2">{Math.round(item.main.temp_min)}&deg;</span>
              </div>
              <p className="text-xs text-slate-500 capitalize mt-1 line-clamp-1 text-center w-full">
                {item.weather[0].description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;

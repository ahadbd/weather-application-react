import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city.trim(), country.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 relative group">
          <input
            type="text"
            placeholder="Enter city name..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-full bg-white/50 backdrop-blur-md border border-white/40 focus:bg-white/80 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none rounded-2xl py-3 px-5 text-slate-700 placeholder-slate-400 transition-all shadow-sm"
            required
          />
        </div>
        <div className="w-full sm:w-32 relative group">
          <input
            type="text"
            placeholder="Country (opt)"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full bg-white/50 backdrop-blur-md border border-white/40 focus:bg-white/80 focus:border-blue-400 focus:ring-2 focus:ring-blue-200 outline-none rounded-2xl py-3 px-5 text-slate-700 placeholder-slate-400 transition-all shadow-sm"
          />
        </div>
        <button
          type="submit"
          disabled={!city.trim()}
          className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-2xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 transform active:scale-95"
        >
          <Search size={20} />
          <span className="sm:hidden md:inline font-medium">Search</span>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;

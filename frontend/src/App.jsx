import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterButtons from './components/FilterButtons';
import VisaCard from './components/VisaCard';
import VisasOnTime from './components/VisasOnTime';
import AtlysInTheNews from './components/AtlysInTheNews';
import Footer from './components/Footer';


function Loader() {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [visaData, setVisaData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_API_URL}/api/cards`)
      .then(res => res.json())
      .then(data => {
        setVisaData(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const filteredVisaData = visaData.filter(visa => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Instant' && visa.category === 'instant') return true;
    if (activeFilter === 'In a week' && visa.category === 'week') return true;
    if (activeFilter === 'In a month' && (visa.category === 'month' || visa.category === 'all')) return true;
    return false;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Hero />
      <FilterButtons activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <div className="max-w-[95vw] mx-auto px-1 py-8">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredVisaData.map((visa, index) => (
              <VisaCard key={`${activeFilter}-${index}`} {...visa} />
            ))}
          </div>
        )}
      </div>
      <VisasOnTime />
      <AtlysInTheNews />
      <Footer />
    </div>
  );
}

export default App;
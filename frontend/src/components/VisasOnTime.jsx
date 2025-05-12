import { FiStar } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

export default function VisasOnTime() {
  const [showSwitcher, setShowSwitcher] = useState(true);
  const switcherRef = useRef(null);
  const measuredSwitcherHeight = useRef(0);

  useEffect(() => {
    const handleVisibility = () => {
      const footer = document.getElementById('page-footer');
      const switcherElement = switcherRef.current;

      if (switcherElement && measuredSwitcherHeight.current === 0) {
        measuredSwitcherHeight.current = switcherElement.offsetHeight;
      }

      if (!footer) {
        setShowSwitcher(true);
        return;
      }

      const footerRect = footer.getBoundingClientRect();
      const sHeight = measuredSwitcherHeight.current || 60;

      if (footerRect.top < (window.innerHeight - sHeight)) {
        setShowSwitcher(false);
      } else {
        setShowSwitcher(true);
      }
    };

    window.addEventListener('scroll', handleVisibility);
    window.addEventListener('resize', handleVisibility);
    handleVisibility();

    return () => {
      window.removeEventListener('scroll', handleVisibility);
      window.removeEventListener('resize', handleVisibility);
    };
  }, []);

  return (
    <div className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Visas On Time
        </h2>
        <div class="h-px w-full bg-gray-300 mt-4 mb-16"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
       
          <div className="bg-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="text-5xl font-bold text-indigo-600 mb-3">99.2%</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Visas on time</h3>
            <p className="text-gray-600 text-sm">
              Never miss your trip. Visas on Atlys come 2x faster.
            </p>
          </div>

        
          <div className="bg-slate-800 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="text-5xl font-bold text-sky-400 mb-3">5L+</div>
            <h3 className="text-xl font-semibold mb-2">Visas Processed</h3>
            <p className="text-slate-300 text-sm">
              In just over a year, we are India's second largest visa processing platform.
            </p>
          </div>

        
          <div className="bg-indigo-600 text-white p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-full flex flex-col">
            <div className="flex items-center text-5xl font-bold mb-3">
              4.91 
              <FiStar className="ml-2 text-yellow-400 fill-current" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Rating</h3>
            <p className="text-indigo-100 text-sm">
              Across Trustpilot, app stores, and expert reviews, we've scored highest-in-class reviews.
            </p>
          </div>
        </div>
        {showSwitcher && (
          <div
            ref={switcherRef}
            id="grid-map-view-switcher"
            className="fixed bottom-4 left-1/2 z-10 flex -translate-x-1/2 scale-75 overflow-hidden rounded-full text-white transition-all md:scale-100"
            style={{ opacity: 1, pointerEvents: 'all' }}
          >
            <div className="absolute left-0 top-0 h-full w-full bg-[rgba(18,25,38,0.6)] backdrop-blur"></div>
            <div
              className="ease-easeInOutBack absolute left-0 top-0 h-full w-1/2 rounded-full bg-[rgba(18,25,38,0.9)] transition-all duration-500"
              style={{ transform: 'translateX(0)' }}
            ></div>
            <button className="z-[1] flex w-[140px] cursor-pointer items-center justify-center gap-2 border-0 px-4 py-3 outline-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
              >
                <path
                  d="M2 5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 2 4.08 2 5.2 2h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C10 3.52 10 4.08 10 5.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C8.48 10 7.92 10 6.8 10H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 8.48 2 7.92 2 6.8V5.2zM14 5.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C15.52 2 16.08 2 17.2 2h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 3.52 22 4.08 22 5.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 10 19.92 10 18.8 10h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C14 8.48 14 7.92 14 6.8V5.2zM2 17.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C3.52 14 4.08 14 5.2 14h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C10 15.52 10 16.08 10 17.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C8.48 22 7.92 22 6.8 22H5.2c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C2 20.48 2 19.92 2 18.8v-1.6zM14 17.2c0-1.12 0-1.68.218-2.108a2 2 0 01.874-.874C15.52 14 16.08 14 17.2 14h1.6c1.12 0 1.68 0 2.108.218a2 2 0 01.874.874C22 15.52 22 16.08 22 17.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 01-.874.874C20.48 22 19.92 22 18.8 22h-1.6c-1.12 0-1.68 0-2.108-.218a2 2 0 01-.874-.874C14 20.48 14 19.92 14 18.8v-1.6z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Show Grid
            </button>
            <button className="z-[1] flex w-[140px] cursor-pointer items-center justify-center gap-2 border-0 px-4 py-3 outline-none">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
              >
                <path
                  d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10c0-2.21-4.477-4-10-4S2 9.79 2 12m20 0c0 2.21-4.477 4-10 4S2 14.21 2 12m10 10C6.477 22 2 17.523 2 12m10 10c2.21 0 4-4.477 4-10S14.21 2 12 2m0 20c-2.21 0-4-4.477-4-10S9.79 2 12 2M2 12C2 6.477 6.477 2 12 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              Show Map
            </button>
          </div>
        )}
      </div>
    </div>
  );
} 
import React, { useMemo } from "react";

export default function CardsSection({
  countries = [],
  search,
  filter,
  setFilter,
  filterOptions = [],
  scrolled,
  whyAtlys = [],
  openFaq,
  setOpenFaq,
  featured = []
}) {

  const filteredCountries = useMemo(
    () =>
      countries.filter((c) =>
        c.name.toLowerCase().includes(search.toLowerCase())
      ),
    [countries, search]
  );

  return (
    <>
      <div className={`transition-all duration-500 mt-16 md:mt-20 ${scrolled ? '!mt-6 md:!mt-8' : ''} flex items-center justify-center w-full z-30`}>
        <div className="max-w-2xl w-full mx-auto flex items-center justify-center">
          <div className="flex w-full bg-white rounded-2xl border border-[#edeefd] shadow-[0_8px_24px_0_rgba(38,50,56,0.09)] px-2 md:px-4 py-2 gap-0 items-center overflow-x-auto">
            <span className="flex-shrink-0 text-[#191b37] p-0 flex items-center text-xl md:text-2xl mr-3 md:mr-4">
              <svg width="29" height="25" fill="none" viewBox="0 0 29 25"><path d="M10.17 7.731C10.406 5.816 12.036 4.383 14.002 4.383c2.006 0 3.673 1.495 3.82 3.466" stroke="#191B37" strokeWidth={1.5} strokeLinecap="round"/><path d="M18.382 6.641C21.396 7.023 26.315 8.435 27.101 10.042c.895 1.821-2.473 3.877-7.326 5.12-4.854 1.243-9.57 1.029-13.252.27C2.965 14.097.042 12.38.917 10.657c.697-1.333 4.26-2.713 8.353-3.748" stroke="#585cff" strokeWidth={1.75} strokeLinejoin="round"/><ellipse cx="14.002" cy="20.047" rx="2.414" ry="2.307" fill="#EFEFFF" stroke="#585cff" strokeWidth={1.25}/></svg>
            </span>
            <div className="border-l h-7 mx-1 md:mx-2 border-[#efefef]"/>
            <div className="flex flex-1 items-center overflow-x-auto gap-1 sm:gap-2 md:gap-3">
              {filterOptions.map(opt => {
                let cls = "px-5 py-2 text-base font-semibold rounded-[10px] transition focus:outline-none focus:ring-2 focus:ring-[#585cff] text-[#191b37] bg-transparent";
                if (filter === opt.value) {
                  if (opt.value === 'all') {
                    cls += ' bg-[#585cff] text-white shadow';
                  } else if (opt.value === 'week') {
                    cls += ' bg-[#edeefd] text-[#191b37] font-semibold shadow-none';
                  } else {
                    cls += ' bg-transparent text-[#191b37] font-semibold';
                  }
                } else {
                  cls += ' bg-transparent text-[#191b37] font-semibold';
                }
                return (
                  <button
                    key={opt.value}
                    onClick={() => setFilter(opt.value)}
                    className={cls}
                    aria-pressed={filter === opt.value}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <main className="flex-1 w-full max-w-6xl mx-auto px-2 sm:px-3 mt-6 flex flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 mb-8">
          {filteredCountries.length === 0 && (
            <div className="col-span-full text-center text-[#2e414d] text-lg py-12 font-medium">No matches found.</div>
          )}
          {filteredCountries.map((country) => (
            <a
              key={country.name}
              href={country.cardType !== 'interactive_map' ? country.url : '#'}
              className="group relative block rounded-2xl bg-white shadow-lg border border-[#ececec] focus:ring-2 focus:ring-[#3e54fa] hover:shadow-xl transition shadow-primary/10 overflow-hidden cursor-pointer hover:-translate-y-1 duration-200 focus:outline-none min-h-[170px] flex flex-col"
              tabIndex={0}
              target={country.cardType !== 'interactive_map' ? "_blank" : "_self"}
              rel={country.cardType !== 'interactive_map' ? "noopener noreferrer" : ""}
              onClick={(e) => { if (country.cardType === 'interactive_map') e.preventDefault(); }}
            >
              <div className="relative w-full">
                <img
                  src={country.image}
                  alt={country.name}
                  className={`w-full ${country.cardType === 'interactive_map' ? 'h-[170px]' : 'h-24 sm:h-28 md:h-32'} object-cover object-center bg-[#f7f8f7] group-hover:scale-[1.07] transition duration-200`}
                  loading="lazy"
                  draggable="false"
                />
                {country.cardType === 'interactive_map' ? (
                  <div className="absolute bottom-0 left-0 w-full p-2 bg-black/50 flex justify-center space-x-3 items-center">
                    <button className="flex items-center text-white text-xs font-medium hover:opacity-80 transition-opacity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect></svg>
                      Show Grid
                    </button>
                    <button className="flex items-center text-white text-xs font-medium hover:opacity-80 transition-opacity">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line></svg>
                      Show Map
                    </button>
                  </div>
                ) : (
                  country.visas && (
                    <div className="absolute bottom-0 left-0 w-full bg-[#585cff] text-white text-[11px] font-semibold py-1.5 px-2 text-center">
                      {country.visas}
                    </div>
                  )
                )}
                {country.cardType !== 'interactive_map' && country.trending && (
                    <span className="absolute top-3 right-3 bg-[#28b6d7] text-white font-bold py-0.5 px-2 text-xs rounded-full shadow z-10">Trending</span>
                )}
                {country.cardType !== 'interactive_map' && country.featured && (
                    <span className="absolute top-3 right-3 bg-[#958857] text-white font-bold py-0.5 px-2 text-xs rounded-full shadow z-10">Featured</span>
                )}
              </div>

              {country.cardType !== 'interactive_map' && (
                <div className="flex flex-col p-3 pb-4 flex-grow">
                  <div className="font-semibold text-[#2e414d] text-base line-clamp-2 leading-tight mb-1">
                    {country.name}
                  </div>
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span className="text-[#705a4d] text-[15px] font-bold">{country.price}</span>
                    <span className="text-[#87a3b2] text-xs whitespace-nowrap">{country.time}</span>
                  </div>
                </div>
              )}
            </a>
          ))}
        </div>
      </main>
      <section className="w-full px-2 sm:px-4 max-w-3xl mx-auto mb-4 sm:mb-8">
        <div className="bg-white/95 rounded-xl shadow p-4 sm:p-7 border border-[#bdced8]">
          <div className="mb-1 text-base md:text-lg font-bold text-[#2e414d]">Why Atlys?</div>
          {whyAtlys.map((faq, i) => (
            <div key={faq.q} className="mb-2 last:mb-0">
              <button
                className="flex w-full justify-between items-center py-2 px-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#28b6d7] transition font-semibold text-left text-[#2e414d] bg-transparent"
                aria-expanded={openFaq === i}
                aria-controls={`faq-answer-${i}`}
                tabIndex={0}
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
              >
                <span>{faq.q}</span>
                <svg className={`w-5 h-5 ml-2 transition-transform duration-200 ${openFaq === i ? 'rotate-180' : ''}`} fill="none" stroke="#28b6d7" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div
                id={`faq-answer-${i}`}
                className={`pl-1 pr-2 mt-1 text-sm text-[#2e414d] transition-all duration-200 ${openFaq===i?'max-h-40 opacity-100 pointer-events-auto':'max-h-0 opacity-70 pointer-events-none overflow-hidden'}`}
                aria-hidden={openFaq !== i}
              >
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full px-4 bg-white py-8 border-t border-[#ececec] text-center">
        <div className="max-w-xl mx-auto mb-4">
          <div className="flex flex-col gap-1">
            <span className="uppercase tracking-widest text-[#705a4d] text-xs font-semibold">As seen in</span>
            <div className="flex flex-wrap gap-6 justify-center items-center mt-2">
              {featured.map((f, idx) => (
                <img
                  key={idx}
                  src={f.logo}
                  alt={f.alt}
                  className="h-9 grayscale hover:grayscale-0 transition"
                  style={{ filter: 'grayscale(1)', opacity: 0.8 }}
                />
              ))}
              <span className="text-[#958857] text-sm font-medium">FORTUNE</span>
              <span className="text-[#2e414d] text-sm font-medium">Forbes</span>
              <span className="text-[#2e414d] text-sm font-medium">Condé Nast Traveller</span>
              <span className="text-[#2e414d] text-sm font-medium">The Times</span>
              <span className="text-[#2e414d] text-sm font-medium">The Telegraph</span>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 w-full bg-[#fff] border-t border-[#bdced8] text-center text-xs sm:text-sm text-[#2e414d] opacity-80">
        &copy; {new Date().getFullYear()} Atlys.com Clone — All product, company & visa details belong to their respective owners.
      </footer>
    </>
  );
}
import React from 'react';

const Connectivity = ({ data }) => {
  return (
    <section id="connectivity" className="py-24 md:py-32 px-4 bg-brand-light">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="md:w-1/2 relative group">
          <div className="absolute -inset-4 bg-primary/5 rounded-sm transition-all group-hover:-inset-6"></div>
          <img
            src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Connectivity"
            className="relative z-10 w-full rounded-sm grayscale-[20%] group-hover:grayscale-0 transition duration-700"
          />
        </div>
        <div className="md:w-1/2">
          <span className="section-label">PRIME LOCATION</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">
            {data.connectivity_title}
          </h2>
          <p className="text-lg text-secondary mb-12 font-light leading-relaxed">
            {data.connectivity_description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-white border border-slate-100 rounded-sm hover:border-accent/40 transition">
              <span className="font-bold text-primary block mb-2 tracking-wide uppercase text-xs">Airport</span>
              <p className="text-2xl font-serif text-slate-400 font-light italic">15 Mins Drive</p>
            </div>
            <div className="p-8 bg-white border border-slate-100 rounded-sm hover:border-accent/40 transition">
              <span className="font-bold text-primary block mb-2 tracking-wide uppercase text-xs">Business District</span>
              <p className="text-2xl font-serif text-slate-400 font-light italic">10 Mins Drive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Connectivity;

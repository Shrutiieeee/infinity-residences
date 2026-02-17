import React from 'react';

const Amenities = ({ amenities }) => {
    return (
        <section className="py-24 md:py-32 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <span className="section-label">CURATED LIFESTYLE</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">Unmatched Amenities</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {amenities.map((amenity, index) => (
                        <div key={index} className="p-10 border border-slate-100 rounded-sm hover:border-slate-300 transition-all duration-500 bg-brand-light/20 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full -mr-12 -mt-12 transition-all duration-500 group-hover:scale-150 group-hover:bg-slate-100"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-bold mb-6 text-primary border-l-2 border-accent pl-4 group-hover:border-primary transition-all font-serif italic">
                                    {amenity.title}
                                </h3>
                                <p className="text-secondary font-light leading-relaxed">
                                    {amenity.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Amenities;

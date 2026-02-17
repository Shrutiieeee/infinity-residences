import React from 'react';

const Overview = ({ data }) => {
    return (
        <section id="overview" className="py-24 md:py-32 px-4 bg-white border-b border-slate-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 mb-20">
                    <div className="lg:w-1/2">
                        <span className="section-label">THE VISION</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-primary uppercase tracking-tight leading-[1.1]">
                            {data.overview_title}
                        </h2>
                        <div className="w-16 h-[2px] bg-accent/30 mb-12"></div>
                        <p className="text-xl text-secondary leading-relaxed font-light mb-8 italic font-serif">
                            A curated lifestyle where architecture meets nature, designed for those who settle for nothing less than absolute excellence.
                        </p>
                        <p className="text-lg text-secondary/80 leading-relaxed font-light">
                            {data.overview_description}
                        </p>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-slate-50 border border-slate-100 -z-10 rotate-12"></div>
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Luxury Architecture"
                            className="w-full h-[500px] object-cover shadow-2xl rounded-sm grayscale-[10%] hover:grayscale-0 transition duration-700"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;

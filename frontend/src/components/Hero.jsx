import React from 'react';

const Hero = ({ data }) => {
    const scrollToOverview = () => {
        document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative h-screen min-h-[700px] flex items-center justify-center text-center text-white overflow-hidden">
            <div className="absolute inset-0 bg-primary/40 z-10"></div>
            <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
                alt="Luxury Penthouse"
                className="absolute inset-0 w-full h-full object-cover animate-slow-zoom"
            />
            <div className="relative z-20 px-4 max-w-5xl mx-auto">
                <span className="section-label text-white/80 mb-6 drop-shadow-md">Luxury Living Redefined</span>
                <h1 className="text-5xl md:text-8xl font-bold mb-8 leading-[1.1] drop-shadow-xl font-serif">
                    {data.hero_title}
                </h1>
                <p className="text-xl md:text-2xl mb-12 font-light tracking-wide text-white/90 max-w-2xl mx-auto drop-shadow-lg">
                    {data.hero_subtitle}
                </p>
                <button
                    onClick={scrollToOverview}
                    className="btn-premium bg-white text-primary hover:bg-slate-100 uppercase tracking-widest text-sm py-5 px-12 transition-all duration-500 shadow-2xl"
                >
                    {data.hero_button}
                </button>
            </div>
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition" onClick={scrollToOverview}>
                <span className="text-3xl">↓</span>
            </div>
        </section>
    );
};

export default Hero;

import React from 'react';

const About = ({ data }) => {
    return (
        <section className="py-24 md:py-32 px-4 bg-primary text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 -skew-x-12 translate-x-1/2"></div>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="md:w-1/2">
                    <span className="section-label text-white/60">OUR LEGACY</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{data.about_title}</h2>
                    <div className="w-12 h-[2px] bg-accent/50 mb-8"></div>
                    <p className="text-xl font-light leading-relaxed text-white/80 italic font-serif">
                        "{data.about_description}"
                    </p>
                </div>
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                    <div className="p-8 border border-white/10 bg-white/5 rounded-sm">
                        <span className="text-3xl font-serif block mb-2 font-bold tracking-tighter">15+</span>
                        <span className="text-xs uppercase tracking-widest text-white/40">Years of Excellence</span>
                    </div>
                    <div className="p-8 border border-white/10 bg-white/5 rounded-sm">
                        <span className="text-3xl font-serif block mb-2 font-bold tracking-tighter">500+</span>
                        <span className="text-xs uppercase tracking-widest text-white/40">Happy Families</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

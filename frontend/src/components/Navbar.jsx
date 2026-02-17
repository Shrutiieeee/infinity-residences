import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-slate-100' : 'bg-transparent py-8'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center text-primary">
                <div className="flex items-center gap-4 cursor-pointer" onClick={() => scrollToSection('hero')}>
                    <h1 className={`text-2xl font-serif italic font-bold tracking-tighter transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>
                        Infinity Residences
                    </h1>
                </div>

                <div className="hidden lg:flex items-center gap-10">
                    {['overview', 'amenities', 'about', 'faq', 'contact'].map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item)}
                            className={`text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 hover:text-accent relative group ${isScrolled ? 'text-primary' : 'text-white/80'}`}
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                        </button>
                    ))}
                    <button
                        onClick={() => scrollToSection('contact')}
                        className={`px-8 py-3 text-[10px] uppercase font-bold tracking-[0.2em] transition-all duration-500 border rounded-sm ${isScrolled ? 'bg-primary text-white border-primary hover:bg-slate-800' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}
                    >
                        Inquire Now
                    </button>
                </div>

                <div className="lg:hidden text-2xl cursor-pointer" style={{ color: isScrolled ? 'inherit' : 'white' }}>
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

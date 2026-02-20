import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Connectivity from '../components/Connectivity';
import Amenities from '../components/Amenities';
import About from '../components/About';
import Construction from '../components/Construction';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const Home = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/content`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) return (
        <div className="h-screen flex items-center justify-center bg-primary">
            <div className="text-center">
                <div className="w-16 h-16 border-t-2 border-accent border-solid rounded-full animate-spin mx-auto mb-6"></div>
                <p className="text-xs uppercase tracking-[0.5em] text-accent animate-pulse">Initializing Portal</p>
            </div>
        </div>
    );
    if (!data) return <div className="h-screen flex items-center justify-center text-xl text-red-500">Error loading content</div>;

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <main className="font-sans text-primary scroll-smooth">
            <Navbar />
            <Construction data={data.website_content} />
            <Hero data={data.website_content} />
            <Overview data={data.website_content} />
            <Connectivity data={data.website_content} />
            <div id="amenities" className="bg-brand-light px-4">
                <Amenities amenities={data.amenities} />
            </div>
            <About data={data.website_content} />
            <FAQ faqs={data.faq} />
            <Contact />

            <footer className="bg-primary text-white pt-24 pb-12 border-t border-white/5 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-serif italic font-bold">Infinity Residences</h3>
                        <p className="text-sm font-light leading-relaxed text-white/40">
                            Crafting high-end residential experiences that transcend the ordinary. Every project is a testament to our commitment to architectural brilliance and engineering precision.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Facebook, label: 'FB', url: '#' },
                                { icon: Twitter, label: 'TW', url: '#' },
                                { icon: Instagram, label: 'IG', url: 'https://www.instagram.com/blxy.artzy/' },
                                { icon: Linkedin, label: 'LI', url: 'https://www.linkedin.com/in/shrutikakhandale-4b8210291/' }
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center border border-white/10 text-white/60 hover:border-accent hover:text-accent transition duration-500 cursor-pointer rounded-full group"
                                >
                                    <s.icon size={16} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-10 text-accent/80">Navigation</h4>
                        <ul className="space-y-4 text-xs uppercase tracking-widest font-light text-white/50">
                            <li className="hover:text-white transition cursor-pointer" onClick={() => scrollToSection('hero')}>Top</li>
                            <li className="hover:text-white transition cursor-pointer" onClick={() => scrollToSection('overview')}>Overview</li>
                            <li className="hover:text-white transition cursor-pointer" onClick={() => scrollToSection('amenities')}>Amenities</li>
                            <li className="hover:text-white transition cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-10 text-accent/80">Information</h4>
                        <ul className="space-y-4 text-xs uppercase tracking-widest font-light text-white/50">
                            <li className="hover:text-white transition cursor-pointer">Legal Disclaimer</li>
                            <li className="hover:text-white transition cursor-pointer">Privacy Protocol</li>
                            <li className="hover:text-white transition cursor-pointer">RERA No: PRJ/123/456</li>
                            <li className="hover:text-white transition cursor-pointer">Partner Access</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] mb-10 text-accent/80">Site Office</h4>
                        <p className="text-xs font-light leading-loose text-white/40 mb-8">
                            Groud Floor, Infinity Tower A, <br />
                            Pali Hill Extension, <br />
                            Mumbai West - 400050
                        </p>
                        <a href="mailto:info@infinityresidences.com" className="text-[10px] uppercase tracking-widest border-b border-white/10 pb-1 hover:border-accent transition">
                            Official Correspondence
                        </a>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 pt-12 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">© 2026 Infinity Residences Limited | Built for Exclusive Viewings</p>
                    <a href="/admin" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white/60 transition-all border border-white/10 px-6 py-2 hover:border-white/30 hover:bg-white/5">
                        Console Entry
                    </a>
                </div>
            </footer>
        </main>
    );
};

export default Home;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminDashboard = () => {
    const [content, setContent] = useState(null);
    const [amenities, setAmenities] = useState([]);
    const [faqs, setFaqs] = useState([]);
    const [message, setMessage] = useState('');
    const [activeTab, setActiveTab] = useState('hero');
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('isAdmin') !== 'true') {
            navigate('/admin');
            return;
        }

        const fetchData = async () => {
            try {
                const response = await axios.get(`${API_URL}/content`);
                setContent(response.data.website_content);
                setAmenities(response.data.amenities);
                setFaqs(response.data.faq);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [navigate]);

    const handleInputChange = (e) => {
        setContent({ ...content, [e.target.name]: e.target.value });
    };

    const handleAmenityChange = (index, field, value) => {
        const updated = [...amenities];
        updated[index][field] = value;
        setAmenities(updated);
    };

    const handleFaqChange = (index, field, value) => {
        const updated = [...faqs];
        updated[index][field] = value;
        setFaqs(updated);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.put(`${API_URL}/content`, {
                website_content: content,
                amenities,
                faq: faqs
            });
            setMessage('Changes published to live site successfully.');
            setTimeout(() => setMessage(''), 5000);
        } catch (error) {
            alert('Action failed. Please check network connectivity.');
        }
    };

    if (!content) return (
        <div className="min-h-screen flex items-center justify-center bg-brand-light">
            <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    const InputField = ({ label, ...props }) => (
        <div className="space-y-2">
            <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">{label}</label>
            <input
                {...props}
                className="w-full px-5 py-4 border border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary outline-none transition-all duration-300 rounded-sm font-sans font-light text-primary"
            />
        </div>
    );

    const TextAreaField = ({ label, ...props }) => (
        <div className="space-y-2">
            <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">{label}</label>
            <textarea
                {...props}
                className="w-full px-5 py-4 border border-slate-100 bg-slate-50/30 focus:bg-white focus:border-primary outline-none transition-all duration-300 rounded-sm h-40 font-sans font-light resize-none text-primary"
            />
        </div>
    );

    const tabs = [
        { id: 'hero', label: 'Primary Hero', icon: '✨' },
        { id: 'overview', label: 'Vision & Project', icon: '🏛️' },
        { id: 'amenities', label: 'Infrastructure', icon: '🏊‍♂️' },
        { id: 'about', label: 'Corporate Desk', icon: '🏢' },
        { id: 'faq', label: 'Support Desk', icon: '❓' }
    ];

    return (
        <div className="min-h-screen bg-brand-light flex font-sans">
            {/* Sidebar */}
            <aside className="w-80 bg-primary text-white flex flex-col fixed inset-y-0 left-0 z-50 shadow-2xl">
                <div className="p-12 border-b border-white/5">
                    <h3 className="text-2xl font-serif italic font-bold">Infinity</h3>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/30 mt-2">Management Console</p>
                </div>

                <nav className="flex-1 py-12 px-6 space-y-2">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`w-full flex items-center gap-4 px-6 py-4 rounded-sm text-xs uppercase tracking-widest transition-all duration-300 ${activeTab === tab.id ? 'bg-white/10 text-white border-l-4 border-accent pl-10' : 'text-white/40 hover:text-white hover:bg-white/5'}`}
                        >
                            <span>{tab.icon}</span>
                            {tab.label}
                        </button>
                    ))}
                </nav>

                <div className="p-8 border-t border-white/5">
                    <button
                        onClick={() => { localStorage.removeItem('isAdmin'); navigate('/admin'); }}
                        className="w-full py-4 border border-white/10 text-white/40 hover:text-red-400 hover:border-red-400 transition-all text-[10px] uppercase tracking-widest rounded-sm"
                    >
                        Sign Out
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 ml-80 p-12 lg:p-20 relative">
                {message && (
                    <div className="fixed top-8 right-8 z-[100] bg-primary text-white px-8 py-4 text-xs tracking-[0.2em] uppercase shadow-2xl border border-accent/20 animate-slide-in">
                        {message}
                    </div>
                )}

                <div className="max-w-4xl mx-auto">
                    <header className="mb-16">
                        <span className="section-label mb-2">Editor Mode</span>
                        <h1 className="text-4xl font-bold text-primary font-serif">Refine the Experience</h1>
                        <p className="text-secondary mt-4 font-light">Updates are pushed to the live portal in real-time upon commit.</p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-12">
                        {activeTab === 'hero' && (
                            <div className="bg-white p-12 border border-slate-200 shadow-sm space-y-8 animate-fade-in relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-5 grayscale -z-0" />
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-serif italic mb-10 text-primary">Hero Environment</h2>
                                    <div className="grid gap-8">
                                        <InputField label="Primary Page Title" name="hero_title" value={content.hero_title} onChange={handleInputChange} />
                                        <TextAreaField label="Narrative Intro" name="hero_subtitle" value={content.hero_subtitle} onChange={handleInputChange} />
                                        <InputField label="Primary Action Button" name="hero_button" value={content.hero_button} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'overview' && (
                            <div className="bg-white p-12 border border-slate-200 shadow-sm space-y-8 animate-fade-in relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-5 grayscale -z-0" />
                                <div className="relative z-10 space-y-8">
                                    <h2 className="text-2xl font-serif italic mb-10 text-primary">Vision & Logistics</h2>
                                    <InputField label="Section Heading" name="overview_title" value={content.overview_title} onChange={handleInputChange} />
                                    <TextAreaField label="Detailed Narrative" name="overview_description" value={content.overview_description} onChange={handleInputChange} />
                                    <div className="pt-8 border-t border-slate-50 space-y-8">
                                        <InputField label="Connectivity Protocol" name="connectivity_title" value={content.connectivity_title} onChange={handleInputChange} />
                                        <TextAreaField label="Location Intel" name="connectivity_description" value={content.connectivity_description} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'amenities' && (
                            <div className="bg-white p-12 border border-slate-200 shadow-sm space-y-12 animate-fade-in relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-5 grayscale -z-0" />
                                <div className="relative z-10">
                                    <h2 className="text-2xl font-serif italic mb-10 text-primary">Amenity Infrastructure</h2>
                                    <div className="grid gap-12">
                                        {amenities.map((item, index) => (
                                            <div key={index} className="p-8 bg-brand-light border border-slate-100 rounded-sm space-y-6">
                                                <InputField label={`Unit ${index + 1} Identification`} value={item.title} onChange={(e) => handleAmenityChange(index, 'title', e.target.value)} />
                                                <TextAreaField label={`Unit ${index + 1} Specification`} value={item.description} onChange={(e) => handleAmenityChange(index, 'description', e.target.value)} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'about' && (
                            <div className="bg-white p-12 border border-slate-200 shadow-sm space-y-8 animate-fade-in relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-5 grayscale -z-0" />
                                <div className="relative z-10 space-y-8">
                                    <h2 className="text-2xl font-serif italic mb-10 text-primary">Corporate Desk</h2>
                                    <InputField label="Institutional Title" name="about_title" value={content.about_title} onChange={handleInputChange} />
                                    <TextAreaField label="Legacy Statement" name="about_description" value={content.about_description} onChange={handleInputChange} />
                                    <div className="pt-8 border-t border-slate-50">
                                        <InputField label="Live Progress Protocol" name="construction_label" value={content.construction_label} onChange={handleInputChange} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'faq' && (
                            <div className="bg-white p-12 border border-slate-200 shadow-sm space-y-12 animate-fade-in relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200" alt="" className="absolute top-0 right-0 w-64 h-64 object-cover opacity-5 grayscale -z-0" />
                                <div className="relative z-10 space-y-12">
                                    <h2 className="text-2xl font-serif italic mb-10 text-primary">Inquiry Framework</h2>
                                    {faqs.map((item, index) => (
                                        <div key={index} className="space-y-6 p-8 bg-brand-light border border-slate-100 rounded-sm">
                                            <InputField label={`Public Query ${index + 1}`} value={item.question} onChange={(e) => handleFaqChange(index, 'question', e.target.value)} />
                                            <TextAreaField label={`Official Response ${index + 1}`} value={item.answer} onChange={(e) => handleFaqChange(index, 'answer', e.target.value)} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="pt-12 border-t border-slate-200">
                            <button type="submit" className="btn-premium w-full py-6 text-sm uppercase tracking-[0.4em] font-bold shadow-2xl">
                                Commit Portal Updates
                            </button>
                        </div>
                    </form>
                </div>
            </main>

            <style>{`
                @keyframes slide-in {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-slide-in {
                    animation: slide-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                }
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fade-in 0.4s ease-out forwards;
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;

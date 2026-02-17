import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 md:py-32 px-4 bg-white relative overflow-hidden">
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl"></div>
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
                <div className="lg:w-1/2">
                    <span className="section-label">GET IN TOUCH</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary leading-tight">Start Your Journey Today</h2>
                    <p className="text-lg text-secondary mb-12 font-light leading-relaxed">
                        Our expert consultants are ready to guide you through the exclusive luxury of Infinity Residences. Visit our corporate office or reach out for a private viewing.
                    </p>

                    <div className="space-y-10">
                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                <MapPin className="text-white" size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Corporate Headquarters</h4>
                                <p className="text-secondary font-light">12/A Skyline Towers, Central Business District, Mumbai - 400001</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                <Phone className="text-white" size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Concierge Desk</h4>
                                <p className="text-secondary font-light">+91 (22) 4567 8900 | +91 98765 43210</p>
                            </div>
                        </div>

                        <div className="flex gap-6">
                            <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                <Mail className="text-white" size={20} strokeWidth={1.5} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary uppercase text-xs tracking-widest mb-2">Inquiries</h4>
                                <p className="text-secondary font-light">sales@infinityresidences.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className="bg-brand-light p-10 md:p-12 border border-slate-100 shadow-sm">
                        <h3 className="text-2xl font-serif italic mb-8 font-bold text-primary">Priority Inquiry Form</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">Full Name</label>
                                    <input type="text" className="w-full px-4 py-3 border-b-2 border-slate-200 focus:border-primary outline-none bg-transparent transition-colors font-light" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 border-b-2 border-slate-200 focus:border-primary outline-none bg-transparent transition-colors font-light" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">Corporate Email</label>
                                <input type="email" className="w-full px-4 py-3 border-b-2 border-slate-200 focus:border-primary outline-none bg-transparent transition-colors font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest font-bold text-slate-400 uppercase">Inquiry Details</label>
                                <textarea className="w-full px-4 py-3 border-b-2 border-slate-200 focus:border-primary outline-none bg-transparent transition-colors h-32 font-light resize-none"></textarea>
                            </div>
                            <button type="button" className="w-full btn-premium py-5 mt-6 uppercase tracking-[0.3em] text-xs font-bold">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

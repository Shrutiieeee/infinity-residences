import React, { useState } from 'react';

const FAQ = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="py-24 md:py-32 px-4 bg-brand-light">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="section-label">ASSISTANCE</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary">General Inquiries</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white border-b border-slate-200 overflow-hidden transition-all duration-300">
                            <button
                                className="w-full text-left px-8 py-6 font-semibold text-primary flex justify-between items-center hover:bg-slate-50 transition group"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span className="text-lg pr-8">{faq.question}</span>
                                <span className={`text-xl font-light transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                                    {openIndex === index ? '✕' : '＋'}
                                </span>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
                                <div className="px-8 pb-8 text-secondary font-light leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;

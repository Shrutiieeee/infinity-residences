import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API_URL}/login`, { email, password });
            if (response.data.success) {
                localStorage.setItem('isAdmin', 'true');
                navigate('/admin/dashboard');
            }
        } catch (err) {
            setError('The credentials provided are incorrect.');
        }
    };

    return (
        <div className="min-h-screen flex font-sans bg-white">
            {/* Visual Side */}
            <div className="hidden lg:block lg:w-1/2 relative">
                <div className="absolute inset-0 bg-primary/20 z-10 transition-opacity"></div>
                <img
                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Luxury Estate"
                    className="absolute inset-0 w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute bottom-16 left-16 z-20 max-w-md">
                    <span className="section-label text-white/60 mb-4 block">PORTAL ACCESS</span>
                    <h2 className="text-5xl font-bold text-white mb-6 font-serif italic">The Art of Management.</h2>
                    <p className="text-white/60 font-light text-lg">Enter the administrative environment to curate the Infinity residences experience.</p>
                </div>
            </div>

            {/* Form Side */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-brand-light">
                <div className="max-w-md w-full bg-white border border-slate-200 p-12 shadow-sm rounded-sm">
                    <div className="text-center mb-10">
                        <span className="section-label">ADMINISTRATION</span>
                        <h2 className="text-3xl font-bold text-primary">Internal Access</h2>
                    </div>

                    {error && (
                        <div className="bg-red-50 text-red-600 p-4 mb-8 text-sm text-center border border-red-100 rounded-sm">
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-8">
                        <div>
                            <label className="block text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2">Corporate Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-3 border-b-2 border-slate-100 focus:border-primary outline-none transition-colors duration-300 font-light"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-[11px] uppercase tracking-widest font-bold text-slate-400 mb-2">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-3 border-b-2 border-slate-100 focus:border-primary outline-none transition-colors duration-300 font-light"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full btn-premium uppercase tracking-[0.2em] text-xs py-4"
                        >
                            Authenticate
                        </button>
                    </form>
                    <div className="mt-10 text-center">
                        <a href="/" className="text-slate-400 hover:text-primary text-xs uppercase tracking-widest transition">Back to Main Site</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

function ContactSection() {
    const form = useRef();
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // IMPORTANT: You must replace these placeholders with your actual EmailJS keys!
        // Get these by creating an account at https://www.emailjs.com/
        emailjs
            .sendForm(
                'service_iubaehg', 
                'template_su3ng9b', 
                form.current, 
                'nR4rKT-_ge9omTHdb'
            )
            .then(
                () => {
                    setStatus('success');
                    e.target.reset();
                    setTimeout(() => setStatus('idle'), 5000);
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                }
            );
    };

    return (
        <section id="contact" className="relative py-24 px-4 bg-[#050510] flex flex-col items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                 <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/10 blur-[150px] rounded-full"></div>
                 <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full"></div>
            </div>

            <div className="flex flex-col items-center justify-center relative z-10 w-full max-w-3xl">
                {/* Heading */}
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold text-5xl md:text-6xl mb-6 tracking-tight drop-shadow-[0_0_15px_rgba(34,211,238,0.3)] text-center">
                    Get In Touch
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.5)] mb-8"></div>
                
                <p className="text-gray-400 text-center mb-12 max-w-lg">
                    Have a question or want to work together? Leave your details and a message below, and I'll get back to you as soon as possible.
                </p>

                {/* Form Card */}
                <div className="w-full rounded-3xl p-8 bg-[#0B0C10]/80 backdrop-blur-xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,0,0,0.4)] ring-1 ring-white/5 relative">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">
                        
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="user_name" className="text-sm font-medium text-gray-300 ml-1">Name</label>
                                <input 
                                    type="text" 
                                    name="user_name" 
                                    id="user_name"
                                    required 
                                    placeholder="John Doe"
                                    className="px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600"
                                />
                            </div>
                            <div className="flex-1 flex flex-col gap-2">
                                <label htmlFor="user_email" className="text-sm font-medium text-gray-300 ml-1">Email</label>
                                <input 
                                    type="email" 
                                    name="user_email" 
                                    id="user_email"
                                    required 
                                    placeholder="john@example.com"
                                    className="px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all placeholder:text-gray-600"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-300 ml-1">Message</label>
                            <textarea 
                                name="message" 
                                id="message"
                                required 
                                rows="5"
                                placeholder="Your message here..."
                                className="px-5 py-3 rounded-xl bg-gray-900/50 border border-gray-700 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none placeholder:text-gray-600"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={status === 'sending'}
                            className="mt-2 flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {status === 'idle' && <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                            {status === 'sending' && <span className="animate-pulse">Sending...</span>}
                            {status === 'success' && <>Message Sent! <CheckCircle size={20} className="text-green-300" /></>}
                            {status === 'error' && <>Error Sending <AlertCircle size={20} className="text-red-300" /></>}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;

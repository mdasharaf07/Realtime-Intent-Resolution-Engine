import React, { Suspense, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SplineScene from '../components/SplineScene';
import BrandCarousel from '../components/BrandCarousel';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from "react-icons/fa";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: 'ease-out-quart'
        });
    }, []);

    return (
        <div style={{ position: 'relative', width: '100vw', minHeight: '100vh', overflowX: 'hidden', background: '#050505' }}>
            <Navbar isLanding={true} />

            {/* HER SECTION */}
            <div style={{ height: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                {/* 3D Background */}
                <SplineScene />

                {/* Overlay Content */}
                <div style={{ position: 'absolute', zIndex: 10, textAlign: 'center', pointerEvents: 'none' }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        style={{
                            fontSize: '5rem',
                            color: 'white',
                            textShadow: '0 0 20px rgba(0,255,255,0.5)',
                            marginBottom: '20px'
                        }}
                    >
                        JARVIS <span style={{ color: 'var(--neon-blue)' }}>AI</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        style={{ fontSize: '1.5rem', color: '#ccc', marginBottom: '40px' }}
                    >
                        The Future of Voice Assistance is Here.
                    </motion.p>

                    {/* CTA Button */}
                    <div style={{ pointerEvents: 'auto' }}>
                        <motion.button
                            whileHover={{ scale: 1.1, boxShadow: "0 0 30px var(--neon-pink)" }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/jarvis')}
                            style={{
                                padding: '15px 50px',
                                fontSize: '1.5rem',
                                background: 'transparent',
                                border: '2px solid var(--neon-pink)',
                                color: 'var(--neon-pink)',
                                borderRadius: '50px',
                                cursor: 'pointer',
                                fontFamily: 'Orbitron',
                                letterSpacing: '2px',
                                backdropFilter: 'blur(5px)'
                            }}
                        >
                            INITIALIZE SYSTEM
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* BRANDS SECTION */}
            <BrandCarousel />

            {/* ABOUT SECTION */}
            <div id="about" style={{ padding: '100px 20px', textAlign: 'center', background: 'linear-gradient(#050505, #001f1f)' }} data-aos="fade-up">
                <h2 style={{ fontSize: '3rem', marginBottom: '50px', color: 'var(--neon-blue)' }}>SYSTEM ARCHITECTURE</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', flexWrap: 'wrap' }}>

                    {/* Feature Cards */}
                    {['Voice Recognition', 'Gemini AI Brain', 'Groq LPU Speed'].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            style={{
                                width: '300px',
                                padding: '40px',
                                background: 'rgba(255,255,255,0.05)',
                                borderRadius: '20px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                textAlign: 'left'
                            }}
                        >
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: 'var(--neon-pink)' }}>0{i + 1}. {feature}</h3>
                            <p style={{ color: '#aaa', lineHeight: '1.6' }}>
                                Powered by advanced neural networks to provide instant, latency-free responses.
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>

            {/* HOW IT WORKS SECTION */}
            <div style={{ padding: '80px 20px', textAlign: 'center', background: '#0a0a0a' }} data-aos="fade-up">
                <h2 style={{ fontSize: '3rem', marginBottom: '60px', color: 'white', fontFamily: 'Orbitron' }}>
                    OPERATIONAL <span style={{ color: 'var(--neon-pink)' }}>PROTOCOL</span>
                </h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    {[
                        { step: "01", title: "INITIALIZE", desc: "Click the 'Initialize System' button to access the core interface." },
                        { step: "02", title: "ACTIVATE", desc: "Click the Arc Reactor or Mic icon to activate voice reception." },
                        { step: "03", title: "COMMAND", desc: "Speak natural language commands like 'Open YouTube' or 'Who is Iron Man?'." },
                        { step: "04", title: "EXECUTE", desc: "Jarvis processes the request and executes actions or speaks the response." }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                            style={{ width: '250px', position: 'relative' }}
                        >
                            <div style={{
                                fontSize: '4rem',
                                color: 'rgba(255,255,255,0.05)',
                                fontFamily: 'Orbitron',
                                position: 'absolute',
                                top: '-20px',
                                left: '20px',
                                zIndex: 0
                            }}>
                                {item.step}
                            </div>
                            <div style={{
                                position: 'relative',
                                zIndex: 1,
                                border: '1px solid var(--neon-blue)',
                                padding: '30px',
                                borderRadius: '15px',
                                background: 'rgba(0,0,0,0.5)',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <h3 style={{ color: 'var(--neon-blue)', marginBottom: '10px' }}>{item.title}</h3>
                                <p style={{ color: '#aaa', fontSize: '0.9rem' }}>{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CAPABILITIES GRID */}
            <div style={{ padding: '100px 50px', background: 'linear-gradient(#0a0a0a, #001f1f)' }} data-aos="fade-up">
                <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '80px', color: 'white' }}>
                    SYSTEM <span style={{ color: 'var(--neon-blue)' }}>CAPABILITIES</span>
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {[
                        "OPEN WEBSITES", "GOOGLE SEARCH", "PLAY MUSIC", "WIKIPEDIA INFO",
                        "TIME & DATE", "WEATHER REPORTS", "CALCULATIONS", "JOKES & TRIVIA"
                    ].map((cmd, i) => (
                        <div key={i} data-aos="flip-left" data-aos-delay={i * 50} style={{
                            padding: '20px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            textAlign: 'center',
                            color: 'var(--neon-pink)',
                            fontFamily: 'Orbitron',
                            borderRadius: '10px',
                            background: 'rgba(255,255,255,0.02)',
                            cursor: 'default',
                            transition: '0.3s'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'var(--neon-pink)';
                                e.currentTarget.style.color = 'black';
                                e.currentTarget.style.boxShadow = '0 0 20px var(--neon-pink)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.color = 'var(--neon-pink)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            {cmd}
                        </div>
                    ))}
                </div>
            </div>

            {/* SYSTEM STATS */}
            <div style={{ padding: '60px 20px', background: '#000', borderTop: '1px solid #222', borderBottom: '1px solid #222' }} data-aos="zoom-in">
                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto', gap: '40px' }}>
                    {[
                        { label: "SYSTEM UPTIME", value: "99.9%" },
                        { label: "LATENCY", value: "< 50ms" },
                        { label: "PRIVACY", value: "100% LOCAL" },
                        { label: "KNOWLEDGE BASE", value: "UNLIMITED" }
                    ].map((stat, index) => (
                        <div key={index} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'Orbitron', fontWeight: 'bold' }}>
                                {stat.value}
                            </div>
                            <div style={{ color: 'var(--neon-blue)', letterSpacing: '2px', fontSize: '0.9rem', marginTop: '5px' }}>
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* SECURITY PROTOCOL */}
            <div style={{ padding: '100px 20px', textAlign: 'center', background: 'radial-gradient(circle at center, #111, #000)' }} data-aos="fade-up">
                <div style={{ fontSize: '4rem', color: 'var(--neon-pink)', marginBottom: '20px' }}>🛡️</div>
                <h2 style={{ fontSize: '2.5rem', color: 'white', fontFamily: 'Orbitron', marginBottom: '20px' }}>
                    SECURE <span style={{ color: 'var(--neon-pink)' }}>PROTOCOL</span>
                </h2>
                <p style={{ color: '#aaa', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8', fontSize: '1.1rem' }}>
                    JARVIS operates on a <strong>Client-Side Encryption Model</strong>. Your API keys are stored securely in your local browser storage and are never transmitted to external servers other than the official Google Gemini API. Your data remains yours.
                </p>
            </div>

            {/* EXPANDED FOOTER */}
            <footer style={{ background: '#020202', borderTop: '1px solid #333', padding: '80px 50px', color: '#888' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>

                    {/* Column 1: Product */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Orbitron' }}>JARVIS SYSTEMS</h4>
                        <p style={{ fontSize: '0.9rem', lineHeight: '1.6' }}>
                            Advanced AI voice assistant designed for productivity and automation. Built with React, Gemini, and Groq.
                        </p>
                    </div>

                    {/* Column 2: Links */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Orbitron' }}>QUICK LINKS</h4>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Operational Guide</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>System Capabilities</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Privacy Policy</a></li>
                            <li><a href="#" style={{ color: '#888', textDecoration: 'none' }}>Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Stats */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Orbitron' }}>NETWORK STATUS</h4>
                        <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                            <li style={{ color: '#0f0' }}>● Servers Online</li>
                            <li style={{ color: '#0f0' }}>● API Latency: Low</li>
                            <li style={{ color: '#0f0' }}>● Encryption: Active</li>
                        </ul>
                    </div>

                    {/* Column 4: Socials */}
                    <div>
                        <h4 style={{ color: 'white', marginBottom: '20px', fontFamily: 'Orbitron' }}>CONNECT</h4>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '1.5rem' }}>
                            <FaGithub style={{ cursor: 'pointer', transition: '0.3s', color: 'white' }} />
                            <FaTwitter style={{ cursor: 'pointer', transition: '0.3s', color: 'white' }} />
                            <FaLinkedin style={{ cursor: 'pointer', transition: '0.3s', color: 'white' }} />
                            <FaDiscord style={{ cursor: 'pointer', transition: '0.3s', color: 'white' }} />
                        </div>
                    </div>

                </div>

                <div style={{ textAlign: 'center', marginTop: '60px', borderTop: '1px solid #222', paddingTop: '20px', fontSize: '0.8rem' }}>
                    &copy; 2024 JARVIS SYSTEMS. DEVELOPED FOR THE FUTURE.
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HUDDecorations = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div style={{ pointerEvents: 'none', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 5, overflow: 'hidden' }}>

            {/* TOP LEFT BRACKET */}
            <svg style={{ position: 'absolute', top: '50px', left: '20px', width: '200px', height: '100px' }}>
                <path d="M 10 100 L 10 10 L 190 10" fill="none" stroke="var(--neon-blue)" strokeWidth="2" />
                <rect x="0" y="0" width="10" height="10" fill="var(--neon-blue)" />
                <rect x="190" y="0" width="10" height="10" fill="var(--neon-blue)" />
            </svg>

            {/* TOP RIGHT BRACKET */}
            <svg style={{ position: 'absolute', top: '50px', right: '20px', width: '200px', height: '100px' }}>
                <path d="M 190 100 L 190 10 L 10 10" fill="none" stroke="var(--neon-blue)" strokeWidth="2" />
                <rect x="190" y="0" width="10" height="10" fill="var(--neon-blue)" />
                <rect x="0" y="0" width="10" height="10" fill="var(--neon-blue)" />
            </svg>

            {/* BOTTOM LEFT BRACKET */}
            <svg style={{ position: 'absolute', bottom: '50px', left: '20px', width: '200px', height: '100px' }}>
                <path d="M 10 0 L 10 90 L 190 90" fill="none" stroke="var(--neon-blue)" strokeWidth="2" />
                <rect x="0" y="90" width="10" height="10" fill="var(--neon-blue)" />
            </svg>

            {/* BOTTOM RIGHT BRACKET */}
            <svg style={{ position: 'absolute', bottom: '50px', right: '20px', width: '200px', height: '100px' }}>
                <path d="M 190 0 L 190 90 L 10 90" fill="none" stroke="var(--neon-blue)" strokeWidth="2" />
                <rect x="190" y="90" width="10" height="10" fill="var(--neon-blue)" />
            </svg>

            {/* VERTICAL RULER - LEFT */}
            <div style={{ position: 'absolute', left: '40px', top: '20%', height: '60%', width: '2px', background: 'rgba(0, 255, 255, 0.2)' }}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={{ position: 'absolute', top: `${i * 5}%`, left: 0, width: i % 5 === 0 ? '15px' : '5px', height: '1px', background: 'var(--neon-blue)' }} />
                ))}
            </div>

            {/* VERTICAL RULER - RIGHT */}
            <div style={{ position: 'absolute', right: '40px', top: '20%', height: '60%', width: '2px', background: 'rgba(0, 255, 255, 0.2)' }}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} style={{ position: 'absolute', top: `${i * 5}%`, right: 0, width: i % 5 === 0 ? '15px' : '5px', height: '1px', background: 'var(--neon-blue)' }} />
                ))}
            </div>

            {/* TOP CENTER TIME */}
            <div style={{
                position: 'absolute',
                top: '20px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'rgba(0, 20, 40, 0.8)',
                border: '1px solid var(--neon-blue)',
                padding: '5px 20px',
                borderRadius: '5px',
                color: 'var(--neon-blue)',
                fontFamily: 'Orbitron',
                letterSpacing: '2px',
                boxShadow: '0 0 10px var(--neon-blue)'
            }}>
                {time} | SYSTEM ONLINE
            </div>

            {/* RANDOM ROLLING NUMBERS (Bottom Left Corner) */}
            <div style={{ position: 'absolute', bottom: '100px', left: '80px', fontFamily: 'Roboto Mono', fontSize: '0.7rem', color: 'rgba(0, 255, 255, 0.6)' }}>
                <motion.div animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 0.5, repeat: Infinity }}>
                    PWR_LEVEL: 98%
                    <br />
                    THERMAL: 34°C
                    <br />
                    LATENCY: 12ms
                </motion.div>
            </div>

            {/* MODE INDICATOR (Bottom Right Corner) */}
            <div style={{ position: 'absolute', bottom: '100px', right: '80px', fontFamily: 'Orbitron', fontSize: '0.8rem', color: 'rgba(255, 0, 221, 0.8)', textAlign: 'right' }}>
                MODE: VOICE_ACTIVATED
                <br />
                SECURITY: ENCRYPTED
            </div>

        </div>
    );
};

export default HUDDecorations;

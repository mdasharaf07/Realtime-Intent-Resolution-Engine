import React from 'react';
import ReactMarkdown from 'react-markdown';

const ContentBox = ({ data, title }) => {
    // Empty State (Terminal Boot Animation)
    if (!data) {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                fontFamily: 'Roboto Mono',
                color: 'rgba(0, 255, 255, 0.5)',
                fontSize: '0.9rem',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end'
            }}>
                <div style={{ borderLeft: '2px solid var(--neon-blue)', paddingLeft: '20px', opacity: 0.8, fontFamily: 'monospace' }}>
                    <p style={{ animation: 'fadeIn 0.5s forwards' }}>{">"} SYSTEM_INIT: SEQUENCE_START</p>
                    <p style={{ animation: 'fadeIn 0.5s forwards', animationDelay: '0.2s', opacity: 0 }}>{">"} CHECKING_NEURAL_LINK [GROQ-LPU]... <span style={{ color: '#0f0' }}>CONNECTED</span></p>
                    <p style={{ animation: 'fadeIn 0.5s forwards', animationDelay: '0.4s', opacity: 0 }}>{">"} SECURITY_PROTOCOL: LEVEL_5... <span style={{ color: '#0f0' }}>ACTIVE</span></p>
                    <p style={{ animation: 'fadeIn 0.5s forwards', animationDelay: '0.6s', opacity: 0 }}>{">"} MEMORY_STATUS: 128TB ALLOCATED... <span style={{ color: '#0f0' }}>OK</span></p>
                    <p style={{ animation: 'fadeIn 0.5s forwards', animationDelay: '0.8s', opacity: 0 }}>{">"} AUDIO_SENSORS: CALIBRATING... <span style={{ color: '#0f0' }}>OPTIMIZED</span></p>
                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', color: 'var(--neon-pink)' }}>
                        <span>{">"} AWAITING_COMMAND</span>
                        <span style={{ display: 'inline-block', width: '10px', height: '20px', background: 'var(--neon-pink)', marginLeft: '10px', animation: 'blink 1s infinite' }}></span>
                    </div>
                </div>
                <style>
                    {`
                        @keyframes fadeIn { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
                        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
                    `}
                </style>
            </div>
        );
    }

    return (
        <div style={{
            width: '100%',
            height: '100%',
            background: 'rgba(10, 20, 30, 0.7)', // Darker background
            backdropFilter: 'blur(15px)',
            borderRadius: '15px',
            border: '1px solid rgba(0, 255, 255, 0.3)', // Subtle cyan border
            padding: '25px',
            color: '#e0f7fa', // Slightly cyan text
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(0, 0, 0, 0.5)', // Inner and Outer glow
            overflowY: 'auto'
        }}>
            {title && (
                <h3 style={{
                    borderBottom: '1px solid var(--neon-pink)',
                    paddingBottom: '10px',
                    marginBottom: '15px',
                    color: 'var(--neon-pink)',
                    fontFamily: 'Orbitron'
                }}>
                    {title}
                </h3>
            )}

            <div style={{ lineHeight: '1.6', fontSize: '0.95rem' }}>
                <ReactMarkdown>{data}</ReactMarkdown>
            </div>
        </div>
    );
};

export default ContentBox;

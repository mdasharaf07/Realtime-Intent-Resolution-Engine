import React from 'react';
import './Hero.css';
import ReactorCore from './ReactorCore';
import SettingsModal from './SettingsModal';
import { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";

const Hero = ({ isListening, isSpeaking, transcript, startListening, isLoading, error }) => {
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);

    return (
        <div className="hero-container">
            {/* Settings Button */}
            <button
                onClick={() => setIsSettingsOpen(true)}
                style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    background: 'transparent',
                    border: '1px solid var(--neon-blue)',
                    color: 'var(--neon-blue)',
                    padding: '10px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    zIndex: 100
                }}
            >
                <IoSettingsOutline size={24} />
            </button>

            <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />

            <h1 id="title">
                I'm <span id="name">JARVIS</span>
            </h1>

            <div onClick={startListening} style={{ cursor: 'pointer', margin: '40px 0' }}>
                <ReactorCore isListening={isListening} isSpeaking={isSpeaking} />
            </div>

            {/* Status & Transcript */}
            <div style={{ minHeight: '60px', textAlign: 'center' }}>
                {isLoading ? (
                    <p style={{ color: 'var(--neon-blue)', letterSpacing: '2px' }}>PROCESSING...</p>
                ) : isListening ? (
                    <p style={{ color: 'var(--neon-pink)', letterSpacing: '2px' }}>LISTENING...</p>
                ) : (
                    <p style={{ color: '#aaa' }}>TAP REACTOR TO START</p>
                )}

                {transcript && (
                    <p style={{ marginTop: '10px', color: '#fff', fontSize: '1.2rem' }}>
                        "{transcript}"
                    </p>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div style={{
                    color: '#ff4444',
                    border: '1px solid #ff4444',
                    backgroundColor: 'rgba(255, 68, 68, 0.1)',
                    padding: '10px 20px',
                    borderRadius: '5px',
                    marginTop: '20px'
                }}>
                    ⚠️ {error}
                </div>
            )}
        </div>
    );
};

export default Hero;

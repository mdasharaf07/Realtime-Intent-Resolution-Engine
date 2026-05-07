import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ParticleBackground from '../components/ParticleBackground';
import ContentBox from '../components/ContentBox';
import useAssistant from '../hooks/useAssistant';
import HUDDecorations from '../components/HUDDecorations';

const Home = () => {
    const {
        isListening,
        transcript,
        startListening,
        aiResponse,
        boxTitle,
        isSpeaking,
        isLoading,
        error
    } = useAssistant();

    return (
        <div className="home-container">
            <ParticleBackground />
            <HUDDecorations />
            {/* Navbar is strictly functional/hidden here or minimal, relying on HUDDecorations for visuals */}
            <div style={{ position: 'absolute', top: 0, zIndex: 10, width: '100%' }}>
                <Navbar isLanding={false} />
            </div>

            {/* MAIN GRID */}
            <div className="home-grid">
                {/* Left Panel: Command Center */}
                <div className="home-panel">
                    <div style={{ position: 'absolute', top: 0, left: 0, padding: '10px', color: 'rgba(0,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'Orbitron' }}>// CMD_NODE_01</div>
                    <Hero
                        isListening={isListening}
                        isSpeaking={isSpeaking}
                        transcript={transcript}
                        startListening={startListening}
                        isLoading={isLoading}
                        error={error}
                    />
                </div>

                {/* Right Panel: Information Deck */}
                <div id="info-deck" className="home-panel">
                    <div style={{ position: 'absolute', top: 0, right: 0, padding: '10px', color: 'rgba(0,255,255,0.5)', fontSize: '0.8rem', fontFamily: 'Orbitron' }}>// DATA_STREAM_ACTIVE</div>
                    <ContentBox
                        data={aiResponse}
                        title={boxTitle}
                    />
                </div>
            </div>

            {/* STATUS FOOTER */}
            <div style={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '40px',
                background: '#020202',
                borderTop: '1px solid rgba(0, 255, 255, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 40px',
                fontSize: '0.8rem',
                color: 'rgba(0, 255, 255, 0.5)',
                fontFamily: 'Roboto Mono',
                zIndex: 20
            }}>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>SYSTEM STATUS: <span style={{ color: '#0f0' }}>ONLINE</span></span>
                    <span>VER: 2.4.0 [BETA]</span>
                </div>

                <div style={{ display: 'flex', gap: '30px' }}>
                    <span>CPU: 12%</span>
                    <span>MEM: 4.2GB</span>
                    <span>NET: 1Gbps</span>
                    <span style={{ color: 'var(--neon-pink)' }}>ENCRYPTION: AES-256</span>
                </div>

                <div style={{ display: 'flex', gap: '20px' }}>
                    <span>LOCATION: LOCALHOST</span>
                    <span>PORT: 5173</span>
                </div>
            </div>
        </div>
    );
};

export default Home;

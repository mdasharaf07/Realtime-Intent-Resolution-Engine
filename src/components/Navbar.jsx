import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";

const Navbar = ({ isLanding }) => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '20px 50px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 100,
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ fontSize: '1.5rem', fontFamily: 'Orbitron', color: 'white', letterSpacing: '2px' }}>
                JARVIS <span style={{ color: 'var(--neon-blue)' }}>SYSTEMS</span>
            </div>

            <ul style={{ display: 'flex', gap: '30px', listStyle: 'none' }}>
                {isLanding ? (
                    <>
                        <li><a href="#about" style={{ color: 'white', textDecoration: 'none' }}>ABOUT</a></li>
                        <li><a href="https://github.com" target="_blank" style={{ color: 'white', fontSize: '1.5rem' }}><FaGithub /></a></li>
                    </>
                ) : (
                    <li><Link to="/" style={{ color: 'var(--neon-pink)', textDecoration: 'none', fontFamily: 'Orbitron' }}>EXIT SYSTEM</Link></li>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;

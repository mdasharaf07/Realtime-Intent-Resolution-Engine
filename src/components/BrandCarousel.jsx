import React from 'react';
import Marquee from "react-fast-marquee";
import { FaReact, FaGoogle, FaRobot, FaAws, FaNodeJs } from "react-icons/fa";
import { SiVite, SiOpenai } from "react-icons/si";

const BrandCarousel = () => {
    const brands = [
        { icon: <FaReact />, name: "React" },
        { icon: <FaGoogle />, name: "Gemini" },
        { icon: <FaRobot />, name: "Groq" },
        { icon: <SiVite />, name: "Vite" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <FaNodeJs />, name: "Node" },
        { icon: <SiOpenai />, name: "AI" }
    ];

    return (
        <div style={{
            width: '100%',
            padding: '40px 0',
            background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.05), transparent)',
            borderTop: '1px solid rgba(0, 255, 255, 0.1)',
            borderBottom: '1px solid rgba(0, 255, 255, 0.1)'
        }}>
            <h3 style={{
                textAlign: 'center',
                color: 'rgba(255,255,255,0.5)',
                marginBottom: '20px',
                fontFamily: 'Orbitron',
                letterSpacing: '2px',
                fontSize: '0.9rem'
            }}>POWERED BY NEXT-GEN TECH</h3>

            <Marquee gradient={false} speed={50}>
                {brands.map((brand, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        margin: '0 50px',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '2rem'
                    }}>
                        {brand.icon}
                        <span style={{ fontSize: '1.2rem', fontFamily: 'Roboto Mono' }}>{brand.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default BrandCarousel;

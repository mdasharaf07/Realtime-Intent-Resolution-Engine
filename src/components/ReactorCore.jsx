import React from 'react';
import { motion } from 'framer-motion';

const ReactorCore = ({ isListening, isSpeaking }) => {
    // Animation Variants
    const outerRing = {
        animate: {
            rotate: 360,
            transition: {
                duration: 10,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const innerRing = {
        animate: {
            rotate: -360,
            transition: {
                duration: 5,
                repeat: Infinity,
                ease: "linear"
            }
        }
    };

    const pulse = {
        animate: {
            scale: isListening ? [1, 1.2, 1] : [1, 1.05, 1],
            boxShadow: isListening
                ? ["0 0 20px #0ff", "0 0 50px #0ff", "0 0 20px #0ff"]
                : ["0 0 10px #0ff", "0 0 20px #0ff", "0 0 10px #0ff"],
            transition: {
                duration: isListening ? 0.5 : 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    const coreColor = isSpeaking ? "#ff00dd" : "#00ffff"; // Pink if speaking, Cyan if idle/listening
    const shadowColor = isSpeaking ? "rgba(255, 0, 221, 0.5)" : "rgba(0, 255, 255, 0.5)";

    return (
        <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Outer Ring - High Speed */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: `2px dashed ${coreColor}`,
                    borderTop: '2px solid transparent',
                    borderBottom: '2px solid transparent',
                    boxShadow: `0 0 ${isListening ? '30px' : '15px'} ${shadowColor}`
                }}
                variants={outerRing}
                animate="animate"
            />

            {/* Inner Ring - Counter Rotate */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '75%',
                    height: '75%',
                    borderRadius: '50%',
                    border: `4px dotted ${coreColor}`,
                    borderLeft: '4px solid transparent',
                    opacity: 0.8
                }}
                variants={innerRing}
                animate="animate"
            />

            {/* Core - Pulsing Orb */}
            <motion.div
                style={{
                    width: '45%',
                    height: '45%',
                    borderRadius: '50%',
                    backgroundColor: isSpeaking ? 'rgba(255, 0, 221, 0.2)' : 'rgba(0, 255, 255, 0.2)', // Semi-transparent core
                    border: `1px solid ${coreColor}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backdropFilter: 'blur(5px)'
                }}
                variants={pulse}
                animate="animate"
            >
                {/* Center Solid Dot */}
                <div style={{
                    width: '60%',
                    height: '60%',
                    borderRadius: '50%',
                    backgroundColor: coreColor,
                    boxShadow: `0 0 40px ${coreColor}, inset 0 0 20px white` // Glowy effect
                }} />
            </motion.div>

        </div>
    );
};

export default ReactorCore;

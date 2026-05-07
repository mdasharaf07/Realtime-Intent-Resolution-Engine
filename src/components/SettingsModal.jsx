import React, { useState, useEffect } from 'react';

const SettingsModal = ({ isOpen, onClose }) => {
    const [key, setKey] = useState('');

    useEffect(() => {
        const savedKey = localStorage.getItem('gemini_api_key');
        if (savedKey) setKey(savedKey);
    }, []);

    const handleSave = () => {
        localStorage.setItem('gemini_api_key', key);
        alert('API Key Saved!');
        onClose();
        // Ideally trigger a reload or context update, but reload is safest for now to reset hooks
        window.location.reload();
    };

    if (!isOpen) return null;

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
                <h2 style={{ color: 'white', marginBottom: '20px' }}>Settings</h2>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ color: '#ccc', display: 'block', marginBottom: '10px' }}>AI API Key (Gemini or Groq)</label>
                    <input
                        type="password"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                        placeholder="AIzaSyDmTu5aSATa4WJOpWOXkg6JiGIXG-rrCvk"
                        style={modalStyles.input}
                    />
                    <p style={{ color: '#666', fontSize: '12px', marginTop: '5px' }}>
                        Your key is stored locally in your browser.
                    </p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                    <button onClick={onClose} style={modalStyles.cancelBtn}>Cancel</button>
                    <button onClick={handleSave} style={modalStyles.saveBtn}>Save</button>
                </div>
            </div>
        </div>
    );
};

const modalStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(5px)'
    },
    content: {
        backgroundColor: '#1a1a1a',
        padding: '30px',
        borderRadius: '15px',
        width: '90%',
        maxWidth: '400px',
        border: '1px solid #333',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
    },
    input: {
        width: '100%',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #444',
        backgroundColor: '#2a2a2a',
        color: 'white',
        outline: 'none'
    },
    saveBtn: {
        padding: '8px 20px',
        borderRadius: '8px',
        border: 'none',
        background: 'linear-gradient(to right, rgb(21, 145, 207), rgb(201, 41, 116))',
        color: 'white',
        cursor: 'pointer',
        fontWeight: 'bold'
    },
    cancelBtn: {
        padding: '8px 20px',
        borderRadius: '8px',
        border: '1px solid #444',
        background: 'transparent',
        color: '#ccc',
        cursor: 'pointer'
    }
}

export default SettingsModal;

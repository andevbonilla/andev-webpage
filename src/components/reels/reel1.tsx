import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Componente que carga el script de Instagram
const InstagramScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = '//www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

// Componente principal del Reel
const Reel1: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null; // or a loading placeholder
    }

    return (
        <>
            <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/reel/C_0plUJR6rd/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
                style={{
                    background: '#FFF',
                    border: 0,
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: 0,
                    width: 'calc(100% - 2px)',
                }}
            >
                {/* El contenido del blockquote permanece igual */}
            </blockquote>
            <InstagramScript />
        </>
    );
};

// Exportamos el componente sin usar dynamic
export default Reel1;
import React, { useState } from 'react';

const Image = () => {
    const [isHidden, setIsHidden] = useState(false);
    const [zoom, setZoom] = useState(1);

    return (
        <>
            <div
                style={{
                    width: '600px',
                    height: '340px',
                    overflow: 'hidden',
                    marginBottom: '2rem',
                }}>
                {!isHidden && (
                    <a
                        href="https://city-adm.lviv.ua"
                        target="_blank"
                        rel="noreferrer"
                        id="cityLink">
                        <img
                            style={{
                                width: '100%',
                                transform: `scale(${zoom})`,
                                objectFit: 'contain',
                            }}
                            src="https://vgorode.ua/img/article/5285/63_main-v1583944627.jpg"
                            alt="lviv_photo"
                        />
                    </a>
                )}
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '5rem' }}>
                <button
                    onClick={() => {
                        setIsHidden(false);
                    }}>
                    Create
                </button>
                <button
                    onClick={() => {
                        setIsHidden(true);
                    }}>
                    Remove
                </button>
                <button
                    onClick={() => {
                        setZoom((prev) => prev + 0.2);
                    }}>
                    Zoom in
                </button>
                <button
                    onClick={() => {
                        if (zoom === 1) return;
                        setZoom((prev) => prev - 0.2);
                    }}>
                    Zoom out
                </button>
            </div>
        </>
    );
};

export default Image;

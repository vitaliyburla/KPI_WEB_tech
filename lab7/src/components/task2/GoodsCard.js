import React from 'react';

const GoodsCard = ({ image, name, price }) => {
    return (
        <div
            style={{
                width: 'calc((100% - 12px) / 3)',
                backgroundColor: 'lightblue',
                border: '1px solid black',
                boxSizing: 'border-box',
                borderRadius: '6px',
                overflow: 'hidden',
            }}>
            <img
                style={{ width: '100%', height: '150px', objectFit: 'cover' }}
                src={image}
                alt={name}
            />
            <div
                style={{
                    padding: '0.7rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.3rem',
                }}>
                <h4 style={{ margin: 0 }}>{name}</h4>
                <p style={{ margin: 0 }}>
                    Price: <span style={{ fontWeight: 700 }}>{price}$</span>
                </p>
            </div>
        </div>
    );
};

export default GoodsCard;

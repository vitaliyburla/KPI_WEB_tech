import React, { useState } from 'react';

function generateRandomColor() {
    return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
}

const Switchable = ({ children }) => {
    const [style, setStyle] = useState({
        color: 'black',
        backgroundColor: 'transparent',
    });

    return (
        <div
            style={{ ...style }}
            onClick={() => {
                setStyle({
                    color: generateRandomColor(),
                    backgroundColor: generateRandomColor(),
                });
            }}>
            {children}
        </div>
    );
};

export default Switchable;

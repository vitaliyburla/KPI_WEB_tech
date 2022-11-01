import React, { useState } from 'react';
import Content from './components/task1/Content';
import Header from './components/task1/Header';
import Image from './components/task1/Image';
import GoodsGallery from './components/task2/GoodsGallery';

const showTab = (tab) => {
    switch (tab) {
        case 'task1':
            return (
                <>
                    <Header />
                    <Content />
                    <Image />
                </>
            );
        case 'task2':
            return <GoodsGallery />;
        default:
            return null;
    }
};

const App = () => {
    const [tab, setTab] = useState('task1');

    return (
        <>
            <div
                style={{
                    marginBottom: '2rem',
                    display: 'flex',
                    gap: '0.5rem',
                }}>
                <button
                    onClick={() => {
                        setTab('task1');
                    }}>
                    Task 1
                </button>
                <button
                    onClick={() => {
                        setTab('task2');
                    }}>
                    Task 2
                </button>
            </div>
            {showTab(tab)}
        </>
    );
};

export default App;

import React, { useState } from 'react';
import GoodsCard from './GoodsCard';

const GoodsGallery = () => {
    const [goods] = useState([
        {
            image: 'https://i.pinimg.com/736x/55/63/e2/5563e250e8223653a045ab1bdaed3d86.jpg',
            name: 'Cucumber',
            price: 24,
        },
        {
            image: 'https://t4.ftcdn.net/jpg/02/32/98/31/360_F_232983161_9lmUyHKnWbLW0vQPvWCrp5R5DSpexhbx.jpg',
            name: 'Tomato',
            price: 54,
        },
        {
            image: 'https://static7.depositphotos.com/1002351/792/i/450/depositphotos_7926477-stock-photo-new-potato.jpg',
            name: 'Potato',
            price: 12,
        },
        {
            image: 'https://media.istockphoto.com/photos/mandarine-orange-fruits-or-tangerines-isolated-on-white-background-picture-id1357864202?b=1&k=20&m=1357864202&s=170667a&w=0&h=TwUZnX4BCfwn3rtx5cIBykAh2JJwEFuNSNflKqluiac=',
            name: 'Orange',
            price: 65,
        },
        {
            image: 'https://www.producemarketguide.com/sites/default/files/Commodities.tar/Commodities/carrots_commodity-page.png',
            name: 'Carrot',
            price: 20,
        },
        {
            image: 'https://images.heb.com/is/image/HEBGrocery/000583329?fit=constrain,1&wid=800&hei=800&fmt=jpg&qlt=85,0&resMode=sharp2&op_usm=1.75,0.3,2,0',
            name: 'Watermelon',
            price: 144,
        },
        {
            image: 'https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=85,metadata=none,w=480,h=480/app/images/products/sliding_image/443549a.jpg',
            name: 'Lettuce',
            price: 38,
        },
    ]);
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                width: '500px',
                gap: '6px',
            }}>
            {goods.map((g, i) => (
                <GoodsCard
                    key={i}
                    name={g.name}
                    image={g.image}
                    price={g.price}
                />
            ))}
        </div>
    );
};

export default GoodsGallery;

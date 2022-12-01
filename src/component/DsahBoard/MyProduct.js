import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <h2 className='my-8 text-4xl text-rose-400 font-bold text-center'>My All Products</h2>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 gap-10 grid-cols-1'>
                {
                    products.map(item => <MyProductCard 
                        key={item._id}
                        item={item}
                    ></MyProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProduct;
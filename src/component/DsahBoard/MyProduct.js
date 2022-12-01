import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MyProduct = () => {
    const category = useLoaderData();
    console.log(category);
    const {product} = category[0];
    console.log(product);
    return (
        <div>
            fg
        </div>
    );
};

export default MyProduct;
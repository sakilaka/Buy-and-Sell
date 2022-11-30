import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import ModalForm from './ModalForm';

const Product = () => {
    const product = useLoaderData();
    console.log(product);
    const { product1, product2 } = product[0];
    const [buyItem, setBuyItem] = useState(null);

    const {user} = useContext(AuthUserContext);

    return (
        <div>
            <div className='grid gap-20 lg:grid-cols-2 my-20 md:grid-cols-2 grid-cols-1 container mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product1.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold my-2">{product1.name}</h2>
                        <h2 className="text-xl font-semibold">SellerName : {product1.sellerName}</h2>
                        <h2 className="text-lg font-semibold">Date : {product1.date}</h2>
                        <h2 className="text-lg font-semibold">ResalePrice : ${product1.resalePrice}</h2>
                        <h2 className="text-lg font-semibold">OrginalPrice : ${product1.orginalPrice}</h2>
                        <h2 className="text-lg font-semibold">Used : {product1.used}</h2>
                        <h2 className="text-lg font-semibold">Location : {product1.location}</h2>
                        <p className='text-lg font-semibold'>Verified: {product1.verifiedSeller}</p>
                        <div className="card-actions">
                            <label onClick={() => setBuyItem(product1)} htmlFor="buy-modal" className="btn btn-primary">Buy Now</label>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={product2.picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold my-2">{product2.name}</h2>
                        <h2 className="text-xl font-semibold">SellerName : {product2.sellerName}</h2>
                        <h2 className="text-lg font-semibold">Date : {product2.date}</h2>
                        <h2 className="text-lg font-semibold">ResalePrice : ${product2.resalePrice}</h2>
                        <h2 className="text-lg font-semibold">OrginalPrice : ${product2.orginalPrice}</h2>
                        <h2 className="text-lg font-semibold">Used : {product2.used}</h2>
                        <h2 className="text-lg font-semibold">Location : {product2.location}</h2>
                        <p className='text-lg font-semibold'>Verified: {product2.verifiedSeller}</p>
                        <div className="card-actions">
                            <label onClick={() => setBuyItem(product2)} htmlFor="buy-modal" className="btn btn-primary">Buy Now</label>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ModalForm
                    buyItem={buyItem}
                    user={user}
                ></ModalForm>
            </div>
        </div>
    );
};

export default Product;
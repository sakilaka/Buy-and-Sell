import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import ModalForm from './ModalForm';

const Product = () => {
    const allProduct = useLoaderData();
    const { product } = allProduct[0];

    console.log(product);
    const [buyItem, setBuyItem] = useState(null);

    const { user } = useContext(AuthUserContext);

    return (
        <div>
            <div className='grid gap-20 lg:grid-cols-2 my-20 md:grid-cols-2 grid-cols-1 container mx-auto'>
                {
                    product.map((product) => <div className="card w-96 bg-base-100 shadow-xl">
                        <figure><img src={product.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold my-2">{product.name}</h2>
                            <h2 className="text-xl font-semibold">SellerName : {product.sellerName}</h2>
                            <h2 className="text-lg font-semibold">Date : {product.date}</h2>
                            <h2 className="text-lg font-semibold">ResalePrice : ${product.resalePrice}</h2>
                            <h2 className="text-lg font-semibold">OrginalPrice : ${product.orginalPrice}</h2>
                            <h2 className="text-lg font-semibold">Used : {product.used}</h2>
                            <h2 className="text-lg font-semibold">Location : {product.location}</h2>
                            <p className='text-lg font-semibold'>Verified: {product.verifiedSeller}</p>
                            <div className="card-actions">
                                <label onClick={() => setBuyItem(product)} htmlFor="buy-modal" className="btn btn-primary">Buy Now</label>

                            </div>
                        </div>
                    </div>
                    )
                }
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
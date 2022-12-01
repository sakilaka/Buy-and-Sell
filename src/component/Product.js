import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthUserContext } from '../Context/AuthContext';
import ModalForm from './ModalForm';

const Product = () => {
    const allProduct = useLoaderData();
    const { product } = allProduct[0];

    console.log(product);
    const [buyItem, setBuyItem] = useState(null);

    const { user } = useContext(AuthUserContext);

    const [loadUser, setLoadUser] = useState([]);

    useEffect(() => {

        fetch(`https://second-hand-server-nine.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setLoadUser(data[0])
            })
    }, [user?.email])


    const handleWishlist = item => {

        const name = item.name;
        const image = item.picture;
        const sellerName = item.sellerName;
        const time = item.time;
        const resalePrice = item.resalePrice;
        const orginalPrice = item.orginalPrice;
        const location = item.location;

        const wishListItem = {
            name,image,sellerName,time,resalePrice,orginalPrice,location
        }

        fetch('https://second-hand-server-nine.vercel.app/wishlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(wishListItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                Swal.fire(
                    'Added to WishList.'
                )
            })

    }


    return (
        <div>
            <div className='grid gap-20 lg:grid-cols-2 my-20 md:grid-cols-2 grid-cols-1 container mx-auto'>
                {
                    product.map((product) => <div className="card lg:w-96 w-[350px] bg-base-100 shadow-xl">
                        <figure><img src={product.picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold my-2">{product.name}</h2>
                            <h2 className="text-xl font-semibold">SellerName : {product.sellerName}</h2>
                            <h2 className="text-lg font-semibold">Date : {product.time}</h2>
                            <h2 className="text-lg font-semibold">ResalePrice : ${product.resalePrice}</h2>
                            <h2 className="text-lg font-semibold">OrginalPrice : ${product.orginalPrice}</h2>
                            <h2 className="text-lg font-semibold">Year of Purchase : ${product.yearOfPurchase}</h2>
                            <h2 className="text-lg font-semibold">Number : {product.number}</h2>
                            <h2 className="text-lg font-semibold">Location : {product.location}</h2>
                            <p className='text-lg font-semibold'>Verified: {product.verifiedSeller}</p>
                            <div className="card-actions">
                                <label onClick={() => setBuyItem(product)} htmlFor="buy-modal" className="btn btn-primary">Buy Now</label>
                                {
                                    loadUser?.type === "Buyer" &&
                                    <button onClick={() => handleWishlist(product)} className='btn btn-success'>Add WishList</button>
                                }
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
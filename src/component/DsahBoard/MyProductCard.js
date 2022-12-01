import React from 'react';

const MyProductCard = ({item}) => {
    const {product} = item;
    console.log(product);
    return (
        <div>
            {
                product.map(p => <div className="card lg:w-96 w-[320px] m-8 bg-base-100 shadow-xl">
                <figure><img src={p.picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold my-2">{p.name}</h2>
                    <h2 className="text-xl font-semibold">SellerName : {p.sellerName}</h2>
                    <h2 className="text-lg font-semibold">Date : {p.time}</h2>
                    <h2 className="text-lg font-semibold">ResalePrice : ${p.resalePrice}</h2>
                    <h2 className="text-lg font-semibold">OrginalPrice : ${p.orginalPrice}</h2>
                    <h2 className="text-lg font-semibold">Year of Purchase : ${p.yearOfPurchase}</h2>
                    <h2 className="text-lg font-semibold">Number : {p.number}</h2>
                    <h2 className="text-lg font-semibold">Location : {p.location}</h2>
                    <p className='text-lg font-semibold'>Verified: {p.verifiedSeller}</p>
                    <div className="card-actions">
                        <button className="btn btn-error">Delete</button>

                    </div>
                </div>
            </div>)
            }
        </div>
    );
};

export default MyProductCard;
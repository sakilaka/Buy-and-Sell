import React from 'react';

const AdsCard = ({ads}) => {
    const {name, image, price, location} = ads;
    return (
        <div>
            <div className="card w-96 bg-gradient-to-tr to-orange-400 from-white text-primary-content">
                <figure className="px-3 w-full h-60 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-red-500 font-bold'>price: ${price}</p>
                    <p>location: {location}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdsCard;
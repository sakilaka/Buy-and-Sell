import React from 'react';
import Swal from 'sweetalert2';

const MyProductCard = ({ item }) => {
    const { product } = item;
    console.log(product);

    const handleAdvertise = (item) =>{
        const name = item.name;
        const price = item.resalePrice;
        const location= item.location;
        const image = item.picture;

        const advertise = {
            name,
            image,
            price,
            location
        }
        fetch('http://localhost:5000/advertise', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(advertise),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Advertise item added.'
                    )
                }
            })
            .catch(error => {
                console.log(error);
            })


    }

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
                        <h2 className="text-lg font-semibold">Year of Purchase : {p.yearOfPurchase}</h2>
                        <h2 className="text-lg font-semibold">Number : {p.number}</h2>
                        <h2 className="text-lg font-semibold">Location : {p.location}</h2>
                        <p className='text-lg font-semibold'>Verified: {p.verifiedSeller}</p>
                        <div className="card-actions flex">
                            <button className="btn btn-error">Delete</button>
                            <button onClick={()=>handleAdvertise(p)} className="ml-5 btn btn-warning">Advertise</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};


export default MyProductCard;
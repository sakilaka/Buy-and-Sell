import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Swal from 'sweetalert2';

const MyWishList = () => {

    const { data: wishList = [], refetch } = useQuery({
        queryKey: ['wishList'],
        queryFn: async () => {
            const res = await fetch('https://second-hand-server-nine.vercel.app/wishlist');
            const data = await res.json();
            return data;

        }

    });

        const handeDeleteWishList = id => {
            Swal.fire({
                title: 'Are you sure?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                if (result.isConfirmed) {
    
                    fetch(`https://second-hand-server-nine.vercel.app/wishlist/${id}`, {
                        method: "DELETE"
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.deletedCount === 1) {
                                Swal.fire(
                                    'user deleted',
                                    'success'
                                )
                                 refetch();
                            }
                        })
    
                }
            })
        }


    return (
        <div className='p-10'>
            <h2 className='text-center text-4xl text-blue-400 font-bold my-10'>My WishList</h2>

            <div className='grid gap-20 lg:grid-cols-2 my-20 md:grid-cols-2 grid-cols-1 container mx-auto'>
                {
                    wishList.map((product) => <div className="card lg:w-96 w-[350px] bg-base-100 shadow-xl">
                        <figure><img src={product.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title font-bold my-2">{product.name}</h2>
                            <h2 className="text-xl font-semibold">SellerName : {product.sellerName}</h2>
                            <h2 className="text-lg font-semibold">Date : {product.time}</h2>
                            <h2 className="text-lg font-semibold">ResalePrice : ${product.resalePrice}</h2>
                            <h2 className="text-lg font-semibold">OrginalPrice : ${product.orginalPrice}</h2>
                            <h2 className="text-lg font-semibold">Location : {product.location}</h2>
                            <div className="card-actions">
                                <label htmlFor="buy-modal" className="btn btn-primary">Buy Now</label>
                                <button onClick={()=>handeDeleteWishList(product._id)} className="btn btn-error">Delete</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>

        </div>
    );

};

export default MyWishList;


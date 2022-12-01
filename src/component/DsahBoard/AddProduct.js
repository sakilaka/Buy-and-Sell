import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    // const navigate = useNavigate();


    const time = new Date().toLocaleString();
    const handleAddProduct = (event) => {

        event.preventDefault();
        const form = event.target;


        const name = form.name?.value;
        const picture = form.image?.value;
        const location = form.location?.value;
        const condition = form.condition?.value;
        const company = form.company?.value;
        const resalePrice = form.resalePrice?.value;
        const orginalPrice = form.orginalPrice?.value;
        const yearOfPurchase = form.year?.value;
        const number = form.number?.value;
        const sellerName = form.seller?.value;
        const verifiedSeller = form.verified?.value;
        const description = form.description?.value;

        const product = {
            productName: name,
            picture,
            location,
            condition,
            company,
            resalePrice,
            orginalPrice,
            yearOfPurchase,
            time,
            number,
            sellerName,
            verifiedSeller,
            description

        }

        console.log(product)

        fetch('http://localhost:5000/category', {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    Swal.fire(
                        'Product added.'
                    )
                    event.target.reset()
                    // navigate('/myproducts')
                }
            })
            .catch(error => {
                console.log(error);
                // toast.error(error)
            })



    }

    return (
        <div>
            <h2 className='text-green-400 text-center font-bold my-10 text-4xl'>Add a Product</h2>
            <div className="hero">

                <form onSubmit={handleAddProduct} className="card mb-10 lg:w-7/12 w-full p-10 shadow-2xl bg-slate-300">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">product name</span>
                            </label>
                            <input name='name' type="text" placeholder="product name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">product image</span>
                            </label>
                            <input name='image' type="text" placeholder="product image url" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">resalePrice</span>
                            </label>
                            <input name='resalePrice' type="text" placeholder="resalePrice" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">orginalPrice</span>
                            </label>
                            <input name='orginalPrice' type="text" placeholder="orginalPrice" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">condition</span>
                            </label>
                            <select name='condition' required className="select select-bordered w-full">
                                <option disabled selected>Select condition</option>
                                <option value='excellent'>excellent</option>
                                <option value='good'>good</option>
                                <option value='fair'>fair</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">mobile number</span>
                            </label>
                            <input name='number' type="text" required placeholder="mobile number" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">location</span>
                            </label>
                            <input name='location' type="text" required placeholder="location" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">company </span>
                            </label>
                            {/* <input name='company' type="text" placeholder="company " className="input input-bordered" /> */}
                            <select name='company' required className="select select-bordered w-full">
                                <option disabled selected>Select company</option>
                                <option value='YAMAHA'>YAMAHA</option>
                                <option value='TVS'>TVS</option>
                                <option value='SUZUKI'>SUZUKI</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Year of purchase</span>
                            </label>
                            <input name='year' required type="text" placeholder="Year of purchase" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Seller Name</span>
                            </label>
                            <input name='seller' required type="text" placeholder="Seller Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Verified</span>
                            </label>
                            <select name='verified' required className="select select-bordered w-full">
                                <option disabled selected>Select</option>
                                <option value='Yes'>Yes</option>
                                <option value='No'>No</option>
                            </select>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">description</span>
                            </label>
                            <textarea name='description' required className="textarea textarea-bordered" placeholder="description"></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Add Product</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
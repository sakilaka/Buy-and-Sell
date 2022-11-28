import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, company, img, description} = category;
    return (
        <div>
            <div className="card w-96 bg-gradient-to-tr from-indigo-400 to-white text-primary-content">
                <figure className="px-3 w-full h-60 pt-5">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{company}</h2>
                    <p>{description.slice(0, 200) + "..."}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/category/${_id}`}><button className="btn btn-error">See Bike</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
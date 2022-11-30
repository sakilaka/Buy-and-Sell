import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../component/Header';

const DashboardLayout = () => {
    const [loadUser, setLoadUser] = useState([]);
    useEffect(() => {

        fetch('https://second-hand-server-nine.vercel.app/users')
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setLoadUser(data[0])
            })
    }, [])

    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-green-300 text-base-content">
                        {
                            loadUser.type === "Seller" &&
                            <li><Link to='/addProduct'>Add a Product</Link></li>
                        }
                        {
                            loadUser.type === "Buyer" &&
                            <li><Link>My Orders</Link></li>
                        }
                        {
                            loadUser.type === "Admin" &&
                            <>
                                <li><Link>All Buyer</Link></li>
                                <li><Link>All Seller</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
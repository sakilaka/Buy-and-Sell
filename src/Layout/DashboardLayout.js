import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../component/Header';
import { AuthUserContext } from '../Context/AuthContext';

const DashboardLayout = () => {
    const {user} = useContext(AuthUserContext);
    
    const [loadUser, setLoadUser] = useState([]);

    useEffect(() => {

        fetch(`https://second-hand-server-nine.vercel.app/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data[0]);
                setLoadUser(data[0])
            })
    }, [user?.email])

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
                            loadUser?.type === "Seller" &&
                            <>
                            <li><Link to='/dashboard/addProduct'>Add a Product</Link></li>
                            <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                            </>
                        }
                        {
                            loadUser?.type === "Buyer" &&
                            <>
                            <li><Link>My Orders</Link></li>
                            <li><Link to='/dashboard/wishList'>My WishList</Link></li>
                            
                            </>
                        }
                        {
                            loadUser?.type === "Admin" &&
                            <>
                                <li><Link to='/dashboard/allBuyer'>All Buyer</Link></li>
                                <li><Link to='/dashboard/allSeller'>All Seller</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
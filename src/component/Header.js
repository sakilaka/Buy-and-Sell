import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const Header = () => {
    const { user, logOut } = useContext(AuthUserContext);
    
    const handleLogOut = () => {
        logOut()
        .then(() => { })
        .catch(error => console.log(error))
    }
    
    // const [loadUser, setLoadUser] = useState([]);
    // useEffect(() => {

    //     fetch('https://second-hand-server-nine.vercel.app/users')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data[0]);
    //             setLoadUser(data[0])
    //         })
    // }, [])

    return (
        <div>
            <div className="navbar p-6 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='home'>Home</Link></li>
                            <li><Link to='blog'>Blog </Link></li>
                            <li tabIndex={0}>
                                <Link to='dashboard' className="justify-between">
                                    DashBoard

                                </Link>
                                {/* <ul className="p-2">
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
                                </ul> */}
                            </li>
                            {
                                user?.uid ?
                                    <li><Link to=''><button onClick={handleLogOut}>Sign Out</button></Link></li>
                                    :
                                    <>
                                        <li><Link to='/login'>login</Link></li>

                                        <li><Link to='/register'>Register</Link></li>
                                    </>

                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">Bike Zone</Link>
                </div>
                <div className='navbar-end'>
                    <label htmlFor='dashboard-drawer' tabIndex={1} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/home'>Home</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li tabIndex={0}>
                            <Link to='/dashboard'>
                                DashBoard

                            </Link>
                            {/* <ul className="p-2">
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
                            </ul> */}
                        </li>
                        {
                            user?.uid ?
                                <li><Link to=''><button onClick={handleLogOut}>Sign Out</button></Link></li>
                                :
                                <>
                                    <li><Link to='/login'>login</Link></li>

                                    <li><Link to='/register'>Register</Link></li>
                                </>

                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;
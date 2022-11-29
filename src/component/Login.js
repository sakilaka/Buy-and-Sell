import React, { useContext, useState } from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';

const Login = () => {


    const { signIn, setUser, googleProviderLogin } = useContext(AuthUserContext);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch(error => {
                console.log(error);
           })
           
            navigate(from, { replace: true });
    }



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.pass.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setUser(user);

                const currentUser = {
                    email : user.email
                }
                console.log(currentUser);

                //get gwt token
                // fetch('https://cloud-kitchen-server-six.vercel.app/jwt', {
                //     method:"POST",
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(currentUser)
                // })
                // .then(res => res.json())
                // .then(data =>{
                //     console.log(data);
                //     localStorage.setItem('cloud-token', data.token);
                //     navigate(from, { replace: true })
                // })
            })
            .catch(error => {
                console.log(error)
                if (error.code === "auth/wrong-password") {
                    setError("Email or Password Incorrect.")
                }
                else if (error.code === "auth/user-not-found") {
                    setError("User not Found.")
                }
            });
        form.reset();
        navigate(from, { replace: true });
    }


    return (
        <div>
            <div className="hero mx-auto lg:p-10 bg-slate-200 container">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold text-red-400">Login now!</h1>
                        <p className="py-6 text-orange-600">Please Login for review and see and buy Bike.And also more Features</p>
                    </div>
                    <form onSubmit={handleLogin} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <p className='text-red-400 text-xl font-bold my-3'>{error}</p>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='pass' placeholder="password" className="input input-bordered" required/>
                            </div>
                            <div className="form-control mt-6 mb-5">
                                <button className="btn btn-success">Login</button>
                            </div>
                            <p className='text-center'>OR</p>
                            <hr />
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleLogin} className="btn btn-warning">Sign in with Google</button>
                            </div>
                            <p className="text-xs sm:text-sm">
                                Not have an account?please <Link className='text-teal-400 font-bold' to='/register'>Sign Up</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
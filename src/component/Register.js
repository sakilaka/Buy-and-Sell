import React, { useContext, useState } from 'react';
import { getAuth, GoogleAuthProvider, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {


    const auth = getAuth();
    const navigate = useNavigate();
    const { signUpWithEmailPass, googleProviderLogin } = useContext(AuthUserContext);
    const [success, setSuccess] = useState(false);


    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        googleProviderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUser(user.displayName, user.email, user.photoURL);
                Swal.fire(
                    'successfully register.'
                )
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })

    }

    const handleEmailPassRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const type = form.type.value;
        const email = form.email.value;
        const password = form.password.value;

        signUpWithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setSuccess(true)
                form.reset();
                updateUser(name, photoURL);
                saveUser(name, email, type, photoURL);
                Swal.fire(
                    'successfully register.'
                )
                navigate('/');
            })
            .catch(error => console.log(error));
    }

    const updateUser = (name, photoURL) => {

        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
            .then(() => {

            })
            .catch(error => console.log(error));
    }

    const saveUser = (name, email, type="Buyer", photoURL) => {
        const users = { name, email, type, photoURL }
        console.log(users);

        fetch('https://second-hand-server-nine.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })


    }

    return (
        <div>
            <div className="hero container mx-auto border border-black lg:p-8">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-green-400">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please register for more Features and see our bike and also review and subscribe our channel.</p>
                    </div>
                    <form onSubmit={handleEmailPassRegister} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-200">
                        {success && <p className='text-green-400 text-xl my-2'>Register Successfully.</p>}
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Account type</span>
                                </label>
                                <select required name='type' className="select select-bordered w-full max-w-xs">
                                    <option disabled defaultValue>Select account type</option>
                                    <option value='Buyer'>Buyer</option>
                                    <option value='Seller'>Seller</option>
                                </select>
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline btn-warning">Register</button>
                            </div>
                            <p className='text-center'>OR</p>
                            <hr />
                            <div className="form-control mt-6">
                                <button onClick={handleGoogleLogin} className="btn btn-warning">Sign in with Google</button>
                            </div>
                            <p className="text-xs my-2 sm:text-sm">
                                Already Sign Up?please <Link className='font-bold text-purple-400' to='/login'>Login</Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
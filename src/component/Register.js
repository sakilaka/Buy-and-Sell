// import React, { useContext, useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaFacebook, FaGithub, FaGoogle } from "react-icons/fa";
// import { AuthUserContext } from '../Context/AuthContext';
// import Swal from 'sweetalert2';


// const Register = () => {


//     // const [createteUserEmail, setUserEmail] = useState('')


//     const navigat = useNavigate()
//     const location = useLocation()
//     const from = location?.state?.from?.pathname || '/';

//     const { user, creatUser, upDateUser, singInAutoGoogle } = useContext(AuthUserContext);

//     navigat(from, { replace: true });

//     const [error, setError] = useState();
//     const [successRegistion, setSuccess] = useState();
//     const [account, setUse] = useState('User Account')

//     const handelSubmit = (event) => {
//         event.preventDefault()

//         const from = event?.target;
//         const name = from?.name?.value;
//         const email = from?.email?.value;
//         const password = from?.Password?.value;
//         const userPhoto = from?.photo?.value
//         const AccountType = account;

//         if (password.length <= 5) {
//             return setError("Password should be 6 character or more")

//         }
//         else {
//             setSuccess("successfully Register.")
//         }

//         creatUser(email, password)
//             .then(result => {
//                 const user = result?.user;
//                 console.log(user)
//                 setTimeout(() => {

//                 }, 1500);

//                 //Update User Info

//                 upDateUser(name, userPhoto)
//                     .then(() => {
//                         Swal.fire(
//                             'success'
//                         )
//                         from.reset();
//                         saveDatabsetInformation(name, email, AccountType, userPhoto);
//                     })
//                     .catch(error => {
//                         console.log(error);
//                     });

//             })
//             .catch(error => console.error(error))

//     }




//     const handleGoogleLogin = () => {

//         singInAutoGoogle()
//             .then(result => {

//                 saveDatabsetInformation(account)
//                 Swal.fire(
//                     'successfully Login'
//                 )
//             }).catch(error => console.log(error))
//     }
//     //Ghithub auto log in part

    




//     return (
//         <>
//             <div className='reGistration flex justify-center items-center pt-5 mx-5 mt-[65px] mb-2'>
//                 <div className='flex flex-col max-w-md  rounded-md sm:px-10 px-7 sm:py-3 py-1 bg-gray-300 text-gray-900'>
//                     <div className='mb-3 text-center'>
//                         <h1 className='mb-1 mt-1 text-4xl font-bold text-gray-900'><span className='text-blue-400'>Reg</span>ister</h1>
//                     </div>
//                     <form onSubmit={handelSubmit}
//                         noValidate=''
//                         action=''
//                         className='space-y-1 ng-untouched ng-pristine ng-valid'
//                     >
//                         <div className='space-y-3'>
//                             <div>
//                                 <label htmlFor='email' className='block mb-2 text-sm'>
//                                     Name
//                                 </label>
//                                 <input
//                                     type='text'
//                                     name='name'
//                                     id='name'
//                                     placeholder='Enter Your Name Here'
//                                     className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
//                                     data-temp-mail-org='0'
//                                     required />
//                             </div>
//                             <div>
//                                 <div className='flex justify-between mb-2'>
//                                     <label htmlFor='confirm' className='text-sm'>
//                                         User Informations
//                                     </label>
//                                 </div>
//                                 <div className="">
//                                     <input
//                                         type='photo'
//                                         name='photo'
//                                         id='photo'
//                                         placeholder='user Photo'
//                                         className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
//                                         required />
//                                     <div className="dropdown">
//                                         {/* <label tabIndex={0} className="m-1">account type</label>

//                                         <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-gray-500 rounded-box w-52" required>
//                                             <li id='myBtn' onClick={(e) => setUse(e.target.innerText)} className='text-white hover:text-green-300'> User Account</li>
//                                             <li onClick={(e) => setUse(e.target.innerText)} className='text-white hover:text-green-300'> Seller Account</li>
//                                         </ul> */}

//                                         <label className="my-2">account type</label> <br />

//                                         <select className='w-full mt-2 px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'>
//                                             <option className='w-full' value="Buyer">Buyer</option>
//                                             <option className='w-full' value="Seller">Seller</option>
//                                         </select>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div>
//                                 <label htmlFor='email' className='block mb-2 text-sm'>
//                                     Email address
//                                 </label>
//                                 <input
//                                     type='email'
//                                     name='email'
//                                     id='email'
//                                     placeholder='Enter Your Email Here'
//                                     className='w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-gray-200 text-gray-900'
//                                     data-temp-mail-org='0'
//                                     required />
//                             </div>
//                             <div>
//                                 <div className='flex justify-between mb-2'>
//                                     <label htmlFor='password' className='text-sm'>
//                                         Password
//                                     </label>
//                                 </div>
//                                 <input
//                                     type='password'
//                                     name='Password'
//                                     id='password'
//                                     placeholder='*******'
//                                     className='w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-200 focus:border-gray-900 text-gray-900'
//                                     required />
//                             </div>

//                             <p className='text-center text-red-400 text-xs pb-1'>{error}</p><p className='text-center text-green-500 text-xs pb-1'>{successRegistion}</p>
//                         </div>
//                         <div className='space-y-2'>
//                             <div>
//                                 <button
//                                     type='submit'
//                                     className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
//                                 >
//                                     Sign Up
//                                 </button>
//                             </div>
//                         </div>
//                     </form>
//                     <div className='flex items-center pt-4 space-x-1'>
//                         <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//                         <p className='px-3 text-sm dark:text-gray-400'>
//                             Signup with social accounts
//                         </p>
//                         <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
//                     </div>
//                     <div className='flex justify-center space-x-4'>

//                         <button onClick={() => handleGoogleLogin(user)} aria-label='Log in with Google' className='p-3 rounded-sm'>
//                             <h1 className='text-2xl'><FaGoogle></FaGoogle></h1>
//                         </button>

//                         <button aria-label='Log in with Facbook' className='p-3 rounded-sm'>
//                             <h1 className='text-3xl text-blue-700'><FaFacebook></FaFacebook></h1>
//                         </button>

//                         <button id='githubsss' aria-label='Log in with GitHub' className='p-3 rounded-sm'>
//                             <h1 className='text-2xl'><FaGithub></FaGithub></h1>
//                         </button>
//                     </div>
//                     <p className='px-6 text-sm text-center text-gray-400 pb-3'>
//                         Already have an account yet?{' '}
//                         <Link to='/login' href='#' className='hover:underline text-gray-600'>
//                             Sign In
//                         </Link>
//                         .
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Register;


import React, { useContext, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AuthUserContext } from '../Context/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {


    const auth = getAuth();
    const navigate = useNavigate();
    const { signUpWithEmailPass } = useContext(AuthUserContext);
    const [success, setSuccess] = useState(false);

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

    const saveUser = (name, email, type, photoURL) => {
        const users = { name, email, type, photoURL }
        console.log(users);

        fetch('http://localhost:5000/users', {
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
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center h-screen p-16 bg-gradient-to-tr from-green-500 to-blue-400 text-white'>
                <div className='container p-12 flex flex-col items-center justify-center px-5 mx-auto my-8'>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR5voG9Gp8fWP77jkoEfrfVZjsqUcY9ioEyA&usqp=CAU" alt="" />
                    <div className='max-w-md text-center'>
                        <p className='text-2xl font-semibold md:text-3xl my-8'>
                            Sorry, we couldn't find this page.
                            You are in wrong place.Please enter valid address.
                        </p>
                        <Link
                            to='/'
                            className='px-8 py-3 font-semibold rounded bg-green-300 text-gray-900'
                        >
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;
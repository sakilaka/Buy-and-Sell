import { useQuery } from '@tanstack/react-query';
import React from 'react';
import bike1 from '../../Images/R1M2.jpeg';
import Category from '../Category';

const Home = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ['category'],
        queryFn: () => fetch('http://localhost:5000/category').then(res => res.json())
    })
    return (
        <div>
            <section className='my-10 container mx-auto'>
                <div className="hero min-h-screen text-white bg-gradient-to-tr from-green-600 to-blue-600">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-6xl font-bold">Bike Zone</h1>
                            <p className="py-6 text-lg">Biggest Bike <span className='text-2xl'>Buy and Sell</span> Bazar.Here you get best bike with low budget.Here you buy bike and get home delivery.So stay with us..Best of Luck.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='my-10 container mx-auto'>
                <h2 className='text-3xl font-bold text-center text-green-400'>Category Here</h2>
                
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-20 my-10'>
                    {
                        categories.map(category => <Category
                            key={category._id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </section>

            <section className='my-10 container mx-auto'>
                <div className="hero min-h-screen" style={{ backgroundImage: `url('${bike1}')` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl text-white font-bold">YAHAMA R1M</h1>
                            <p className="mb-5 text-lg font-semibold text-white">The bikes feature a 998cc liquid-cooled, 4-stroke, in-line four- cylinder, 4-valve engine with a crossplane crankshaft. Thanks to this engine there is 200bhp on offer which is 18bhp more than what the current R1 puts out. It's shed a bit of weight too; all of 4kg..</p>
                            <button className="btn btn-warning">View details</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
};

export default Home;
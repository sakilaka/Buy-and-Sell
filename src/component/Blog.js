import React from 'react';

const Blog = () => {
    return (
        <div className='my-10 bg-gradient-to-tr from-green-300 to-purple-300 p-10 lg:w-10/12 w-full mx-auto'>
            <div className='bg-slate-200 p-10 lg:w-8/12 my-10 w-full mx-auto'>
                <h2 className='text-2xl my-3 font-bold text-black'>What are the different ways to manage a state in a React application?</h2>
                <p>Local (UI) state  Local state is data we manage in one or another component.

                    Local state is most often managed in React using the useState hook. <br />
                    Global (UI) state Global state is data we manage across multiple components.

                    Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. <br />
                    Server state Data that comes from an external server that must be integrated with our UI state.

                    Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. <br />
                    URL state Data that exists on our URLs, including the pathname and query parameters.</p>
            </div>
            <div className='bg-green-400 p-10 lg:w-8/12 my-10 w-full mx-auto'>
                <h2 className='text-2xl my-3 font-bold text-black'>How does prototypical inheritance work?</h2>
                <p>
                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
            </div>
            <div className='bg-purple-400 p-10 lg:w-8/12 my-10 w-full mx-auto'>
                <h2 className='text-2xl my-3 font-bold text-black'>What is a unit test? Why should we write unit tests?</h2>
                <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='bg-lime-300 p-10 lg:w-8/12 w-full mx-auto'>
                <h2 className='text-2xl my-3 font-bold text-black'>React vs. Angular vs. Vue?</h2>
                <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;
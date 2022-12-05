import React from 'react';

const Blog = () => {
    return (
        <div className='px-4 bg-white  text-slate-800 dark:text-white dark:bg-slate-900  md:px-20'>
            <div className='flex justify-center'>
                <h1 className='text-center text-3xl text-slate-800 dark:text-white rounded px-2 w-40 bg-teal-500 font-bold mt-5 md:my-10 '> Blogs </h1>
            </div>
            <div className='flex md:flex-row flex-col py-4 justify-around'>
                <div className='my-5'>
                    <h2 className='text-2xl font-bold'>What is <span className='bg-teal-500 text-white'>CORS?</span></h2>
                    <p className="w-80 md:w-96 font-semibold">
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
                    </p>
                </div>
                <div className='my-5'>
                    <h2 className='text-2xl font-bold'>How does the private  <span className='bg-teal-500 text-white'>route work?</span></h2>
                    <p className="w-80 md:w-96 font-semibold">
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property
                    </p>
                </div>

            </div>
            <div className='flex md:flex-row flex-col py-4 justify-around'>


                <div className='py-5'>
                    <h2 className='text-2xl w-80 md:w-96 font-bold'>What is <span className='bg-teal-500 text-white'> Node? </span>How does Node work?</h2>
                    <p className="w-80 md:w-96 font-semibold">
                        Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine and executes JavaScript code outside a web browser, which was designed to build scalable network applications.

                    </p>
                    <p className="w-80 md:w-96 font-semibold">

                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>


                <div className='my-5'>
                    <h2 className='text-2xl w-80 md:w-96 font-bold'>Why are you using  <span className='bg-teal-500 text-white'>`firebase`?</span>What other options do you have to implement authentication?</h2>
                    <p className="w-80 md:w-96 font-semibold">
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app

                    </p>
                    <p className="w-80 md:w-96 font-semibold">
                        It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                    </p>
                </div>




            </div>
        </div>
    );
};

export default Blog;
import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../Shared/CourseCard/CourseCard';
import './home.css'
const Home = () => {

    const courses = useLoaderData()
    const threeCoures = courses.slice(0, 3)
    return (
        <div className='p-5  bg-white dark:bg-slate-900 md:p-10'>
            <section>
                <div className="bg-teal-600 dark:bg-teal-800  shadow-2xl rounded-xl ">
                    <div className="flex-col flex items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-48 md:py-20 md:px-10 lg:px-20 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-white"><span className='bg-white px-2 text-gray-900 rounded-lg'>Learning</span> Hero</h1>
                        <p className="mt-6 mb-8 text-lg font-semibold sm:mb-12 xl:max-w-3xl text-gray-50">Learning hero is a learning platform where you can learn all the essential topic about front-end-development <span className='hidden md:inline'>such as Javascript, HTML ,CSS, REACT, Tailwind, Node JS etc.You can learn this topics with an affortable prices sign up now!</span></p>
                        <div className="flex flex-wrap justify-center">
                            <Link to='/login'>
                                <button type="button" className="px-8 py-3 m-2 text-lg font-semibold drop-shadow-xl 
                                hover:bg-teal-500 hover:border-white hover:border hover:text-white transition duration-300 rounded bg-white text-teal-500">Sing in</button>
                            </Link>

                            <Link to='/register'>

                                <button type="button" className="px-8 py-3 m-2 text-lg border drop-shadow-lg rounded border-white hover:bg-white hover:text-teal-500 transition duration-300
                                 text-white">Sign up</button>

                            </Link>
                        </div>
                    </div>
                </div>
                <img src="https://img.freepik.com/premium-vector/worker-using-computer_179970-850.jpg" alt="" className=" mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />
            </section>
            <section className='my-10 px-3 md:px-20'>
                <h2 className="text-4xl font-bold text-center text-teal-500">Our Popular Courses</h2>
                <div className='grid grid-cols-1 gap-10 my-10 md:grid-cols-3'>
                    {
                        threeCoures.map(course => <CourseCard
                            key={course._id}
                            course={course}
                        ></CourseCard>)
                    }
                </div>
                <div className='flex justify-center'>

                    <Link to='/courses'>
                        <button type="button" className="px-8 py-3 font-semibold border rounded hover:bg-teal-500 hover:text-white transition duration-300 border-teal-500 text-teal-500">View All</button>

                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
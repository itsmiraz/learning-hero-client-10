import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Corses.css'
import CourseCard from '../Shared/CourseCard/CourseCard'


const Courses = () => {

    const courses = useLoaderData()
    return (
        <div className='bg-white dark:bg-slate-900'>
            <div className='container pb-10 px-2 md:pl-10'>
                <div >
                    <h1 className="text-4xl text-center text-teal-600 font-bold my-5 grid-cols-4">Courses</h1>

                    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 px-4 md:px-10">
                        {
                            courses.map(course =>
                                <CourseCard
                                    key={course._id}
                                    course={course}
                                ></CourseCard>
                            )
                        }
                    </div>
                </div>
                <div>
                    <div className='p-5 bg-teal-500 rounded-lg mt-20 hidden md:block my-10'>


                        <div className=''>
                            <h2 className="text-3xl text-center  text-white font-bold ">Catagory</h2>
                            {
                                courses.map(course => <Link key={course._id} to={`/courses/${course._id}`}><p className="font-semibold my-2">{course.title}</p></Link>)
                            }
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Courses;
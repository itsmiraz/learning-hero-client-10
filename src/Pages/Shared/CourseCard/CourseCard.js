import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link, } from 'react-router-dom';

const CourseCard = (props) => {
    const { title, image_url, price, details, _id, rating } = props.course




    return (
        <div>
            <div className="rounded-md border-teal-600 p-2 border shadow-md bg-white-900 text-gray-800">
                <div className='justify-center flex w-full'>
                    <img src={image_url} alt="" className="  object-center w-44 h-44 rounded-t-md  " />
                </div>
                <div className="flex flex-col p-4 rounded-lg bg-teal-200 dark:bg-teal-700 justify-between  space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold  text-slate-900 dark:text-white tracking-wide">{title}</h2>
                        <p className="dark:text-gray-300">{details.slice(0, 60)}...</p>

                        <div className='flex font-semibold justify-between'>
                            <p>Price:${price}</p>
                            <div className='flex items-center'>
                                <FaStar></FaStar>{rating.number}
                            </div>
                        </div>
                    </div>

                    <Link to={`/courses/${_id}`}>
                        <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-teal-600 text-gray-50">Get Course</button>

                    </Link>



                </div>
            </div>
        </div>
    );
};

export default CourseCard;
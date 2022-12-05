import React from 'react';
import toast from 'react-hot-toast';
import { Link, useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const courses = useLoaderData()
    const selectedId = JSON.parse(localStorage.getItem('selectedCourse'));
    let selectedCourse = {};
    if (selectedId) {

        selectedCourse = courses.find(course => course._id === selectedId)
    }
    else {
        selectedCourse = {};
    }


    const handleConfirm = () => {
        toast.success('Congratulation You successfully Enrolled in Our Course.')

    }

    const { title, _id, price, } = selectedCourse

    const handleCancel = () => {
        localStorage.removeItem('selectedCourse')
        toast.error('Canceled')
    }

    return (
        <div className='  bg-white dark:bg-slate-900  py-20 flex md:flex-row flex-col justify-around'>




            <div className=' text-center  bg-white dark:bg-slate-800  border shadow-lg rounded-lg mt-10 mb-48  z-0 drop-shadow-lg p-5'>
                <h3 className='text-3xl text-gray-800 dark:text-white font-bold my-4'> Check Out</h3>
                {
                    selectedCourse?.title ?
                        <>
                            <div className='flex items-center my-10 md:flex-row flex-col bg-gray-200 p-2 rounded-lg text-gray-700 font-semibold'>

                                <div className='text-start pl-2'>
                                    <h3 className='text-xl'>{selectedCourse?.title ?
                                        <span>{title}</span>
                                        :
                                        <></>
                                    }</h3>
                                    <p>Price:${selectedCourse ?
                                        <span>{price}</span>
                                        :
                                        <></>
                                    }</p>
                                </div>
                                <div className='mx-5'>
                                    <p>CourseId:</p>
                                    <p>{_id}</p>
                                </div>

                                <div className='mx-5'>
                                    <Link to='/'>
                                        <button onClick={handleConfirm} type="button" className="px-2 py-1 font-semibold border rounded bg-teal-800 border-gray-100 text-gray-100">Confirm</button>

                                    </Link>
                                </div>
                                <div>
                                    <Link>
                                        <button onClick={handleCancel} type="button" className="px-2 py-1 font-semibold border rounded bg-teal-800 border-gray-100 text-gray-100">Cancel</button>
                                    </Link>
                                </div>
                            </div>
                        </>

                        :
                        <><h1 className='text-gray-500 font-semibold dark:text-white'>Your Cart is Empty.Please select a <Link className='underline' to='/courses'>Course</Link> first!</h1></>
                }
            </div>
        </div>
    );
};

export default CheckOut;
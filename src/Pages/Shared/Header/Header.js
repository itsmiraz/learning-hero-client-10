import React, { useState } from 'react';
import { Link, NavLink, } from 'react-router-dom';
import { useContext } from 'react';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../../../Context/UserContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const [open, setOpen] = useState(false)

    const { user, logOut, handleThemeSwitch } = useContext(AuthContext)


    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => { console.log('error', error); })
    }
    const [courses, setCourses] = useState([])
    useEffect(() => {
        fetch(`https://learinin-hero-server.vercel.app/courses`)
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='  z-50 drop-shadow-xl sticky top-0       items-center md:px-10 px-4 py-3 flex justify-between w-full'>

            <div className='flex items-center'>
                <img className='h-10 border z-10 dark:border-2  shadow-2xl rounded-full mr-2' src='https://static.vecteezy.com/system/resources/thumbnails/007/497/955/small/letter-l-logo-design-free-vector.jpg' alt="" />
                <h1 className='md:text-3xl  text-2xl z-50 font-bold'>Learning Hero</h1>

            </div>
            <div >
                <ul className={`md:flex rounded-lg items-center right-0 z-0 bg-white dark:bg-gray-800 w-full  text-center justify-center ease-in  md:static  absolute ${open ? 'top-14' : 'top-[-800px]'}`}>
                    <li className='font-semibold my-2 mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? ' underline decoration-2' : undefined
                        }

                            to='/home'>Home</NavLink >
                    </li>
                    <li className='font-semibold my-2 mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? ' underline decoration-2' : undefined
                        } to='/courses'>Courses</NavLink >
                    </li>
                    <li className='font-semibold my-2 mr-4'>
                        <NavLink className={({ isActive }) =>
                            isActive ? ' underline decoration-2' : undefined
                        } to='/blog'>Blogs</NavLink >
                    </li>
                    <li className='font-semibold my-2 mr-4 md:mr-10'>
                        <NavLink className={({ isActive }) =>
                            isActive ? ' underline decoration-2' : undefined
                        } to='/faq'>FAQ</NavLink >
                    </li>

                    {/* Dark Toggle Buttton */}
                    <li className='font-semibold my-2 mr-4'>
                        <label htmlFor="Toggle1" className="inline-flex text-gray-900  items-center space-x-4 cursor-pointer dark:text-gray-100">
                            <span className='text-gray-900 dark:text-white '> Light </span>
                            <span className="relative">
                                <input onClick={handleThemeSwitch} id="Toggle1" type="checkbox" className="hidden shadow-lg  peer" />
                                <div className="w-10 h-6 rounded-full shadow-inner bg-gray-200  dark:bg-gray-600 peer-checked:dark:bg-teal-400"></div>
                                <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full  bg-gray-900 shadow peer-checked:right-0 peer-checked:left-auto dark:bg-gray-800"></div>
                            </span>
                            <span className='text-gray-900 dark:text-white '> Dark  </span>
                        </label>
                    </li>
                    {/* User  */}
                    {
                        user?.uid ?
                            <>
                                <li className='font-semibold my-2 ' >
                                    <Link to='/user'>

                                        <span>{user.displayName ?
                                            <span className='flex justify-center items-center mr-2'>

                                                <ReactTooltip place="bottom" type="dark" effect="solid"></ReactTooltip>

                                                <img data-tip={user.displayName} className='rounded-full mx-2' style={{ height: '30px' }} src={user.photoURL} alt="" />
                                            </span>
                                            :
                                            <div className='flex justify-center items-center gap-2 mr-3'>
                                                <ReactTooltip place="bottom" type="dark" effect="solid"></ReactTooltip>
                                                <FaUser data-tip="Anonymus"></FaUser>
                                            </div>
                                        }</span>
                                    </Link>
                                </li>
                                <li className='font-semibold mr-4'>
                                    <Link to='/'><button onClick={handleLogOut} className="px-2 py-1 md:my-0 my-2 font-semibold rounded-full z-10 bg-teal-500 text-gray-100">Log Out</button></Link>

                                </li>

                            </>
                            :
                            <>
                                <li>
                                    <Link to='/login'><button className="px-3 py-1 md:my-0 mt-2 font-semibold rounded-full  text-white bg-teal-500 mr-2">Sign In</button></Link>
                                </li>
                                <li>
                                    <Link to='/register'><button className="px-3 py-1 md:my-0 my-2 font-semibold rounded-full border border-teal-500  text-teal-500">Sign Up</button></Link>
                                </li>
                            </>
                    }
                    <li>
                        <div className='md:hidden block'>
                            <h2 className="text-3xl text-center  text-teal-500 font-bold ">Catagory</h2>
                            {
                                courses.map(course => <Link key={course._id} to={`/courses/${course._id}`}><p className="font-semibold">{course.title}</p></Link>)
                            }
                        </div>
                    </li>

                </ul>
                <div onClick={() => setOpen(!open)} className="h-6 ease-in duration-300 transition   text-teal-600 w-6 md:hidden" >
                    {open ? <XMarkIcon />
                        : <Bars3Icon />
                    }
                </div>
            </div>
        </div >
    );
};

//  
//
export default Header;
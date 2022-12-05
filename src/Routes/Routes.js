import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import CheckOut from "../Pages/CheckOut/CheckOut";
import CourseDetail from "../Pages/CourseDetail/CourseDetail";
import Courses from "../Pages/Courses/Courses";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Blog from "../Pages/Others/Blog/Blog";
import Contact from "../Pages/Others/Contact/Contact";
import Errorpage from "../Pages/Others/Errorpage/Errorpage";
import FAQ from "../Pages/Others/FAQ/FAQ";
import UserPage from "../Pages/Others/UserPage/UserPage";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: () => fetch('https://learinin-hero-server.vercel.app/courses'),
                element: <Home></Home>,

            },
            {
                path: '/home',
                loader: () => fetch('https://learinin-hero-server.vercel.app/courses'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('https://learinin-hero-server.vercel.app/courses'),
                element: <Courses></Courses>,
            },
            {
                path: '/courses/:id',
                loader: ({ params }) => fetch(`https://learinin-hero-server.vercel.app/courses/${params.id}`),
                element: <CourseDetail></CourseDetail>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/checkout',
                loader: () => fetch('https://learinin-hero-server.vercel.app/courses'),

                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/user',
                element: <UserPage></UserPage>
            },
            {
                path: '*',
                element: <Errorpage></Errorpage>
            },

        ]
    },

])
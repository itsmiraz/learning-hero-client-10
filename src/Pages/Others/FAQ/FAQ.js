import React from 'react';

const FAQ = () => {
    return (
        <div className='px-2 bg-white  text-slate-800 dark:text-white dark:bg-slate-900 md:px-20'>
            <h1 className='text-center text-teal-600 font-bold text-4xl py-10'>Frequently Asked Questions</h1>


            <div className='flex flex-col  md:flex-row justify-around my-14'>
                <div>
                    <h2 className='font-bold  dar text-3xl my-2'>What this site <span className='bg-teal-500'>about?</span></h2>
                    <p className='w-96  font-semibold'>
                        Learning Hero is E-learning platform.Where you can Learn Essential topics about web-development such as javasscript, HTML, CSS, React JS etc wiht an affortable price.
                    </p>

                </div>
                <div>
                    <h2 className='font-bold  text-3xl my-2'>How many videos are <span className='bg-teal-500'>there?</span></h2>
                    <p className='w-96  font-semibold'>
                        Well each course have 400+ videos, 12 Assignments, Weekly Zoom confernce,24/7 support session, Qualityful Videos etc.
                    </p>
                </div>

            </div>
            <div className='flex flex-col pb-20 md:flex-row  justify-around py-5'>
                <div>
                    <h2 className='font-bold  text-3xl my-2'>Why Learning <span className='bg-teal-500'>Hero?</span></h2>
                    <p className='w-96  font-semibold'>

                        We are in this particular stage since 2015. We have came a long way. Our support session is top notch. Even if you complete the course on time and do good then we have a special team they will heplp you to find your dream job.
                    </p>

                </div>
                <div>
                    <h2 className='font-bold  text-3xl my-2'>
                        Why learn  <span className='bg-teal-500'>Web-development?</span></h2>
                    <p className='w-96  font-semibold'>
                        Nowa-days web development is a really good skill to have. A expirienced web developer earns so much money that you can think.Also you can use it for your personal work.Such as you have a buisness you can build a website for your business.
                    </p>
                </div>

            </div>





        </div>
    );
};

export default FAQ;
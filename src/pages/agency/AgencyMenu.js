import React from 'react';

const AgencyMenu = () => {
    return (
        <div>
            <div className='flex md:items-end items-center justify-between md:flex-row flex-col-reverse mr-11'>
                <div className='md:mt-0 mt-5 md:justify-start justify-center flex w-full'>
                    <ul className='flex items-center sm:pb-0 pb-5 overflow-x-auto overflow-y-hidden text-base text-gray-500 w-full space-x-reverse'>
                        <li className='ml-12 sm:ml-8 last:ml-0'>
                            <a className='font-medium transition duration-200 whitespace-nowrap hover:text-blue-700 text-blue-700'>پروفایل</a>
                        </li>
                        <li className='ml-12 sm:ml-8 last:ml-0'>
                            <a className='font-medium transition duration-200 whitespace-nowrap hover:text-blue-700 '>لیست فایل ها</a>
                        </li>
                        <li className='ml-12 sm:ml-8 last:ml-0'>
                            <a className='font-medium transition duration-200 whitespace-nowrap hover:text-blue-700 '>ثبت امتیاز</a>
                        </li>
                        <li className='ml-12 sm:ml-8 last:ml-0'>
                            <a className='font-medium transition duration-200 whitespace-nowrap hover:text-blue-700 '>ثبت فایل </a>
                        </li>
                        <li className='ml-12 sm:ml-8 last:ml-0'>
                            <a className='font-medium transition duration-200 whitespace-nowrap hover:text-blue-700 '>ثبت درخواست</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AgencyMenu;
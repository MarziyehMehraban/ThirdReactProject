import React from 'react';
import ReactStars from "react-rating-stars-component";


const AgencyHeader = ({agency}) => {


    console.log(agency.guildCode)

    return (
        <div className='flex justify-between items-center mb-4 lg:flex-row flex-col '>
            <div className='w-full flex lg:items-end items-center lg:text-right text-center lg:flex-row flex-col border-b pb-4 border-gray-200 mt-12 pt-5'>
                <div className='relative hvr-ripple-out z-10 mt-12'>
                    <div className='md:w-52 md:h-52 w-24 h-24 md:border-4 lg:ml-5 md:-mt-28 -mt-13 object-cover bg-gray-300 group relative rounded-full overflow-hidden border-2 border-solid border-gray-50 '>
                        <img src={agency.logoFile} className='transition duration-200 transform group-hover:scale-110' loading='lazy'/>
                    </div>
                </div>
                <div className='mb-3 md:mt-5 mt-2'>
                    <div>
                        <h1 className='text-gray-800 lg:text-3xl font-bold'>{agency.name}</h1>
                        <span className='pe-1'>کد صنفی:</span>
                        <span>{agency?.guildCode}</span>
                        <ul className='mt-2 flex items-center sm:flex-row flex-col '>
                            <li className='text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <a href="#">
                                    <span>{agency.phoneNumber}</span>
                                </a>
                            </li>
                            <li className='text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <a href="#">
                                    <span>{agency.telephoneNumber}</span>
                                </a>
                            </li>
                            <li className='relative group text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <span>{agency.bio}</span>
                            </li>
                            <li className='text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <div className='flex items-center justify-center'>
                                    <ReactStars
                                        count={5}
                                        size={20}
                                        color="#dbdad6"
                                        value={agency.rate}
                                        activeColor="#ffd700"
                                        edit={false}
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='text-base'>
                        <ul className='mt-2 flex items-center sm:flex-row flex-col '>
                            <li className='text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <span className='font-bold text-zinc-500'>با مدیریت : </span>
                                <span className='pe-1 text-[black] font-bold'>{agency.managerName}</span>
                            </li>
                            <li className='relative group text-zinc-500 text-base font-medium sm:pl-2 md:ml-2 md:mb-0 mb-1.5 sm:border-l border-gray-500 border-opacity-20 last:ml-0 last:pl-0 w-fit-content last:border-0 flex items-center'>
                                <span className='font-bold text-zinc-500'>آدرس : </span>
                                <span className='pe-1 text-[black] font-bold'>{agency.address}</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='mr-auto flex justify-between mx-auto self-center sm:flex-row flex-col-reverse items-center'>
                    <ul className='flex items-center text-base text-zinc-500'>
                        <li className='text-sm flex items-center ml-6 last:ml-0 font-medium'>
                            <button>
                                <span className='font-bold sm:text-33 text-xl ml-2 text-blue-800 group-hover:text-blue-700 duration-200 transition'>{agency.countOnSale}</span>
                                فروشی
                            </button>
                        </li>
                        <li className='text-sm flex items-center ml-6 last:ml-0 font-medium'>
                            <button>
                                <span className='font-bold sm:text-33 text-xl ml-2 text-blue-800 group-hover:text-blue-700 duration-200 transition'>{agency.countRent}</span>
                                اجاره ای
                            </button>
                        </li>
                        <li className='text-sm flex items-center ml-6 last:ml-0 font-medium'>
                            <button>
                                <span className='font-bold sm:text-33 text-xl ml-2 text-blue-800 group-hover:text-blue-700 duration-200 transition'>{agency.countConstruction}</span>
                                ساخت و ساز
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AgencyHeader;
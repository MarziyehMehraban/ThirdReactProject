import React from 'react';
import { BiUser,BiMessageRoundedDots } from "react-icons/bi";
import {BsTelephone} from "react-icons/bs";
import {RiStarSLine} from "react-icons/ri";
import ReactStars from "react-rating-stars-component";

const Counsellor = ({amlakName ,counsellorName, phone, avatar, rating}) => {


    // const getImage = () => {
    //     if (image === null)
    //         return notImage;
    //     else
    //         return image[0].path;
    // }

    // console.log(rating);

    return (
        <li className='w-full text-right py-2 focus:outline-none focus-visible:bg-indigo-50'>
            <div className='flex items-center'>
                <div className='w-16 h-16 flex-shrink-0 ml-3 rounded-full items-start overflow-hidden'>
                    <a href="#">
                        <img src={avatar} className='w-full h-full'/>
                    </a>
                </div>
                <div className='flex items-center grow'>
                    <div>
                        <h4 className="text-sm font-medium text-gray-900">
                            <a className='hover:text-zinc-500'>{amlakName}</a>
                        </h4>
                        <div className='flex items-center justify-center'>
                            {/* <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine />
                            <RiStarSLine /> */}
                            <ReactStars
                                count={5}
                                size={20}
                                color="#dbdad6"
                                value={rating}
                                activeColor="#ffd700"
                                edit={false}
                            />
                        </div>
                        <div className='text-xs pt-1'>
                            <a className="hover:text-zinc-500">  
                                <BiUser className='w-3 h-3 inline ml-1' />
                                {counsellorName}
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center mr-auto flex-col">
                        <div className='flex items-center gap-2'>
                            <button className='flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-mobile-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300'>
                                <BiMessageRoundedDots className='w-4 h-4 fill-current'/>
                            </button>
                            <a className='flex items-center p-1 text-xs font-medium text-gray-700 bg-white border border-gray-200 rounded-lg toggle-mobile-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300' href='tel:${phone}'>
                                <BsTelephone className='w-4 h-4 fill-current' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default Counsellor;
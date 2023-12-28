import React, { useState } from 'react';
import Map from '../../components/map/Map';
import { BsSave } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import Section1 from './Section1';
import Note from '../../components/note/Note';
// import Slider from 'react-slick';
import Sliderr from '../../components/slider/Slider';
import MoreFileInfo from '../../components/moreInfo/MoreFileInfo';


const MainFile = ({ section1, section2, description, main }) => {

    const [IsMoreOpen, setIsMoreOpen] = useState(false);
    const [image, setImage] = useState([]);
    const [video, setVideo] = useState([]);


    const MoreInfoHandler = () => {
        setIsMoreOpen(!IsMoreOpen);
    }
    // console.log('00000', main)
    // console.log('kkkk', main.media);


    // console.log(image)
    // console.log(video)
    return (
        <main className='col-span-10 lg:col-span-7'>
            {main && main.length !== 0 &&
                <>
                    <Sliderr main={main?.media} />
                </>        
            }
            <div className='px-2'>
                <div className='flex items-center justify-between mt-4'>
                    <h2 className='flex text-medium items-center font-bold text-zinc-500 w-fit'>
                        {/* <span className='text-sm font-normal'>{main.category.fullCategory}</span> */}
                        <span className='block bg-gray-200 h-6 w-[1px] mx-2'></span>
                        <span className='text-black'>{main.name}</span>
                    </h2>
                    <div className='flex items-center '>
                        <button className='rounded-full group hover:bg-zinc-200 p-2 relative'>
                            <BsSave className='text-gray font-bold' />
                        </button>
                        <button className='rounded-full group hover:bg-zinc-200 p-2 relative'>
                            <BiShareAlt className='text-gray font-bold' />
                        </button>
                    </div>
                </div>
                <div className='flex w-fit items-center'>
                    <span>
                        <small className='text-[11px] text-zinc-500'>{main.publishedAgo}</small>
                    </span>
                    <span className='block bg-gray-200 h-3 w-[1px] mx-1'></span>
                    <span>
                        <small className='text-[11px] text-zinc-500'>{main.city}</small>
                    </span>
                    <span>
                        <small className='text-[12px] text-zinc-500'></small>
                    </span>
                </div>
                <ul className='grid md:grid-cols-6 grid-cols-3 divide-x-reverse divide-x mt-6'>
                    {section1 && section1.map((item, index) => (
                        <Section1 key={index} section1={item} />
                    ))}
                </ul>
                <p className="mt-8 text-sm">{description}</p>
                <div className="mb-2">
                    <div>
                        <div className='w-full cursor-pointer mt-8 border-b py-2 text-zinc-500 ' onClick={MoreInfoHandler}>
                            <h2 className='flex items-center justify-between'>
                                <span>سایر امکانات و ویژگی ها</span>
                                <MdKeyboardArrowDown className='w-[24px] h-[24px] fill-current' />
                            </h2>
                        </div>
                        <div className=' accordion-content '>
                            <ul className='divide-y'>
                                {IsMoreOpen &&
                                    section2.map((item, index) => (
                                        <MoreFileInfo key={index} item={item} />
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full h-72 overflow-hidden rounded-lg">
                    <Map lat={main.lat} long={main.long} />
                </div>
                <p className="mt-12 border-t py-2 text-zinc-500">
                    <button className='text-medium'>ثبت تخلف و مشکل فایل</button>
                </p>
            </div>
            <Note />
        </main>
    );
};

export default MainFile;
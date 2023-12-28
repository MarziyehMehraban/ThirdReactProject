import React, {useState} from 'react';
import {BiLogInCircle} from 'react-icons/bi';
import {AiOutlinePlus} from 'react-icons/ai';
import {GiModernCity} from 'react-icons/gi';
import {TbFilterSearch} from 'react-icons/tb';
import {RiSearch2Line , RiRoadMapLine} from 'react-icons/ri';
import EnterModal from '../../../components/Modals/EnterModal';
import { Tooltip } from 'react-tooltip';
import CityModal from '../../../components/Modals/CityModal';


const HeaderL = ({getApi}) => {

    const [isOpenEn, setIsOpenEn] = useState(false);
    const [isOpenCi, setIsOpenCi] = useState(false);
    const [tagLength, setTagLength] = useState("0 شهر");


    const clickHandlerEn = () => {
        setIsOpenEn(true)
    }
    
    const closeHandlerEn = () => {
        setIsOpenEn(false)
    } 
    const clickHandlerCi = () => {
        setIsOpenCi(true)
    }
    
    const closeHandlerCi = () => {
        setIsOpenCi(false)
    } 
    // var taglen;
    // var cityName;
    const arrLength = (len) => {
        // taglen = tagArr.length; 
        // if(len ===1)
        //    { taglen = name;
        //     return taglen;
        // }
        // else if(len ===0)
        //     {taglen = "0شهر"
        // return taglen;}
        // else if(len > 1)
        //     {taglen = `${len} شهر`
        //     return taglen;}
        setTagLength(len)
    }
    // console.log(taglen)
    // console.log(cityName)

    return (
        <div className='flex'>
            <div className='lg:flex items-center gap-4 justify-end hidden'>
                <ul className='flex items-center py-4 gap-4'>
                    <li className='flex items-center'>
                        <span className='block bg-gray-200 h-6 w-[1px] ml-1'></span>
                        <button 
                        className='rounded-full group text-sm p-1 relative'
                        onClick={clickHandlerCi}
                        >
                            {tagLength}
                        </button>
                    </li>
                    <li>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="جستجو" className='rounded-full group hover:bg-gray-100 p-1 relative w-[33px] h-[33px]'>
                            <RiSearch2Line className='w-[24px] h-[24px]'/>
                        </button>
                    </li>
                    <li>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="فیلتر فایل ها" className='rounded-full group hover:bg-gray-100 p-1 relative w-[33px] h-[33px]'>
                            <TbFilterSearch className='w-[24px] h-[24px]'/>
                        </button>
                    </li>
                    <li>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="دفاتر املاک" className='rounded-full group hover:bg-gray-100 p-1 relative w-[33px] h-[33px]'>
                            <GiModernCity className='w-[24px] h-[24px]'/>
                        </button>
                    </li>
                    <li>
                        <button data-tooltip-id="my-tooltip" data-tooltip-content="فایل های اطراف من" className='rounded-full group hover:bg-gray-100 p-1 relative w-[33px] h-[33px]'>
                            <RiRoadMapLine className='w-[24px] h-[24px]'/>
                        </button>
                    </li>
                    <li>
                        <button onClick={clickHandlerEn} data-tooltip-id="my-tooltip" data-tooltip-content="ثبت فایل" className='rounded-full group hover:bg-gray-100 p-1 relative w-[33px] h-[33px] '>
                            <AiOutlinePlus className='w-[24px] h-[24px]'/>
                        </button>
                    </li>
                </ul>
            <button type='button' onClick={clickHandlerEn} className='inline-flex items-center py-2 px-4 text-xs font-bold text-[0.65rem] text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200'>
                <BiLogInCircle className='ml-1 fill-current w-[24px] h-[24px]' />
                ورود
                <span className="after:content-['|'] after:p-1"></span>
                ثبت نام
            </button>
            </div>
            <EnterModal onCloseEn={closeHandlerEn} visibleEn={isOpenEn} />
            <CityModal arrLength={arrLength} onCloseCi={closeHandlerCi} visibleCi={isOpenCi} getApi={getApi}/>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default HeaderL;
import React from 'react';
import { BsFillExclamationCircleFill } from "react-icons/bs";

const Note = () => {
    return (
        <div className='flex p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50'>
            <BsFillExclamationCircleFill className='mt-1 ml-1'/>
            <div>
                <span className='font-sm'>برای افزودن یادداشت ابتدا وارد حساب کاربری خود شوید.</span>
            </div>
        </div>
    );
};

export default Note;
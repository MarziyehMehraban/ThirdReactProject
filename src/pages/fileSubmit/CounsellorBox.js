import React from 'react';
import ReactStars from "react-rating-stars-component";


const CounsellorBox = ({name, rate , managerName, tagsHandler,id}) => {

    const clickHandler = () => {
        tagsHandler(name,id)
    }
    return (
        <li onClick={clickHandler} className='px-2 py-3 flex justify-between hover:bg-zinc-100 cursor-pointer select-box-option block'>
            {name}
            <h1 className='px-1'>
                مدیریت:
                {managerName}
            </h1>
            <p className='px-1'></p>
            <div className='flex items-center justify-center'>
            <ReactStars
                count={5}
                size={20}
                color="#dbdad6"
                value={rate}
                activeColor="#ffd700"
                edit={false}
            />
            </div>
        </li>
    );
};

export default CounsellorBox;
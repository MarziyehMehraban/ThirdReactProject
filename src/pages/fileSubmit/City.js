import React from 'react';

const City = ({item, tagHandler}) => {

    const clickHandler = () => {
        tagHandler(item)
    }


    return (
        <div>
            <li onClick={clickHandler} className='px-6 py-3 text-black rounded m-1 border hover:bg-zinc-200 cursor-pointer select-box-option bg-white block'>{item.name}</li>
        </div>
    );
};

export default City;
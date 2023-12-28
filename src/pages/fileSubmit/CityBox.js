import React,{ useState } from 'react';
import {MdKeyboardArrowDown} from 'react-icons/md';
import City from './City';

const CityBox = ({name , cities , tagHandler}) => {

    const [isOpen, setIsOpen] = useState(false)

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }


    return (
        <li className='block'>
            <div onClick={clickHandler} className='py-3 px-2 flex border rounded m-1 bg-zinc-100'>
                <span>{name}</span>
                <MdKeyboardArrowDown className='feather feather-chevron-down ms-2 h-[20px] w-[20px]' />
            </div>
            <ul className='bg-zinc-100 text-zinc-400 select-box-option block'>
                {isOpen && cities.map((item, index) => (
                    <City tagHandler={tagHandler} item={item} key={index}/>
                ))}
            </ul>
        </li>
    );
};

export default CityBox;
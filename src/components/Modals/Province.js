import React, {useState} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import City from './City';

const Province = ({name, cities, tagHandler}) => {

    const [isOpen, setIsopen] = useState(false)

    const clickHandler = () => {
        setIsopen(!isOpen)

    }


    return(
        <div>
            <div className='w-full cursor-pointer  '>
                <header onClick={clickHandler} className='flex items-center w-full cursor-pointer hover:opacity-100 px-6 py-4 border-b border-gray-200 bg-gray-50/20 text-zinc-900'>
                    <span className='font-[1.2rem]'>{name}</span>
                    <span className='mr-auto transition-all duration-200'>
                        <MdKeyboardArrowDown />
                    </span>
                </header>
            </div>
            <div className='accordion-content show h-auto'>
                <div className='bg-gray-50 rounded-b'>
                    <ul>
                        {isOpen && cities.map((item, index) => (
                            <City tagHandler={tagHandler} id={item.id} key={index} name={item.name}/>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Province;
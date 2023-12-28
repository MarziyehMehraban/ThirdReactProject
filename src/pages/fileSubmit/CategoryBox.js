import React, { useEffect, useState, } from 'react';
import { configData } from '../../config/api';
import axios from 'axios';
import { MdKeyboardArrowDown } from "react-icons/md";


const CategoryBox = ({setCategoryChoice}) => {

    const [categoryFile, setCategoryFile] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);

    const clickHandler = () => {
        setIsOpen(!isOpen);
    }
    const clickHandler2 = () => {
        setIsOpen2(!isOpen2);
    }
    const clickHandler3 = () => {
        setIsOpen3(!isOpen3);
    }

    useEffect(() => {
        const verify_link = configData.Categories;
        axios.get(verify_link)
            .then(response => {
                setCategoryFile(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
        }, [])
        
        // console.log(categoryFile)

        const category =  (categoryFile && categoryFile.filter(item => item.parent_id === null));
        const category1 =  (categoryFile && categoryFile.filter(item => item.parent_id === 1));
        const category2 =  (categoryFile && categoryFile.filter(item => item.parent_id === 2));
        const category3 =  (categoryFile && categoryFile.filter(item => item.parent_id === 3));
        // console.log(category);
        // console.log(category2);


    return (
        <div className='absolute w-full left-0 top-[calc(100%+3px)] z-[15] bg-white border rounded overflow-scroll overflow-x-hidden max-h-60'>
            <div className='p-2'>
                <input 
                className='focus:outline-none w-full border rounded border-zinc-200 p-3 focus:border-zinc-400' 
                placeholder='جستجو...' 
                type="text"
                value=""
                />
            </div>
            <ul className=''>
                <li className='block'>
                    <div onClick={clickHandler} className='py-3 px-2 flex border rounded m-1 bg-zinc-100'>
                        <span>{category[0]?.name}</span>
                        <MdKeyboardArrowDown className='w-5 h-5 text-zinc-500'/>
                    </div>
                    <ul className='bg-zinc-100 text-zinc-400 select-box-option block'>
                        {isOpen && category1.map((item,index) =>(
                           <li onClick={()=>setCategoryChoice(item)} key={index} className='px-6 py-3 text-black rounded m-1 border hover:bg-zinc-200 cursor-pointer select-box-option bg-white block'>
                           {item.name}
                           </li>   
                        ))}
                    </ul>
                </li> 
                <li className='block'>
                    <div onClick={clickHandler2} className='py-3 px-2 flex border rounded m-1 bg-zinc-100'>
                        <span>{category[1]?.name}</span>
                        <MdKeyboardArrowDown className='w-5 h-5 text-zinc-500'/>
                    </div>
                    <ul className='bg-zinc-100 text-zinc-400 select-box-option block'>
                        {isOpen2 && category2.map((item,index) =>(
                                <li onClick={()=>setCategoryChoice(item)} key={index} className='px-6 py-3 text-black rounded m-1 border hover:bg-zinc-200 cursor-pointer select-box-option bg-white block'>
                                    {item.name}
                                </li>
                        ))}
                    </ul>
                </li> 
                <li className='block'>
                    <div onClick={clickHandler3} className='py-3 px-2 flex border rounded m-1 bg-zinc-100'>
                        <span>{category[2]?.name}</span>
                        <MdKeyboardArrowDown className='w-5 h-5 text-zinc-500'/>
                    </div>
                    <ul className='bg-zinc-100 text-zinc-400 select-box-option block'>
                        {isOpen3 && category3.map((item,index) =>(
                                <li onClick={()=>setCategoryChoice(item)} key={index} className='px-6 py-3 text-black rounded m-1 border hover:bg-zinc-200 cursor-pointer select-box-option bg-white block'>
                                    {item.name}
                                </li>
                        ))}
                    </ul>
                </li> 
            </ul>
        </div>
    );
};

export default CategoryBox;
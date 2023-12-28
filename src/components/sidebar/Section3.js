import React from 'react';
import PN from "persian-number";


const Section3 = ({section3, allPrice}) => {

    const persianNumber = (num) =>{
        var number = PN.sliceNumber(num);
        number = PN.convertEnToPe(number);
        return number;
    }

    const setName = (key) => {
        if(key === "meter")
            return "قیمت هر متر"
        else if(key=== "price")
            return "قیمت کل"
    }

    const setValue=(value, key) =>{
        if(key==="price" && value===null)
            return "توافقی";
        else if (key==="price" && value!==0){
            return `${persianNumber(value)} تومان`;
        }
        else if(key==="meter"){
            const all = allPrice/value;
            return `${persianNumber(all)} تومان` ;
        }
    }

    return (
        <li className='grid grid-cols-2 items-center text-sm'>
                    <h3 className='px-3 py-2 font-sm flex items-center text-black whitespace-nowrap h-full bg-gray-50 text-right'>{setName(section3.key)}</h3>
                    <div className='px-3 py-2 font-sm text-left text-sm whitespace-nowrap'>
                        <span className='mr-1 text-lg text-gray-800 font-bold'>{setValue(section3.valueItem,section3.key)}</span>
                    </div>
        </li>
    );
};

export default Section3;
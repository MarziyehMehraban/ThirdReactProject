import React from 'react';
import PN from "persian-number";


const Section1 = ({section1}) => {

    const persianNumber = (num) =>{
        var number = PN.convertEnToPe(num);
        return number
    }
    

    return (
        <li className='flex gap-y-3 text-center items-center justify-center flex-col py-2'>
            <span className='font-medium'>{section1.value ? persianNumber(section1.value) : "نامشخص"}</span>
            <span className='text-sm text-zinc-500'>{section1.name}</span>
        </li>
    );
};

export default Section1;
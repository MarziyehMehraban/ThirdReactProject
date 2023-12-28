import React from 'react';
import CounsellorList from '../counsellor/CounsellorList';
import Section3 from './Section3';

const SideBar = ({section3, id}) => {
    // console.log(section3)
    // const peermeter =() =>{
    //     const permeter=0;
    //     if(section3 && section3[0] && section3[1] && section3[0].key==="price" && section3[0]?.valueItem !==0 && section3[1]?.key==="meter"){
    //      permeter=Math.ceil(section3[0].valueItem/section3[1].valueItem);
    //     }
    //     return permeter;
    // }

    const alllPrice = () => {
        let allPrice;
        if(section3 && section3[0] && section3[0].key=== "price")
            {
                allPrice = section3[0].valueItam;
                console.log(allPrice)
            }
        return allPrice;
    }
    // console.log(permeter)
    return (
        <aside className='col-span-10 lg:col-span-3 flex flex-col gap-y-1'>
            <span className='my-4 text-gray-600 text-lg'>
                <p>مشخصات فایل:
                    <span className='font-medium text-black mx-1'>{id}</span>
                </p>
            </span>
            <ul className='mb-2 border rounded-lg overflow-hidden'>
                {section3 && section3.map((item, index) => (
                    <Section3 key={index} section3={item} allPrice={()=>alllPrice()}/>
                ))}
            </ul>
            <CounsellorList />
        </aside>
    );
};

export default SideBar;
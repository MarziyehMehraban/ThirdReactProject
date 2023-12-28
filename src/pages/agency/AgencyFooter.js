import React from 'react';
import Counsellor from './Counsellor';
import { Link } from 'react-router-dom';
import {AiFillExclamationCircle} from 'react-icons/ai';

const AgencyFooter = ({agentList}) => {
    return (
        <main className='xl:px-11 lg:px-5 py-8 text-justify text-zinc-800 '>
            <p className='text-sm leading-loose'></p>
            <div className='mt-12'>
                <h2 className='text-center font-bold mb-4 '>
                    <span className='relative before:w-8 before:h-[0.09px] before:-left-10 before:top-1/2 before:-translate-y-1/2 before:bg-zinc-500 before:absolute after:w-8 after:h-[0.09px] after:-right-10 after:top-1/2 after:-translate-y-1/2 after:bg-zinc-500 after:absolute'>
                        لیست مشاورین
                    </span>
                </h2>
                <div className='grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-8'>
                    {agentList?.length>0 ?(agentList?.map((item, index) => (
                        <>
                            {item.countFile!==0 &&
                            <Counsellor
                               agentList={item}
                            />}
                        </>
                    ))):
                    <div className='flex p-4 mb-4 text-sm text-gray-800 rounded-lg bg-gray-50 col-span-6'>
                    <AiFillExclamationCircle />
                    <div  className='font-medium'>برای این املاک مشاوری وجود ندارد</div>
                </div>
                    }
                </div>
            </div>
        </main>
    );
};

export default AgencyFooter;
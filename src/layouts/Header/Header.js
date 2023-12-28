import React from 'react';
import HeaderL from './navLeft/HeaderL';
import HeaderR from './navRight/HeaderR';

const Header = ({getApi}) => {
    return (
        <div className='sticky top-0 bg-white shadow mb-4 z-40 text-right w-full gap-x-6 text-gray-500 '>
            <div className="flex relative items-center justify-between py-4 px-6">
                <HeaderR />
                <HeaderL getApi={getApi}/>
            </div>
        </div>
    );
};

export default Header;
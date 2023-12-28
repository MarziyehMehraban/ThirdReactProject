import React from 'react';

const MoreFileInfo = ({item}) => {
    return (
        <li className='py-2 flex items-center justify-between px-2'>
            <span className='text-sm text-zinc-500'>{item.name}</span>
            <span className='font-medium'>{item.value}</span>
        </li>
    );
};

export default MoreFileInfo;
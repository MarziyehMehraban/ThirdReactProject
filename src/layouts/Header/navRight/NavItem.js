import React from 'react';

const NavItem = ({content, href}) => {
    return (
        <li className='text-[0.92rem] font-bold '>
            <a href={href} className='hover:text-zinc-500'>{content}</a>
        </li>
    );
};

export default NavItem;
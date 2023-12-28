import NavItem from "./NavItem";
import Logo from '../../../assets/Images/logo.webp';
import { Link } from "react-router-dom";

import React from 'react';

const HeaderR = () => {
    return (
        <div className="flex grow items-center justify-start my-[20px]">
            <Link to="/:id" className="flex ">
                <div>
                    <img src={Logo} className="h-[32px] w-[28px] "></img>
                </div>
                <h2 className="font-bold text-2xl text-zinc-900 pr-[7px] pt-[2px]">سیراف</h2>
            </Link>
            <span className="block bg-gray-200 h-6 w-[1px] mx-2 lg:block"></span>
            <ul className="space-x-4 space-x-reverse text-zinc-900 hidden lg:inline-flex">
                <NavItem href="#" content="ثبت دفتر املاک" />
                <NavItem href="#" content="محاسبه کمیسیون" />
                <NavItem href="#" content="استعلامات ثبتی" />
                <NavItem href="#" content="بلاگ سیراف" />
                <NavItem href="#" content="درباره سیراف و قوانین استفاده" />
                <NavItem href="#" content="پشتیبانی" />
            </ul>
        </div>
    );
};

export default HeaderR;
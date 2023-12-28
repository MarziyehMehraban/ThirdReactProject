import React, { useState } from "react";

const City = ({name, tagHandler,id }) => {

    

    const clickHandler = () => {
        tagHandler(name, id)
    }

    return(
        <div>
            <li onClick={clickHandler} className='hover:bg-gray-200/50 hover:cursor-pointer text-sm font-medium py-2.5 px-8 '>
                {name} 
            </li>
        </div>
    )
}

export default City;
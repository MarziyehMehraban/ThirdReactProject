import React from "react";
import {AiOutlineClose} from "react-icons/ai"

const Tag = ({name,tagCloseHandler}) => {
    // console.log(id)
    return(
        <div className="inline-flex border border-zinc-200 items-center px-2 py-1 text-sm font-medium text-gray-800 bg-gray-100 rounded dark:bg-gray-700 dark:text-gray-300">
            <span>
                {name}
            </span>
            <button 
            onClick={()=>tagCloseHandler(name)}
             className="inline-flex items-center p-0.5 mr-2 text-sm text-gray-400 bg-transparent rounded-sm hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-gray-300">
                <AiOutlineClose  />
            </button>
        </div>
    )
}

export default Tag;
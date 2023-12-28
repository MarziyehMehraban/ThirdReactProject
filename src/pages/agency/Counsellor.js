import React from 'react';
import ReactStars from "react-rating-stars-component";


const Counsellor = ({agentList}) => {
    return (
        <div className='text-center relative'> 
            <div className='md:w-24 md:h-24 w-24 h-24 mx-auto md:border-4 object-cover bg-gray-300 group relative rounded-full overflow-hidden border-2 border-solid border-gray-200'>
                <img src={agentList.avatar} className='transition duration-200 transform group-hover:scale-110 w-full h-full' />   
            </div>
            <p className='my-1'>{agentList.name}</p>
            <div className='flex items-center justify-center'> 
            <ReactStars
                count={5}
                size={20}
                color="#dbdad6"
                value={agentList?.rate}
                activeColor="#ffd700"
                edit={false}
            />
            </div>
            <a className='absolute w-full h-full left-0 top-0' href="#"></a>
        </div>
    );
};

export default Counsellor;
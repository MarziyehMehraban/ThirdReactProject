import React from 'react';
import AgencySlider from '../../components/slider/AgencySlider';

const AgencyBody = ({agency}) => {
    return (
        <div>
            <div className='mb-4'>{agency.description}</div>
            {agency.video!== null && 
            <div className='h-80 w-full '>
                <video className='w-96 h-full pb-5 mx-auto' autoPlay loop controls>
                    <source src={agency?.video} />
                </video>
            </div>}
            <div className=' h-100 bg-white rounded overflow-hidden mb-5 border-b pb-2'>
                <AgencySlider main={agency}/>
            </div>
        </div>
    );
};

export default AgencyBody;
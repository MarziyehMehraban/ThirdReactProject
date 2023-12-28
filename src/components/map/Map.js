import React from 'react';

const Map = ({lat, long}) => {

    const address = "https://map.ir/iframe/lat/"+lat+"/lng/"+long+"/z/14/p/اینجاست"
    
    return (
        <div className='w-full relative bullet-custom h-96 max-h-96'>
            <div className='swiper swiper-initialized swiper-horizontal swiper-rtl rounded-md !w-full !h-full !pb-8 swiper-backface-hidden'>
            <iframe width="100%" height="600" src={address}></iframe>
            </div>
        </div>
    );
};

export default Map;
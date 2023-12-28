import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import noImage from "../../assets/Images/notImage.svg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 


const AgencySlider = ({main}) => {
   

    return (
        <div className='w-full relative bullet-custom h-[320px]'>
            <div className='swiper swiper-initialized swiper-rtl rounded-md swiper-backface-hidden bg-slate-300 justify-center'>
                
                <Swiper className='h-[320px]'
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y, Mousewheel, Virtual]}
                spaceBetween={50}
                navigation={true}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                virtual
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                 {main?.images && main?.images.map((item, index) =>(
                   <SwiperSlide key={index} >
                        <img className='pb-5 object-cover ' src={item.image} />
                    </SwiperSlide> 
                 ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AgencySlider;


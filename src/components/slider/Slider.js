import React,{ useState } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Mousewheel, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import noImage from "../../assets/Images/notImage.svg";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 


const Sliderr = ({main}) => {
   
    console.log(main.media)

    return (
        <div className='w-full relative bullet-custom h-[538px] cover'>
            <div className='swiper swiper-initialized swiper-rtl rounded-md  !pb-8 swiper-backface-hidden '>
                
                <Swiper className='h-[538px]'
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
                {main.Video.length===0&&main.Image.length===0&& <SwiperSlide><img className='w-full h-full object-cover' src={noImage} /></SwiperSlide>}
                 {main?.Video && main?.Video.map((item, index) =>(
                   <SwiperSlide key={index} >
                        <video className='h-[530px] w-full' controls>
                            <source src={item.path} />
                        </video>
                    </SwiperSlide> 
                 ))}
                 {main?.Image && main?.Image.map((item, index) =>(
                   <SwiperSlide key={index} >
                        <img className='w-full h-full object-cover' src={item.path} />
                    </SwiperSlide> 
                 ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Sliderr;


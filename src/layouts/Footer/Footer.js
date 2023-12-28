import React from 'react';
import Bazaar from '../../assets/Images/bazar.jpg';
import Apple from '../../assets/Images/apple.png';
import Senfi from '../../assets/Images/nezamSenfi.jpg';
import Samandehi from '../../assets/Images/samandehi.png';
import Enamad from '../../assets/Images/enamad.png';

const Footer = () => {
    return (
        <div className='bg-gray-100 border-t mt-5'>
            <div className="max-w-2xl mx-auto text-gray-800 py-2">
                <div className='text-center'>
                    <h3 className='my-3 text-3xl font-[300]'>دانلود اپلیکیشن سیراف</h3>
                    <div className='flex justify-center my-2'>
                        <a target='blank' className='flex items-center border rounded-lg px-4 py-2 w-52 mx-2' href='https://cafebazaar.ir/app/app.siraf'>
                            <img src={Bazaar} className='w-[32px] h-[40px]' alt='bazaar' loading='lazy'></img>
                            <div className='text-left mr-3'>
                                <p className='text-xs text-gray-700'>Download on</p>
                                <p className='text-sm md:text-base'>cafe bazaar</p>
                            </div>
                        </a>
                        <a target='blank' className='flex items-center border rounded-lg px-4 py-2 w-44 mx-2' href='#'>
                            <img src={Apple} className='w-[32px] h-[40px]' alt='apple' loading='lazy'></img>
                            <div className='text-left mr-3'>
                                <p className='text-xs text-gray-700'>Download on</p>
                                <p className='text-sm md:text-base'>Apple store</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-3'>
                    <a target='_blank' alt='نظام صنفی' href='https://markazi.irannsr.org/index.php?module=web_directory&wd_id=106924&ctp_id=1086&id=39041' >
                        <img src={Senfi} className='w-[96px] h-[96px] object-contain transparent' loading='lazy' />
                    </a>
                    <img loading='lazy' src={Samandehi} className='w-[96px] h-[96px] object-contain' alt='انجمن صنفی'/>
                    <a target='_blank' href='https://trustseal.enamad.ir/Error/ErrorReferrer'>
                        <img src={Enamad} alt='نظام صنفی' className='w-[96px] h-[96px] object-contain' />
                    </a>
                </div>
                <div className='mt-8 flex flex-col md:flex-row md:justify-between items-center text-[0.8rem] text-gray-700'>
                    <p className='order-2 md:order-1 mt-8 md:mt-0'>© کلیه حقوق متعلق به شرکت فکر بکر سیراف می باشد. </p>
                    <div className='order-1 md:order-2'>
                        <a className='px-2 border-l' href='/about'>درباره سیراف</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
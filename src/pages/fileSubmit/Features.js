import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { configData } from '../../config/api';
import Feature1 from './Feature1';
import { MdKeyboardArrowDown } from "react-icons/md";


//بیا تمام چیزایی که از کاربر میگیره در ویژگی ها در یک متغیری بریز که مانند آبجکت ذخیره شود و مقدار کی مورد نیاز در درون ای پی ای وجود دارد به  این صورت که مثلا میگوییم فلام مقدار برابر با 10 مثلا این متراز بود
//اگه بخوای استیت اینپوت بذاری باید برای همشون اینپوت داینامیک بذاری چون تعداد ویژگی ها هم تغییر میکند
//و باید مقداری که برای ای پی ای میفرستیم جیسون باشد
const Features = ({id, updateHandler}) => {

    const [featuresList, setFeaturesList] = useState([]);
    const [isMoreFeaturesOpen, setIsMoreFeaturesOpen] = useState(false);
    const [input, setInput] = useState("");
    // const [jsonSender, setJsonSender] = useState({});



    useEffect(() => {
        const verify_link = configData.Feature_API + id + "&type=insert" ;
        axios.get(verify_link)
            .then(response => {
                setFeaturesList(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });

    }, [id])

    //ویژگیها
    const feature1 = (featuresList && featuresList.filter(item => item.insert === 1));
    //امکانات
    const feature2 = (featuresList && featuresList.filter(item => item.insert === 2));
    //سایر ویژگیها
    const feature3 = (featuresList && featuresList.filter(item => item.insert === 3));
    //سایر امکانات
    const feature4 = (featuresList && featuresList.filter(item => item.insert === 4));

    // console.log(feature1);
    // console.log(feature2);
    // console.log(feature3);
    // console.log(feature4);
    const clickHandler = () => {
        setIsMoreFeaturesOpen(!isMoreFeaturesOpen)
    }
    //value==choice   
    // const updateHandler = (value, choice) => {
    //     if (jsonSender[value]) {
    //         setJsonSender({
    //             ...jsonSender,
    //             [value]: choice
    //         });
    //     } else {
    //         setJsonSender({
    //             ...jsonSender,
    //             [value]: choice
    //         })
    //     }
    // }

    // console.log(jsonSender)


    return (
        <div>
            {feature1.length>0 && 
                <div className='py-3'>
                    <div className='font-semibold'>
                        <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                        ویژگی ها
                    </div>
                    <ul>
                        {feature1?.map((item, index)=>(
                            <Feature1 updateHandler={updateHandler} key={index} item={item}/>
                        ))}
                    </ul>
                </div>
            }
            {feature2.length>0 && 
                <div className='py-3'>
                    <div className='font-semibold'>
                        <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                        امکانات
                    </div>
                    <ul>
                        {feature2?.map((item, index)=>(
                            <Feature1 updateHandler={updateHandler} key={index} item={item}/>
                        ))}
                    </ul>
                </div>
            }
            <div className='mt-8'>
            {isMoreFeaturesOpen &&<>
                <div onClick={clickHandler} className='w-full cursor-pointer  '>
                    <div className='flex items-center justify-between border-b'>
                        <p className='font-bold text-lg'>سایر امکانات و ویژگی ها </p>
                        <MdKeyboardArrowDown className='h-6 w-6' />
                    </div>
                </div>
                <div className='accordion-content'>
                    <div>
                        <div className='py-3'>
                            <div className='font-semibold'>
                                <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                                سایر ویژگی ها
                            </div>
                            <ul>
                                {feature3?.map((item, index)=>(
                                    <Feature1 updateHandler={updateHandler} key={index} item={item}/>
                                ))}
                            </ul>
                        </div>
                        <div className='py-3'>
                        <div className='font-semibold'>
                                <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                                سایر امکانات
                            </div>
                            <ul>
                                {feature4?.map((item, index)=>(
                                    <Feature1 updateHandler={updateHandler} key={index} item={item}/>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                </>}
            </div>
        </div>
    );
};

export default Features;
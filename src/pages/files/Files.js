import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { configData } from '../../config/api';
import SideBar from '../../components/sidebar/SideBar';
import MainFile from './MainFile';
import { useParams } from 'react-router-dom';
// import Slider from '../../components/slider/Slider';


const Files = () => {

    const { fileId } = useParams();
    const [mainData, setMainData] = useState([]);
    

    useEffect(() => {
        const verify_link = configData.BASE_URL + fileId;
        axios.get(verify_link)
            .then(response => {
                setMainData(response.data.data)
                // console.log(mainData)
            })
            .catch(error => {
                console.error(error);
            });

    }, [])


    // console.log(mainData)

    const section1 = (mainData.propertys && mainData.propertys.filter(item => item.section === 1));
    const section2 = (mainData.propertys && mainData.propertys.filter(item => item.section === 2));
    const section3 = (mainData.propertys && mainData.propertys.filter(item => item.section === 3));

    // if(section1.length >1){
        // section1.sort((a,b) => (a.weightSection-b.weightSection));
    // }

    console.log(section1)

    return (
        <div className='flex justify-center font-bold'>
            <div className='container max-w-6xl my-4'>
                <div className='grid grid-cols-10 gap-x-10'>
                    <SideBar section3={section3} id={mainData.id}/>
                    <MainFile section1={section1} section2={section2} description={mainData.description} main={mainData} />
                </div>
            </div>
        </div>
    );
};

export default Files;
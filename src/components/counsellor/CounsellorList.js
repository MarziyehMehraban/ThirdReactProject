import React, { useEffect, useState } from 'react';
import Counsellor from './Counsellor';
import { configData } from '../../config/api';
import axios from "axios";
import { useParams } from 'react-router-dom';


const CounsellorList = () => {

    const { fileId } = useParams();
    // const [counsellorList, setCounsellorList] = useState([]);
    const [counsellorList, setCounsellorList] = useState([]);

    useEffect(() => {
        const verify_link = configData.COUNSELLOR_URL + fileId;
        axios.get(verify_link)
            .then(response => {
                setCounsellorList(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
        }, [])
            // console.log(counsellorList)

    return (
        <div className='hidden lg:block'>
            <div className='rounded-lg border border-gray-200 overflow-hidden'>
                <div className='w-full bg-zinc-50 text-zinc-800 p-3 text-center'>لیست مشاوران</div>
                <div className='py-3 px-3'>
                    <ul className='divide-y divide-gray-200'>
                        {counsellorList.map((item,index) => (
                            <Counsellor key={index}
                                amlakName={item.estateName}
                                counsellorName={item.consultant_id.name}
                                phone={item.consultant_id.phone}
                                avatar={item.consultant_id.avatar}
                                rating={item.consultant_id.rate}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CounsellorList;
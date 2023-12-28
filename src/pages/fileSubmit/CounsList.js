import React, {useEffect, useState} from 'react';
import { configData } from '../../config/api';
import axios from 'axios';
import CounsellorBox from './CounsellorBox';


const CounsList = ({tagsHandler}) => {

    const [counSearch, setCounSearch] = useState('')
    const [counsellorList, setConsellorList] = useState([])

    const changeHandler = (event) =>{
        setCounSearch(event.target.value)
    }

    useEffect(() => {
        const verify_link = configData.COUNSELLOR_URL2;
        axios.get(verify_link)
            .then(response => {
                setConsellorList(response.data.data.estats)
            })
            .catch(error => {
                console.error(error);
            });
        }, [])
        

        // console.log(counsellorList)

        const filteredList= (counsellorList?.filter(item => item.name.includes(counSearch)));



    return (
        <div className='flex flex-col bg-white border rounded overflow-hidden absolute w-full left-0 top-[calc(100%+3px)] z-[15]'>
            <div className='p-2'>
                <input 
                className='focus:outline-none w-full border rounded border-zinc-200 p-3 focus:border-zinc-400'
                type='text'
                placeholder='جستجو...'
                value={counSearch}
                onChange={changeHandler}
                /> 
            </div>
            <ul className=' w-full  mx-auto transition-all duration-500 '>
                {filteredList?.map((item,index)=> (
                    <CounsellorBox 
                    key={index}
                    rate={item.rate}
                    name={item.name}
                    id={item.id}
                    managerName={item.managerName}
                    tagsHandler={tagsHandler}
                    />
                ))}
            </ul>
        </div>
    );
};

export default CounsList;
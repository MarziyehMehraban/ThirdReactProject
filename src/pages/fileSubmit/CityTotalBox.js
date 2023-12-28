import React, {useEffect, useState} from 'react';
import CityBox from './CityBox';
import { configData } from '../../config/api';
import axios from 'axios';

const CityTotalBox = ({setCityChoice}) => {

    const [search , setSearch] = useState('');
    const [cityFile, setCityFile] = useState([]);
    const [isCityOpen, setIsCityOpen] = useState(false);


    useEffect(() => {
        const verify_link = configData.City_API;
        axios.get(verify_link)
            .then(response => {
                setCityFile(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
        }, [])
    
        const tagHandler = (item) => {
            setCityChoice(item)
            // closeCity(false);
        }
    
        const changeHandler = (event) => {
            setSearch(event.target.value)
        }

    return (
        <div className='absolute w-full left-0 top-[calc(100%+3px)] z-[15] bg-white border rounded overflow-scroll overflow-x-hidden max-h-60'>
            <div className='p-2'>
                <input 
                className='focus:outline-none w-full border rounded border-zinc-200 p-3 focus:border-zinc-400'
                placeholder='جستجو...'
                type='text'
                value={search}
                onChange={changeHandler}
                ></input>
            </div>
            <ul className='bg-white w-full mx-auto transition-all duration-500'>
            {cityFile &&
                cityFile.map((item, index) => (
                    <CityBox
                    tagHandler={tagHandler} 
                    id={item.id} 
                    isCityOpen={isCityOpen} 
                    key={index} 
                    name={item.name} 
                    cities={item.county.filter(item => item.name.includes(search))}/> 
            ))}
            </ul>
        </div>
    );
};

export default CityTotalBox;
import React, {useState, useEffect, createContext } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
import { configData } from '../../config/api';
import {RiSearch2Line} from 'react-icons/ri';
import Province from './Province';
import Tag from './Tag';
import { useFlagAction } from '../FlagProvider';
// import MainItemList from '../../pages/main/MainItemList';


const CityModal = ({ visibleCi, onCloseCi , arrLength,getApi }) => {

    const [cityArr, setCityArr] = useState([])
    const [idArr, setIdArr] = useState([])
    // const [filteredCityArr, setfilteredCityArr] = useState([])
    // const [searchList, setSearchList] = useState([])
    const [isCityOpen, setIsCityOpen] = useState(false)
    const [tagArr, setTagArr] = useState([]);
    const [input, setInput] = useState("");
    // const [renderAgain, setRenderAgain] = useState(false);
    // const flag = useFlag();
    const dispatch = useFlagAction();
    // console.log(dispatch)
    useEffect(() => {
        axios.get(configData.City_API)
            .then(response => {
                // console.log(response.data.data)
                setCityArr(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }, [])

    // console.log(cityArr)

    // const cityArr2 = (cityArr.county.filter(item => item.name.includes(input)))


    
    let entryUrl ="?web=true&cityIds[]" ;
    if(idArr.length > 0){
        for (let i = 0 ; i < idArr.length -1 ; i++){
            entryUrl += `=${idArr[i]}&` + "cityIds[]"
        }
        entryUrl += `=${idArr[idArr.length-1]}&lastId=0&`
    }
    // console.log(entryUrl)
    
    let filterUrl ="files?cities[]" ;
    if(idArr.length > 0){
        for (let i = 0 ; i < idArr.length -1 ; i++){
            filterUrl += `=${idArr[i]}&` + "cities[]"
        }
        filterUrl += `=${idArr[idArr.length-1]}`
    }
   
    // console.log(filterUrl)


    const onCloseHandler = (e) =>{
        if(e.target.id === "container"){
            onCloseCi();
            setInput("")
        }
        else if(e.target.id === "close"){
            onCloseCi()
            // setTagArr([])
            // arrLength("0 شهر")
        }
        else if(e.target.id === "confirm"){
            onCloseCi();
            // MainItemList(entryUrl);
            // setRenderAgain(!renderAgain);
            // useFlagAction(!useFlag);
            dispatch({type:"change"});
            getApi(entryUrl, filterUrl);
            if(tagArr.length===1)
                arrLength(tagArr[0])
            else if(tagArr.length===0)
                arrLength("0 شهر")
            else
                arrLength(`${tagArr.length} شهر`)
        }
    };

    const tagHandler = (tagItem, id) => {
        if(!tagArr.includes(tagItem))
            setTagArr(prevItems => prevItems.concat(tagItem));
        if(!idArr.includes(id))
            setIdArr(prevItems => prevItems.concat(id));
    }


    const tagCloseHandler = (name) => {

        const index = tagArr.indexOf(name);
        if (index > -1) {
        idArr.splice(index, 1);
}

        if (index !== -1) {
            const updatedTags = [...tagArr];
            updatedTags.splice(index, 1);
            setTagArr(updatedTags);
        }
    }

    // console.log(idArr)
    // console.log(tagArr)

    
    const searchHandler = (event) => {
        setInput(event.target.value)
    }

    // tagArr = tagArr.county.name.filter((input) =>(
    //     input.includes(tagArr)
    // ));

    if (!visibleCi) return null;



    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div 
            id='container' 
            onClick={onCloseHandler} 
            className='relative w-full h-full false z-50 p-4'
            >
                <div className='max-w-xl mx-auto overflow-hidden bg-white rounded-lg shadow dark:bg-gray-70 relative top-1/2 -translate-y-1/2'>
                    <div className='px-5 pt-3 pb-2 relative border-b shadow-sm'>
                        <div className='my-2 relative group '>
                            <div className='realtive'>
                                <input value={input} onChange={searchHandler} className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200' placeholder='انتخاب شهر' />
                            </div>
                        </div>
                        <div className='flex items-center absolute left-8 top-7 '>
                            <button className='rounded-full group hover:bg-gray-100 p-1 '>
                                <RiSearch2Line />
                            </button>
                        </div>
                        <div className='flex items-center justify-start flex-wrap gap-2 py-2 pt-0'>
                            {tagArr && tagArr.map((item, index) => (
                                <Tag key={index} 
                                name={item} 
                                // id={item.id}
                                tagCloseHandler={tagCloseHandler}
                                />
                                // item
                            ))}
                        </div>
                    </div>
                    <div className='pt-0 max-h-[350px] overflow-y-auto scroll'>
                        <div>
                            {cityArr &&
                            // cityArr.filter(item => item.county.filter(item2=> item2.name.includes(input))) &&
                            cityArr.map((item, index) => (
                                <Province 
                                tagHandler={tagHandler} 
                                id={item.id} 
                                isCityOpen={isCityOpen} 
                                key={index} 
                                name={item.name} 
                                cities={item.county.filter(item => item.name.includes(input))}/> 
                            ))}
                        </div>
                    </div>
                    <div className='flex flex-row-reverse items-center justify-between p-2 md:p-4 space-x-2 rounded-b border mt-2'>
                        <Link to={`/${filterUrl}`}>
                            <button id="confirm" onClick={onCloseHandler} type='button' className='border text-xs whitespace-nowrap px-3.5 py-1.5 flex items-center justify-center rounded hover:shadow border-gray-300 opacity-50 !text-sm !px-10 bg-zinc-900 text-white'>
                                    <span>تایید</span>
                            </button>
                        </Link>
                        <button id="close" onClick={onCloseHandler} type='button' className='border text-xs whitespace-nowrap px-3.5 py-1.5 flex items-center justify-center rounded hover:shadow border-gray-300 hover:bg-zinc-100/80 !text-sm text-gray-500 text-zinc-500'>
                                <span>انصراف</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CityModal;
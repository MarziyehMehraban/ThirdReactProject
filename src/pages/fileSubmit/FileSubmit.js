import React, { useState, useEffect} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import CategoryBox from './CategoryBox';
import { configData } from '../../config/api';
import CityBox from './CityBox';
import axios from 'axios';
import CityTotalBox from './CityTotalBox';
import { FaPlus } from "react-icons/fa6";
import CounsList from './CounsList';
import { useDropzone } from 'react-dropzone';
import Features from './Features';
import Map from './Map';


const FileSubmit = () => {
    const [categoryChoice, setCategoryChoice ] = useState({name: 'انتخاب'});
    const [cityChoice, setCityChoice ] = useState({name: 'انتخاب'});
    const [cityBox, setCityBox ] = useState(false);
    const [categoryBox, setCategoryBox ] = useState(false);
    const [isCounsellorListOpen, setIsCounsellorListOpen ] = useState(false);
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [add, setAdd] = useState("");
    const [ownerName, setOwnerName] = useState("");
    const [ownerPhone, setOwnerPhone] = useState("");
    const [coordinatorName, setCoordinatorName] = useState("");
    const [coordinatorPhone, setCoordinatorPhone] = useState("");
    const [confidentialExp, setConfidentialExp] = useState("");
    const [jsonSender, setJsonSender] = useState({});
    const [position, setPosition] = useState(null);
    const [isMapOpen, setIsMapOpen] = useState(false);
    
    const [tagsList, setTagsList] = useState([]);
    const [tagsIdList, setTagsIdList] = useState([]);
    // const [mainJson, setMainJson] = useState({});
    
    const registerFile =() => {
        const verify_link = configData.Add_file ;
        axios.post(verify_link, {
            estateIdes: tagsIdList,
            category_id: categoryChoice.id,
            city_id: cityChoice.id,
            name: name,
            description: desc,
            ownerName:ownerName,
            ownerPhoneNumber: ownerPhone,
            visitName:coordinatorName,
            visitPhoneNumber: coordinatorPhone,
            securityDescription: confidentialExp,
            // loc: ,
            lat: 35,
            long: 51,
            fetcher:JSON.stringify(jsonSender) ,
            files: "(binary)" , 
            fileName:"b"
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            }


    const mapClickHandler = () => {
        setIsMapOpen(!isMapOpen)
    }

    const catClickHandler = () => {
        setCategoryBox(!categoryBox);
    }
    const cityClickHandler = () => {
        setCityBox(!cityBox);
    }
    // const closeCity = (n) => {
    //     setCityBox(n);
    // }
    const counsClickHandler = () => {
        setIsCounsellorListOpen(!isCounsellorListOpen);
    }

    const tagsHandler = (name,id) => {
        if (tagsList.includes(name)) {
            setTagsList(tagsList.filter(i => i !== name));
        } else {
            setTagsList([...tagsList, name]);
        }
        if (tagsIdList.includes(id)) {
            setTagsIdList(tagsIdList.filter(i => i !== id));
        } else {
            setTagsIdList([...tagsIdList, id]);
        }
    }

   

    const changeHandler1 = (e) => {
        const value = e.target.value;
        if (/^.{1,10}$/.test(value)) {
            setName(value);    
        } 
    }
    const changeHandler2 = (e) => {
        const value = e.target.value;
        if (/^.{1,40}$/.test(value)) {
            setDesc(value);    
        } 
    }
    const changeHandler3 = (e) => {
        const value = e.target.value;
        if (/^.{1,10}$/.test(value)) {
            setAdd(value);    
        } 
    }

    const updateHandler = (value, choice) => {
        if (jsonSender[value]) {
            setJsonSender({
                ...jsonSender,
                [value]: choice
            });
        } else {
            setJsonSender({
                ...jsonSender,
                [value]: choice
            })
        }
    }

    // console.log(categoryChoice)
    return (
        <div>
            <main className='max-w-xl mx-auto py-5 px-4'>
                <div className='text-xl font-bold py-5'>ثبت فایل</div>
                <div className='max-h-max'>
                    <div className='py-3'>
                        <div className='font-semibold'>
                            <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1 '></span>
                            مشخصات کلی
                        </div>
                        <ul>
                            <li className='flex flex-col justify-between gap-0'>
                                <div className='group w-full'>
                                    <span className='text-sm bg-white px-2 relative right-2 top-[10px] z-[1] text-zinc-500'>دسته بندی</span>
                                    <div className='select-box-button relative border w-full text-xs rounded '>
                                        <button onClick={catClickHandler} className='flex items-center justify-between p-2 min-w-[10rem] w-full' type='button'>
                                            <MdKeyboardArrowDown className='w-6 h-6 text-zinc-500' />
                                            <span className='font-bold'>{categoryChoice.name}</span>
                                            <div></div>                                        
                                        </button>
                                        {categoryBox && <CategoryBox setCategoryChoice={setCategoryChoice} />}
                                    </div>
                                </div>
                            </li>
                            <li className='flex flex-col justify-between gap-0'>
                                <div className='group w-full'>
                                    <span className='text-sm bg-white px-2 relative right-2 top-[10px] z-[1] text-zinc-500'>شهر</span>
                                    <div className='select-box-button relative border w-full text-xs rounded '>
                                        <button onClick={cityClickHandler} className='flex items-center justify-between p-2 min-w-[10rem] w-full' type='button'>
                                            <MdKeyboardArrowDown className='w-6 h-6 text-zinc-500' />
                                            <span className='font-bold'>{cityChoice.name}</span>
                                            <div></div>                                        
                                        </button>
                                        
                                        {cityBox && <CityTotalBox setCityChoice={setCityChoice}/>}
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className='my-2 relative group w-full'>
                                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="name">عنوان</label>
                                    <div className='relative'>
                                        <input 
                                        id="name"
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200' 
                                        placeholder='درعنوان فایل، به موارد مهمی مانند نوع ملک، متراژ و محله اشاره کنید.'
                                        onChange={changeHandler1}
                                        type='text'
                                        />
                                        {name && name.length===0 ? <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>مقدار فیلد نامعتبر است.</small>:
                                        name && name.length<10&& name.length>0&& <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>حداقل کاراکتر مجاز 10 است</small>}                                        
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' group w-full'>
                                    <label className='text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="textarea">توضیحات</label>
                                    <div className='relative'>
                                        <textarea 
                                        id="textarea"
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='درتوضیحات به جزییات و ویژگی های قایل توجه، دسترسی های محلی و موقعیت ملک اشاره کنید و از درج شماره تماس یا آدرس مستقیم در آن خودداری کنید.'
                                        rows={4}
                                        onChange={changeHandler2}
                                        ></textarea>
                                        {desc && desc.length===0 ? <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>مقدار فیلد نامعتبر است.</small>:
                                        desc && desc.length<40&& desc.length>0&& <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>حداقل کاراکتر مجاز 40 است</small>
                                        }     
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' group w-full'>
                                    <label className='text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="address">آدرس</label>
                                    <div className='relative'>
                                        <textarea 
                                        id="address"
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='مثلا خیابان امام کوچه شهید صدوقی و...'
                                        rows={4}
                                        onChange={changeHandler3}
                                        ></textarea>
                                        {add && add.length===0 ? <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>مقدار فیلد نامعتبر است.</small> :
                                        add && add.length<10 && add.length>0&& <small className='bg-rose-50 text-rose-500 rounded px-2 min-h-8'>حداقل کاراکتر مجاز 10 است</small>} 
                                    </div>
                                </div>
                            </li>
                            <li className='border-b'>
                                <button className=' w-full h-full py-3 cursor-pointer flex items-center justify-between' >
                                    <div className='flex justify-between items-center w-full'>
                                        <span>موقعیت بر روی نقشه</span>
                                        <span onClick={mapClickHandler} className='bg-gray-100 rounded text-xs py-1 px-2 font-medium text-gray-400 '>انتخاب کنید.</span>
                                    </div>
                                </button>
                                {/* {isMapOpen && <Map setPosition={setPosition} setIsMapOpen={setIsMapOpen} position={position}/>} */}
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' my-2 relative group w-full'>
                                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="ownername">نام مالک</label>
                                    <div className='relative'>
                                        <input 
                                        id="ownername"
                                        type='text'
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='نام مالک'
                                        value={ownerName}
                                        onChange={(e)=>setOwnerName(e.target.value)}
                                        />   
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' my-2 relative group w-full'>
                                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="ownername">شماره همراه مالک</label>
                                    <div className='relative'>
                                        <input 
                                        id="ownername"
                                        type='number'
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='شماره همراه مالک'
                                        value={ownerPhone}
                                        onChange={(e)=>setOwnerPhone(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' my-2 relative group w-full'>
                                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="ownername">نام هماهنگ کننده بازدید</label>
                                    <div className='relative'>
                                        <input 
                                        id="ownername"
                                        type='text'
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='نام هماهنگ کننده بازدید'
                                        value={coordinatorName}
                                        onChange={(e)=>setCoordinatorName(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </li>
                            <li className='flex justify-between items-center'>
                                <div className=' my-2 relative group w-full'>
                                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="ownername">شماره همراه هماهنگ کننده بازدید</label>
                                    <div className='relative'>
                                        <input 
                                        id="ownername"
                                        type='number'
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        placeholder='شماره همراه هماهنگ کننده بازدید'
                                        value={coordinatorPhone}
                                        onChange={(e)=>setCoordinatorPhone(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </li>
                            {categoryChoice.name!=='انتخاب'&&<Features updateHandler={updateHandler} id={categoryChoice.id}/>}
                        </ul>
                    </div>
                    <div className='py-3 border-t'>
                        <div className='font-semibold'>
                            <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                            آپلود فایل های تصویری
                            <button className='text-blue-600 text-xs mr-1'>(راهنما)</button>
                            <div className='text-gray-600 text-sm pt-1 font-light '>(عکس،نقشه،ویدیو و تورمجازی)</div>
                        </div>
                        <div className='grid grid-cols-5 gap-2 pt-5 w-full '>
                            <label className='border-dashed border-[3px] border-zinc-400 rounded-lg flex cursor-pointer w-24 h-24 hover:opacity-50 '>
                                <FaPlus className='fill-zinc-400 m-auto inline w-7 h-7' />
                            </label>
                            <ul className='flex flex-wrap gap-4 col-span-3 sm:col-span-4 mr-8 sm:mr-0'></ul>
                        </div>
                    </div>
                    <li className='flex justify-between items-center'>
                                <div className=' group w-full'>
                                    <label className='text-sm translate-x-4 relative top-3 z-[1] right-3 px-2 group-focus-within:font-bold  bg-white  text-zinc-500 group-focus-within:text-zinc-900' for="securityDescription">توضیحات محرمانه</label>
                                    <div className='relative'>
                                        <textarea 
                                        id="securityDescription"
                                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none   group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                                        rows={4}
                                        maxLength={40}
                                        value={confidentialExp}
                                        onChange={(e)=>setConfidentialExp(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </li>
                    <li className='flex justify-between py-3 border-b items-center'>
                        <div className='group w-full '>
                            <span className='text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500'>دفتر/دفاتر املاک ‌ (اختیاری)</span>
                            <div className='select-box-button relative border w-full text-xs rounded '>
                                <div>
                                    <button onClick={counsClickHandler} className='flex items-center justify-between p-2 min-w-[10rem] w-full'>
                                        <div className='flex items-center gap-2'>
                                            <div className='flex items-center gap-2'>
                                                {tagsList?.map((item,index)=>(
                                                    <span key={index} className='bg-neutral-200 px-2 py-1 rounded'>{item}</span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='flex items-center'>
                                            <MdKeyboardArrowDown className='h-[20px] w-[20px]'/>
                                        </div>
                                    </button>
                                    {isCounsellorListOpen && <CounsList tagsHandler={tagsHandler} />}
                                </div>
                            </div>
                        </div>
                    </li>
                    <div>
                        <button 
                        className='rounded px-4 py-2 my-2 transition-all duration-200 cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full undefined disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300'
                        onClick={registerFile}
                        >
                            ثبت نهایی
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FileSubmit;
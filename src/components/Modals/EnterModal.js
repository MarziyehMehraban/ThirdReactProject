import React, {useState} from 'react';
import { configData } from '../../config/api';
import axios from 'axios';
const EnterModal = ({ visibleEn, onCloseEn }) => {

    const [phone, setPhone] = useState("");
    const [verifyCode, setVerifyCode] = useState("");

    const [isChecked, setIsChecked] = useState(false);
    const [isCodeSent, setIsCodeSent] = useState(false)

    const inputHandler = (e) => {
        setPhone(e.target.value)
    }
    const inputHandler2 = (e) => {
        setVerifyCode(e.target.value)
    }

    const onCloseHandler = (e) =>{
        if(e.target.id === "container"){
            onCloseEn();
            setIsChecked(false);
            setPhone("");
        }
    };

    const verifyCodeHandler = () => {
        const verify_link = configData.VERIFY_CODE;
        axios.post(verify_link, {
            mobile: phone,
            type: 1
        })
        .then(function () {
            setIsCodeSent(true)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    const validateCode =() => {
        const verify_link = configData.GetToken;
        axios.post(verify_link, {
            code: verifyCode,
            mobile: phone
        })
        .then(function (response) {
            localStorage.setItem("userToken", response.data.token);
            console.log(response.data.token)
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    // console.log(phone)


    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    if (!visibleEn) return null;


    if(!isCodeSent){
    return (
        <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div 
            id='container' 
            onClick={onCloseHandler} 
            className='relative w-full h-full false z-50 p-4'
            >
                <div className='max-w-sm bg-white mx-auto -translate-y-1/2 relative top-1/2 rounded'>
                    <header className='px-4 py-2 text-center font-bold border-b mx-3'>ورود به حساب کاربری</header>
                    <section className='p-4'>
                        <h2 className='text-sm text-zinc-500 mb-4'>
                            <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                            لطفا شماره موبایل خود را وارد کنید
                        </h2>
                        <div className='my-2 relative group'>
                            <div className='relative'>
                                <input type='text' value={phone} onChange={inputHandler} className='border w-full placeholder:text-xs p-2 rounded focus:outline-none  text-center group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'/>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <a className='font-semibold text-blue-500'>قوانین و مقررات سیراف را میپذیرم</a>
                            <input checked={isChecked} onChange={handleCheckboxChange} type='checkbox' className='px-2 scale-150 mx-4'/>
                        </div>
                        <button 
                        disabled={!isChecked} 
                        className='rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full focus-visible:bg-zinc-500/80 focus-visible:outline-none disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300'
                        onClick={verifyCodeHandler}
                        >
                            <span>ارسال کد تایید</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>
    );
}
    
    if(isCodeSent) {
        return(
            <div className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm'>
            <div 
            id='container' 
            onClick={onCloseHandler} 
            className='relative w-full h-full false z-50 p-4'
            >
                <div className='max-w-sm bg-white mx-auto -translate-y-1/2 relative top-1/2 rounded'>
                    <header className='px-4 py-2 text-center font-bold border-b mx-3'>ورود به حساب کاربری</header>
                    <section className='p-4'>
                        <h2 className='text-sm text-zinc-500'>
                            <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                            کد ارسال شده به شماره 
                            {phone}
                            را ارسال کنید.
                            <button onClick={()=>setIsCodeSent(false)}>
                                <span className='text-[10px] text-blue-600'>
                                (ویرایش شماره)
                                </span>
                            </button>
                        </h2>
                        <h2 className='text-sm text-zinc-500'>
                            <span className='inline-flex bg-gray-500 w-1.5 h-1.5 rounded-full ml-1'></span>
                            <span>کد را دریافت نکردید؟</span>
                            <div className='flex items-center'>
                                <button onClick={verifyCodeHandler}>
                                    <span className='text-[10px] text-blue-600'>
                                    (درخواست مجدد کد)                                    
                                    </span>
                            </button>
                            </div>
                        </h2>
                        <div className='my-2 relative group'>
                            <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900'>کد دریافت شده</label>
                            <div className='relative'>
                                <input type='text' value={verifyCode} onChange={inputHandler2} className='border w-full placeholder:text-xs p-2 rounded focus:outline-none  text-center group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'/>
                            </div>
                        </div>
                        <button 
                        className='rounded px-4 py-2 my-2 transition-all duration-200  cursor-pointer bg-zinc-500 text-white hover:bg-zinc-600 w-full focus-visible:bg-zinc-500/80 focus-visible:outline-none disabled:bg-zinc-300 disabled:cursor-auto disabled :hover:bg-zinc-300'
                        onClick={validateCode}
                        >
                            <span>ورود به حساب کاربری</span>
                        </button>
                    </section>
                </div>
            </div>
        </div>
        )
    }
    
};

export default EnterModal;
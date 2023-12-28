import React,{useState,useEffect} from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";


const Feature1 = ({item, updateHandler}) => {
    const [choice, setChoice] = useState();
    const [choiceList, setChoiceList] = useState('انتخاب');
    const [isOpen, setIsOpen] = useState(false);

    // useEffect(() => {
    //     handleInputChange(),
    //     handleListChange()
    // }, [choice, choiceList])

    const handleInputChange = (e) => {
        if(item.value==="meter"|| item.value==="price"){
            const inputNumber = parseInt(e.target.value);
            if (isNaN(inputNumber)) {
            setChoice(0);
            } else {
            setChoice(inputNumber);
            updateHandler(item.value, choice)
            }
        }else{
            setChoice(e.target.value)
            updateHandler(item.value, choice)
        }
    }
    const handleListChange = (Lvalue, name) => {
        setChoiceList(name)
        updateHandler(item.value, Lvalue)
    }

    // console.log(choice)
    // console.log(choiceList)

    return (
        <>
        {item.type === "Number" 
        ?
            <li className='flex justify-between items-center'>
                <div className='my-2 relative group w-full'>
                    <label className='text-sm translate-x-4 z-[1] relative top-3 right-3 px-2  group-focus-within:font-bold bg-white  text-zinc-500 group-focus-within:text-zinc-900'>{item.name}</label>
                    <div className='relative'>
                        <input 
                        className='border w-full placeholder:text-xs p-2 rounded focus:outline-none group-focus-within:border-zinc-500 group-focus-within:shadow group-focus-within:shadow-zinc-200'
                        placeholder={item.name}
                        type='text'
                        value={choice}
                        onChange={(e)=>handleInputChange(e)}
                        />
                    </div>
                </div>
            </li>
        :
            <li className='flex flex-col justify-between'>
                <div className='group w-full '>
                    <span className='text-sm bg-white px-2 relative right-2 top-[10px] z-[1]  text-zinc-500'>{item.name}</span>
                    <div className='select-box-button relative border w-full text-xs rounded '>
                        <div>
                            <button onClick={()=>setIsOpen(!isOpen)} className='flex items-center justify-between p-2 min-w-[10rem] w-full'>
                                <span>{choiceList}</span>
                                <div className='flex items-center'>
                                    <MdKeyboardArrowDown className='h-[20px] w-[20px] feather feather-chevron-down text-[#71717a]' />
                                </div>
                            </button>
                            {isOpen && 
                                <div>
                                    <div className='flex absolute w-full left-0 top-[calc(100%+3px)] z-[15]'>
                                        <ul className='bg-white w-full border rounded mx-auto transition-all duration-500 overflow-hidden divide-y'>
                                            {item.Items &&
                                                item.Items.map((i, index)=>(
                                                    <li 
                                                    className='px-2 py-3 hover:bg-zinc-100 cursor-pointer select-box-option bg-zinc-100 '
                                                    key={index}
                                                    onClick={()=>handleListChange(i.value,i.name)}
                                                    >
                                                        {i.name}
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </li>
        }
        </>
    );
};

export default Feature1;
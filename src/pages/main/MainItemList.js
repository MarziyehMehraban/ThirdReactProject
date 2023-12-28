import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ItemBox from '../../components/item/ItemBox';
import { configData } from '../../config/api';
import { useFlag } from '../../components/FlagProvider';
import Loading from '../../components/Loading';

const MainItemList = ({apii}) => {
    const flag = useFlag();
    const [dataList, setDataList] = useState(null);
    const [loadingFlag, setLoadingFlag] = useState(true);
    const [notFound, setNotFound] = useState(false);
    // const inputValue = "?web=true&cityIds[]=39&lastId=0&"

    console.log(apii);
    
    useEffect(() => {
        setLoadingFlag(true)
        const verify_link = configData.Main_API + apii;
        axios.get(verify_link)
            .then(response => {
                // if (response){
                    // setDataList(null);
                    setDataList(response.data.data.files);
                    setLoadingFlag(false)
                // }
                // else{
                //     setLoadingFlag(false);
                //     setNotFound(true);
                // }
            })
            // .then(
            // )
            .catch(error => {
                console.error(error);
                setLoadingFlag(false);
                setNotFound(true);
            });
        }, [apii])

        if (dataList===null || loadingFlag){
            return <Loading />
        }
        // console.log(dataList)

    return (
        <>
        {dataList?.length>0 ?
        (<div>
            <main className='flex justify-center'>
                <div className='container max-w-6xl my-6'>
                    <div className='grid grid-cols-1 gap-3 will-change-scroll md:grid-cols-2 xl:grid-cols-3'>
                        {dataList.map((item, index) => (
                            <Link to={`/files/${item.id}`} key={index}>
                                <ItemBox
                                    fullcategory={item.category.fullCategory}
                                    name={item.name}
                                    properties={item.propertys}
                                    publishedAgo={item.publishedAgo}
                                    cityName={item.city.name}
                                    images={item.images}
                                    totalPrice={item.propertys[0].value}
                                />
                            </Link>
                            // <p>{item.category.fullCategory}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>)
        : (<p>فایل یافت نشد.</p>)
    }
        {/* {(dataList&& dataList.length===0 && loadingFlag===false)&& <Loading />}
        {dataList && dataList.length>0 &&
            (<div>
                <main className='flex justify-center'>
                    <div className='container max-w-6xl my-6'>
                        <div className='grid grid-cols-1 gap-3 will-change-scroll md:grid-cols-2 xl:grid-cols-3'>
                            {dataList.map((item, index) => (
                                <Link to={`/files/${item.id}`} key={index}>
                                    <ItemBox
                                        fullcategory={item.category.fullCategory}
                                        name={item.name}
                                        properties={item.propertys}
                                        publishedAgo={item.publishedAgo}
                                        cityName={item.city.name}
                                        images={item.images}
                                        totalPrice={item.propertys[0].value}
                                    />
                                </Link>
                                // <p>{item.category.fullCategory}</p>
                            ))}
                        </div>
                    </div>
                </main>
            </div>)
        }
        {dataList && dataList.length===0 && (<p>فایلی یافت نشد</p>)} */}
        {/* {
        
        (dataList && dataList.length>0) ?
        (<div>
            <main className='flex justify-center'>
                <div className='container max-w-6xl my-6'>
                    <div className='grid grid-cols-1 gap-3 will-change-scroll md:grid-cols-2 xl:grid-cols-3'>
                        {dataList.map((item, index) => (
                            <Link to={`/files/${item.id}`} key={index}>
                                <ItemBox
                                    fullcategory={item.category.fullCategory}
                                    name={item.name}
                                    properties={item.propertys}
                                    publishedAgo={item.publishedAgo}
                                    cityName={item.city.name}
                                    images={item.images}
                                    totalPrice={item.propertys[0].value}
                                />
                            </Link>
                            // <p>{item.category.fullCategory}</p>
                        ))}
                    </div>
                </div>
            </main>
        </div>)
        : (dataList&& dataList.length===0 && loadingFlag===true) ?(<Loading />)
        : (dataList&& dataList.length===0 && loadingFlag===false) &&("فایلی یافت نشد")
        // : (loadingFlag===false &&<Loading />)
    } */}
    {/* {(dataList===null && loadingFlag===false && dataList.length===0) ?   <Loading />:"فایلی یافت نشد"}
    {(<Loading />)} */}
    </>
    );
    
};

export default MainItemList;
import React,{ useEffect , useState } from 'react';
import AgencyHeader from './AgencyHeader';
import AgencyBody from './AgencyBody';
import AgencyFooter from './AgencyFooter';
import { configData } from '../../config/api';
import axios from 'axios';
import AgencyMenu from './AgencyMenu';
import { useParams } from 'react-router-dom';


const Agency = () => {
    const { Id } = useParams();
    const [agencyData, setAgencyData] = useState();

    useEffect(() => {
        const verify_link = configData.counselorList + Id ;
        axios.get(verify_link)
            .then(response => {
                setAgencyData(response.data.data)
                console.log(agencyData.guildCode);
            })
            .catch(error => {
                console.error(error);
            });
        }, [])



    return (
        <>
            {agencyData &&
                <div className='container mx-auto max-w-6xl rounded-lg p-5 border mb-4'>
                <header>
                    <div className='xl:px-11 lg:px-5 relative z-20'>
                        <AgencyHeader agency={agencyData}/>
                        <AgencyBody  agency={agencyData}/>
                    </div>
                </header>
                    <AgencyMenu />
                    <AgencyFooter agentList={agencyData.consultants} />
            </div>}
        </>
    );
};

export default Agency;
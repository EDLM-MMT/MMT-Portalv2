import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import EsoCounselingDashboardTable from '@/components/Tables/EsoCounselingDashboardTable'


export default function CareerCounseling({}) {
    
    const [careerList, setCareerList] = useState([])

    useEffect(() => {
        axios
          .get(`/api/eso/careerCounselingTable`)
          .then((res) => {
            setCareerList(res.data.counseling);
          })
          .catch((err) => {
          });
    }, []);

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Counseling Dashboard
                    </div> 
                </h1>
                <EsoCounselingDashboardTable careerArray={careerList}/>
            </div>
        </DefaultLayout>
    );
}

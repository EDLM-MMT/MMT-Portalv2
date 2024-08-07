import DefaultLayout from "@/components/layouts/DefaultLayout";
import CounselingTable from '@/components/tables/CounselingDashboardTable';
import { useState, useEffect } from 'react';
import axios from 'axios';
import useStore from '@/store/store';




export default function CareerCounselingList() {

    const [careerList, setCareerList] = useState([])
    const user = useStore((state) => state.userData);


    useEffect(() => {
        axios
          .get(`/api/careerCounseling`)
          .then((res) => {
            let data = res.data.counseling
            for(let x in data){
                //console.log("x: ", data[x])
              if(data[x].personid === user?.learner.personnel.person.personid ){
                const newCareer = data[x];
                setCareerList(careerList =>[...careerList, newCareer]);
              }
            }
          })
          .catch((err) => {
          });

    }, []);

    // console.log("user career list:", userCareerList);
    // console.log("user:", user)


    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4 mb-8 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Counseling Dashboard
                    </div> 
                </h1>
                <p className="border-b-none">
                    Welcome to Counseling! Below is a list of majors at schools you can add and remove from. You can contact an ESO for further questions for each option listed below by clicking "Go to Counseling".
                
                </p>
                <div className="mt-2">
                    <b>Disclaimer:</b> Counseling Plans are tentative and require further confirmation from the Academic Institute. These are only for planning purposes. "Hours Still Needed" is an <b><u>estimated</u></b> value based on courses completed on your transcript. Please contact ESO if further clarification is needed.  
                </div>  
                <CounselingTable careerList={careerList}/>


            </div>
        </DefaultLayout>
    );
}
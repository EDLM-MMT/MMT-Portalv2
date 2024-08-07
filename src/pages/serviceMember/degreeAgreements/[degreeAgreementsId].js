import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import useStore from '@/store/store';
import DegAgreementsViewCard from '@/components/cards/DegAgreementsViewCard';
import Table from '@/components/tables/Table';

export function getServerSideProps(context) {
    const { degreeAgreementsId } = context.query;
    return {
      props: {
        degreeAgreementsId,
      },
    };
  }

export default function DegreeAgreementsView({degreeAgreementsId}) {

    const userData = useStore((state) => state.userData);
    const [degreeAgreement, setDegreeAgreement] = useState([]);

    const router = useRouter();


    useEffect(() => {
        axios
          .get(`/api/degreeAgreements/${degreeAgreementsId}`)
          .then((res) => {
            setDegreeAgreement(res.data);
          })
          .catch((err) => {
          });
    }, []);

    const handleClick = () => {
        router.push("/serviceMember/degreeAgreements");
    }

    const data = [
        ["MAC 1105", "Intro to Algebra", 3, "In Progress", "Spring 2023"],
        ["COP 1000", "Intro to Programing", 3, "In Progress", "Spring 2023"],
        ["SOC 1101", "Sociology", 4, "Enrolled", "Summer 2023"],
        ["SPC 1608", "Fundamentals to Speech", 3, "Not Yet Started", ""],
        ["CHM 1101", "Intro to Chemistry", 3, "Completed", "Fall 2022"],

    ]

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    {degreeAgreement.title}
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              My Degree Agreements </button> -{`>`} {degreeAgreement.title}
            </div>
            <div className=' flex-col flex h-18 justify-center w-full gap-5 pb-2 mt-4'>
                <DegAgreementsViewCard key={degreeAgreement.id} degreeAgreement={degreeAgreement}/>                   
            </div>

            <div className='bg-white w-full border h-50 mt-6 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b h-10'>
                Course Plan
            </h1>
            <Table columnTitles={["Course Number", "Course Name", "Credit Hours", "Status", "Semester"]}
                 rowsData={data}/>   
            </div>     
        </div>

        

        </DefaultLayout>
    );
}
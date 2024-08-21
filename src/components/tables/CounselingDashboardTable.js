import { useRouter } from "next/router"
import DeletePopup from '@/components/overlays/DeletePopup'
import { useState, useEffect } from 'react';
import axios from 'axios'


export default function CounselingDashboardTable({careerList}) {

    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [degree, setDegree] = useState([]);

    console.log(isOpen);

    useEffect(() => {
        setDegree(careerList)
    }, [careerList]);

    const handleCareerCounseling = (event) =>{
        router.push(`/serviceMember/counseling/${event}`); 
    }

    const handleDelete = (degreeIndex, careerIndex, e) =>{
        console.log("delete row")
        console.log("degree Index: ", degreeIndex)
        axios.delete(`/api/careerCounseling/${careerIndex}`)
        .then((response) =>{
            console.log(response.status, response.data);
        });
        setDegree(degree.filter((degree,i) => i !== degreeIndex));
        setIsOpen(true)
        console.log(degree)
    }

    return(
        <div className='mt-8'>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                            >
                                Major
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                School
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Required Hours
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Hours Still Needed
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Counseling
                            </th>     
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Delete
                            </th>                            
                    </tr>
                </thead>
                {degree.map((career, index) => ( 
                            <tr key={career.id || index} className=' even:bg-gray-50 group'>
                                {}
                                <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{career.degree}</td>
                                <td className='pl-2'>{career.school}</td>
                                <td className='pl-14'>{career.total_creditHours}</td>
                                <td className='pl-16'>{career.total_creditHours - career.creditHours_completed}</td>
                                <td><button onClick={() => handleCareerCounseling(career.id)} className="text-dod-500 pl-2">Go To Counseling</button></td>
                                <td><button data-testid={"delete-button"} onClick={(e) => handleDelete(index,career.id,e)} className="text-dod-700 pl-2">Delete</button></td>
                            </tr>
                ))}
            </table>
            {}
            {}
        </div>

    )
}
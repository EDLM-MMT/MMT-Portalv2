import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import Sort from '@/components/Sort';

export default function CounselingTable(careerArray) {

    const router = useRouter();
    const [searchInput, setSearchInput] = useState("");
    const [data, setData] = useState(careerArray.careerArray);


    useEffect(()=> {
        setData(careerArray.careerArray);
    },[careerArray]) 
    
    const handleView = (e) =>{
        router.push("/eso/counseling/transcript");
    }

    const handleCareerClick = (e) =>{
        router.push(`/eso/counseling/${e}`);
    }

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    return(
        <div>
            <div className='flex align-middle justify-between'>
                <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search Service Member Name" onChange={handleChange} value={searchInput} />
                <div className='flex flex-row align-middle'>
                    <Sort options={["Most Recent", "Name"]} data={data} setModifiedData={setData}/>
                </div>
            </div>

            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-4 py-2
                                 text-left font-semibold text-gray-900 backdrop-blur
                                  backdrop-filter sm:table-cell'
                           >
                                Name
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-4 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                MOS Code
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-0 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Counseling
                            </th> 
                            <th scope='col'
                                className='text-lg sticky top-0 z-10 hidden border-b
                                    border-gray-300 bg-gray-50 bg-opacity-75 pl-0 py-2
                                    text-left font-semibold text-gray-900 backdrop-blur
                                    backdrop-filter sm:table-cell'
                            >
                                Unofficial Transcript
                            </th>                          
                    </tr>
                </thead>
                {
                    data?.filter(post => {
                        if (searchInput === ''){
                            return post;
                        } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        } else if(post.mos_code.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }

                    }).map((student, index) => (
                        <tr key={student.id || index} className=' even:bg-gray-50 group'>
                            <td className='pl-4 p-2 text-left'>{student.name}</td>
                            <td className='pl-10'>{student.mos_code}</td>
                            {(student.career_counseling.map((career) => (
                                <tr key={career.id} className='pl-4 text-dod-700 font-medium'><button onClick={() => handleCareerClick(career.id)}>{career.major}</button></tr>
                            )))}
                            <td className='pl-16 text-dod-700 font-medium'><button onClick={handleView}>View</button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
} 
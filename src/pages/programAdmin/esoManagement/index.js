import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState } from 'react';
import modifiedData from "../../../data/programAdmin/esoManagement.json";
import { useRouter } from 'next/router';
import Sort from '@/components/Sort';

export default function ESOManagement() {
    const [searchInput, setSearchInput] = useState("");
    const [modifyData, setModifyData] = useState(modifiedData);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };
    
    const router = useRouter();

    const handleView = (e) =>{
        router.push(`/programAdmin/esoManagement/${e}`);
    }

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pt-2 pb-4 border-b mb-8 text-3xl font-semibold'>ESO Management</h1>
            <div className='flex align-middle justify-between'>
                <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search by ESO Name" onChange={handleChange} value={searchInput} />
                <div className='flex flex-row align-middle'>
                    <Sort options={["Most Recent", "Name", "Branch"]} data={modifyData} setModifiedData={setModifyData}/>
                </div>
            </div>

            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                        <th scope='col' className='text-lg sticky top-0 z-10 hidden border-b border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2 text-left font-semibold text-gray-900 backdrop-blur backdrop-filter sm:table-cell'>
                            ESO Name
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Permissions
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Branch
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Workload (# of Tasks)
                        </th>
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            View Profile
                        </th>                             
                    </tr>
                </thead>

                {
                    modifyData.filter(post => {
                        return (
                            searchInput === '' ||
                            post.name.toLowerCase().includes(searchInput.toLowerCase())
                        );
                    }).map((post, index) => (
                        <tr key={post.id || index} className=' even:bg-gray-50 group'>
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{post.name}</td>
                            <td className='pl-2'>{post.permissions}</td>
                            <td className='pl-2'>{post.branch}</td>
                            <td className='pl-24'>{post.workload}</td>
                            <td className='pl-5'><button onClick={() => handleView(post.id)} className="text-dod-700 ml-5">{post.viewProfile} </button></td>
                        </tr>
                    ))
                }
            </table>
        </div>
        </DefaultLayout>
    );
}
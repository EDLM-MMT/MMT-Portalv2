import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useEffect, useState } from 'react';
import modifiedData from "../../../data/programAdmin/accountsManagement.json";
import { useRouter } from 'next/router';
import GeneralPurposeOverlay from '@/components/overlays/GeneralPurposeOverlay';
import Sort from '@/components/Sort';

export default function AccountsManagement() {
    const [searchInput, setSearchInput] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [modifyData, setModifyData] = useState(modifiedData);
    const router = useRouter();

    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleView = (e) =>{
        router.push(`/programAdmin/accountsManagement/${e}`);
    }

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pt-2 pb-4 border-b mb-8 text-3xl font-semibold'>Accounts Management</h1>
            <div className='flex align-middle justify-between'>
                <input type="text" className=" w-1/2 mb-6 pl-4  bg-gray-50 border border-gray-300 text-gray-900 text-mid rounded-xl p-2" placeholder="Search here by name or username " onChange={handleChange} value={searchInput} />
                <div className='flex flex-row align-middle'>
                    <Sort options={["Most Recent", "Name", "Role"]} data={modifyData} setModifiedData={setModifyData}/>
                </div>
            </div>
            <table className='w-full border-separate border' style={{ borderSpacing: 0 }}>
                <thead className='bg-gray-50 '>
                    <tr>
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                            border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Name
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Username
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Role
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-2 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            Status
                        </th> 
                        <th scope='col'
                            className='text-lg sticky top-0 z-10 hidden border-b
                                border-gray-300 bg-gray-50 bg-opacity-75 pl-14 py-2
                                text-left font-semibold text-gray-900 backdrop-blur
                                backdrop-filter sm:table-cell'
                        >
                            View Profile
                        </th>                             
                    </tr>
                </thead>
                {
                    modifyData?.filter(post => {
                        if (searchInput === ''){
                            return post;
                        } else if(post.name.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }else if(post.username.toLowerCase().includes(searchInput.toLowerCase())){
                            return post;
                        }
                    }).map((post, index) => (
                        <tr key={index} className=' even:bg-gray-50 group'>
                            {/* {setData(post)} */}
                            <td className='whitespace-nowrap text-sm font-medium text-gray-900 pl-2 py-2'>{post.name}</td>
                            <td className='pl-2'>{post.username}</td>
                            <td className='pl-2'>{post.role}</td>
                            <td className='pl-2'>{post.status}</td>
                            <td className='pl-10'><button onClick={()=> {handleView(post.id)}} className="text-dod-700 ml-10">{post.viewHistory} </button></td>
                        </tr>
                    ))
                }
            </table>
            {/* {isOpen && <GeneralPurposeOverlay toggleModal={setIsOpen} path={"/programAdmin/accountSupport"}
                title={"Reset Password Confirmation"} message={"Upon clicking Confirm, a reset password email will be sent to the associated account."}/>} */}
        </div>
        </DefaultLayout>
    );
}
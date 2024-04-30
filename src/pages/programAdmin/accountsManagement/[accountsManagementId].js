import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/router"
import Table from '@/components/tables/Table';
import ProgramAdminViewCard from '@/components/cards/ProgAdminViewCard';
import useStore from '@/store/store';

export function getServerSideProps(context) {
    const { accountsManagementId } = context.query;
    return {
      props: {
        accountsManagementId,
      },
    };
  }

export default function AccountManagementView({accountsManagementId}) {

    const [accountData, setAccountData] = useState([]);
    const router = useRouter();
    const userData = useStore((state) => state.userData);

    const data = [
        ["01/22/2023 15:14 PM", 3, 1, 1, 2, 1],
        ["01/21/2023 14:32 PM", 2, "", 2, 1, 3],
        ["01/20/2023 12:18 PM", 3, 1, 1, 4, 2],
        ["01/20/2023 09:14 AM", "", 2, 2, 1, ""],
        ["01/19/2023 15:14 PM", 3, 1, "", 2, 1],
        ["01/18/2023 15:14 PM", 2, 1, 2, "", ""],

    ]

    useEffect(() => {
        axios
          .get(`/api/programAdmin/accountsManagement/${accountsManagementId}`)
          .then((res) => {
            setAccountData(res.data);
        })
          .catch((err) => {
            console.log(err);
          });
    }, []);

    const handleClick = () => {
        router.push("/programAdmin/accountsManagement");
    }

    return (
      <DefaultLayout>
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'> 
            <h1 className='pb-4 border-b mt-4 mb-4 text-3xl font-semibold'>
                <div className='flex flex-row justify-between'>  
                    {accountData.name}
                </div> 
            </h1>
            <div>
              <button onClick={handleClick}
              className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer mb-4 transition-all duration-150 ease-in-out'>                    
              Account Management</button> -{`>`} {accountData.name}
            </div>
            <div className="mb-8">
                <ProgramAdminViewCard userData={userData} account={accountData} routePath={accountsManagementId}/>
            </div>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Login History</h1>
                <Table columnTitles={["Date/Time", "Trascripts", "Inquiries", "Degree Agreements", "Degree Pathways", "Counseling"]} rowsData={data}/>
            </div>
            
        </div>
      </DefaultLayout>
    );
}

import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/tables/Table';
import useStore from '@/store/store';


export default function LoginActivity() {
    const user = useStore((state) => state.userData);

    const dataServiceMember = [
        ["1/24/2023 2:43:20 PM", 1, 3, 1, 1, 2, 2],
        ["1/21/2023 3:43:20 PM", 3, 2, "", 2, 1, 1],
        ["1/20/2023 2:53:20 PM", 1, 3, 1, 1, 4, ""],
        ["1/20/2023 7:43:20 PM", 3, "", 2, 2, 1, ""],
        ["1/19/2023 9:45:20 PM", 1, 3, 1, "", 2, 3],
        ["1/18/2023 2:30:20 PM", "", 2, 1, 2, "", 2],

    ]
    const dataProgramAdmin = [
        ["1/24/2023 2:43:20 PM", 2, 1, 3, 1],
        ["1/21/2023 3:43:20 PM", 3, 1, 2, ""],
        ["1/20/2023 2:53:20 PM", 1, 1, 3, 1],
        ["1/20/2023 7:43:20 PM", "", 3, "", 2],
        ["1/19/2023 9:45:20 PM", 1, 3, 3, 1],
        ["1/18/2023 2:30:20 PM", "", 1, 2, 1],

    ]
    const dataESO = [
        ["1/24/2023 2:43:20 PM", 1, 3, 1, 1],
        ["1/21/2023 3:43:20 PM", 3, 2, "", 2],
        ["1/20/2023 2:53:20 PM", 1, 3, 1, 1],
        ["1/20/2023 7:43:20 PM", 3, "", 2, 2],
        ["1/19/2023 9:45:20 PM", 1, 3, 1, ""],
        ["1/18/2023 2:30:20 PM", "", 2, 1, 2],

    ]

    const dataExecStak = [
        ["1/24/2023 2:43:20 PM", 1, 3, 1],
        ["1/21/2023 3:43:20 PM", 3, 2, ""],
        ["1/20/2023 2:53:20 PM", 1, 3, 1],
        ["1/20/2023 7:43:20 PM", 3, "", 2],
        ["1/19/2023 9:45:20 PM", 1, 3, 1],
        ["1/18/2023 2:30:20 PM", "", 2, 1],

    ]

    return (
        <DefaultLayout >
        <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
            <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Login Activity</h1>

            <div>
                {user?.role === "Service Member" &&
                    <Table columnTitles={["Login Date/Time", "Transcripts", "Inquiries", "Degree Agreements", "Degree Pathways", "Counseling", "Quick Links"]} rowsData={dataServiceMember}/>            
                }
            </div>
            <div>
                {user?.role === "Program Administrator" &&
                    <Table columnTitles={["Login Date/Time", "Inquiries", "Accounts Management", "ESO Management", "Quick Links"]} rowsData={dataProgramAdmin}/>            
                }
            </div>
            <div>
                {user?.role === "ESO" &&
                    <Table columnTitles={["Login Date/Time", "ESO Inquiries", "Degree Pathways Catalog", "Counseling", "Quick Links"]} rowsData={dataESO}/>            
                }
            </div>

            <div>
                {user?.role === "Executive Stakeholder" &&
                    <Table columnTitles={["Login Date/Time", "Enrollment Statistics", "Personnel by Branch", "Quick Links"]} rowsData={dataExecStak}/>            
                }
            </div>
            

        </div>
        </DefaultLayout>
    );
}
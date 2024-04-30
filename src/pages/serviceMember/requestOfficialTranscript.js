import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import Table from '@/components/tables/Table';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";

export default function RequestOfficialTranscript() {
    const userData = useStore((state) => state.userData);
    const router = useRouter();

    const handleClick = () => {
        router.push(`/serviceMember/transcripts`);
    }

    const data = [
        ["01/22/2023 15:14 PM", "American Military Univeristy", "On-Line Delivery", "9288", "01/25/2023", "kevin"],
        ["01/21/2023 14:32 PM", "Columbia University", "On-Line Delivery", "4567", "01/23/2023", "john"],
        ["01/18/2023 15:14 PM", "University of Florida", "On-Line Delivery", "2814", "01/20/2023", "kelly"],

    ]

    const handleSendClick = () => {
        const context = {
            actor: {
              first_name: userData?.user?.first_name || 'Anonymous',
              last_name: userData?.user?.last_name || 'User',
            },
            verb: {
              id: "http://example.org/verb/requested",
              display: `Requested Official Transcript`,
            },
            object: {
                definitionName: `Requested Official Transcript`,
            },
            resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
            resultExtValue: "test",
        };
        xAPISendStatement(context);
        console.log("sent");
        router.push(`/dashboard`);
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mt-4  text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Official Transcript
                    </div> 
                </h1>
                <div>
                    <button onClick={handleClick}
                    className='text-dod-500 mb-3 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                    My Transcripts </button> -{`>`} Official Transcript 
                </div>
                <div className='flex flex-col p-4 gap-2 mt-4 bg-gray-100'>
                <div>
                    <div className=' flex flex-col font-bold'>
                        Person: {userData?.learner.personnel.person.name}
                    </div>
                    <div className=' flex flex-col font-bold'>
                        Delivery Mode: On-Line Delivery
                    </div>
                    <div className='mt-3'>

                        <label for="institute_name" class="block mb-2 text-sm font-medium dark:text-white">Enter Academic Institute </label>
                        <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={"Institute name"} required />
                    </div>  
                    <div className='mt-3 flex flex-col font-medium'>
                        By pressing the "Send Transcript" button below, I give my consent to release my transcript to the institute selected above.
                    </div>

                </div>
                <div className='flex my-5 justify-between'>
                    <Button btnText={"Cancel"} link={"/serviceMember/transcripts"}></Button>
                    <button id={'view-course-button-'}
                        className='`text-white bg-dod-500/80 text-white hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                        onClick={handleSendClick}>
                        Send Transcript
                    </button>
                    {/* <Button btnText={"Send Transcript"} link={"/dashboard"}></Button> */}
                </div>
                </div>

                <h1 className='pb-2 border-b mt-16 text-xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Official Transcript Request History
                    </div> 
                </h1>
                <Table columnTitles={["Requested Date", "School", "Delivery Method", "School ID", "Date Viewed", "Org/School POC"]} 
                    rowsData={data}> </Table>
            </div>
        </DefaultLayout>
    );
}
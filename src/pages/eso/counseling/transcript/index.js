import Button from '@/components/buttons/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import DownloadButton from "@/components/buttons/DownloadButton";
import TranscriptCard from '@/components/cards/TranscriptCard';
import { useRouter } from "next/router"
import useStore from '@/store/store';

export default function TranscriptView() {
    const userData = useStore((state) => state.userData);

    const router = useRouter();
    const handleClick = () => {
        router.push('/eso/careerCounseling');
    }

    return (
        <DefaultLayout>
            <div className='bg-white w-full border rounded-md border-gray-200 p-4 shadow'>
                <h1 className='pb-4 border-b mb-2 text-3xl font-semibold'>
                    <div className='flex flex-row justify-between'>  
                        Complete Transcript
                    </div> 
                </h1>
            <div>
                <button onClick={handleClick}
                className='text-dod-500 hover:underline underline hover:text-blue-500 cursor-pointer transition-all duration-150 ease-in-out'>                    
                Counseling Dashboard </button> -{`>`} Complete Transcript 
            </div>

            <div className="m-4 bg-gray-200 h-screen text-center">
                <object data={link}
                    type="application/pdf" width="100%" height="100%">
                    PDF Viewer
                </object>
            </div>

            <div className='flex flex-row align-bottom justify-between mt-5'>
                <Button btnText={"Return to Counseling Dashboard"} link={"/eso/counseling"}></Button>
                <DownloadButton link={downloadLink}/>
            </div>
        </div>
        </DefaultLayout>
    );
}
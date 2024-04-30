import DefaultLayout from '@/components/layouts/DefaultLayout';
import TranscriptCard from '@/components/cards/TranscriptCard';
import useStore from '@/store/store';
import { useRouter } from "next/router"
import DownloadButton from "@/components/buttons/DownloadButton";
import Button from '@/components/buttons/Button';

export default function TranscriptView() {
    const userData = useStore((state) => state.userData);
    let link = " https://jst-transcript.s3.us-east-2.amazonaws.com/Sample_ComboTranscript.pdf?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLWVhc3QtMSJHMEUCIQDnMd5IbFkcM8biwN5SHXcP1gsFl3HNrsBbWcauOZZzwAIgM1j8llN4hLOH9BFpfTl5V0dqQdm%2Fug5LVcMables06kqrwMIFhACGgw5NTUwMzg1ODAxNjciDPUehISjPGu%2FNz3lESqMAyOBFfHpLzC8El8pgFjoj34w0ET186wTZjYa3c%2BOW3lFHjP3i%2FO3GoI99XN8YdYboOE9Bd6eJudsxd1CP2IV1f%2FQDOT59UYdw79Se0Tx9mHQ39FuA0H8qT2BPOEY6asEsmEHeZh5mj1gH73bnFipFtRCjwoWGPFqY%2BxVRZBmi0XzFASBcsgONmA8V2%2FN4hS%2B3tSicC9OUcBTHDbNIUWmme1N1pvQX%2FLk6koVjrORHGlCk5DGnVsq3Wwvtzcp9sxMVy1XvKQFSB63jxQE6F%2F0nErEz2AHeYVXwkurzCMOBMGERQzqh9eN8LNtWTjZdJBh%2FsMYSqeKl5g3igjg%2Bwo9s%2ByeJSzcGtM4%2Flu0Spc5NS%2BPfYCXJLh3fBvH2zmE2dOrYL1hGKWEg%2FTHsOnHfb%2BODBu41ud%2FU9lBAk4XvCnNh58NpCam3QYT%2F6bM%2F7jySfqt4WaIZrMqEAlU8sVCWXGOIRLOmKa0zeEY1NXVn0yycEU2IjVsW5PEun6jVg%2FI6pdt01T2T20aPzUaFTg1NjDB07WhBjqMAvZJujEKxWA6fGpcuvVkA4Pm4wqoIZMe%2BhFDpvk4JdqQ4LjbyBP7Bt%2FehHX65FW%2F9sJZINX7%2FFoCa3t21P1UepKCNhIl2S0hiK0RouDpzLALzmLk517jts4Uxie68A67IAjMjlsixkwRBYz0iSQaJ2XC5kuh%2FQVIP0ArGtvG26BJmVPK5z%2BdLx9eQNEjkKlqHyg5cUKtQ7qFscVxPY332EhmRveOXFnkPPvLj4BQwQg9cJqeTRJfhXTZLEcSglClb%2BIYD53PC0hGpe5KdodQAz2MqaB4rmxL%2FXeQCLhn007DNyA1b7wghMUXZHIembuYK71b%2FPpb0TjXRmuj3l%2FzL%2Fi2%2BkDkyaapduoVQIc%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230405T123133Z&X-Amz-SignedHeaders=host&X-Amz-Expires=43200&X-Amz-Credential=ASIA54XF4HXDYCJUS46I%2F20230405%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=cd6581e0162467396f0e3b292e0f06ab575f0ca68592d84f87d8b05b3d70f9c6";
    let downloadLink = 'Phillips,Bill_COMBO_TRANSCRIPT.pdf';

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
import { twMerge } from "tailwind-merge";
import useStore from "@/store/store";

export default function ViewCard({ inquiry , className}){
    const user = useStore((store) => store.userData);
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b  h-10'>
                Description
                <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-gray-900 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none" disabled>Status: {inquiry?.inquiry_status}</button>

            </h1>
            <p className={descriptionClass}>
                {inquiry?.description}

            </p>
            <p className="mt-6">
                {user?.role !== "Service Member" &&
                    (`Submitted by ${inquiry?.submitted_by} on ${inquiry?.timestampCreated}`)
                }
            </p>
        </div>
        
    )
}
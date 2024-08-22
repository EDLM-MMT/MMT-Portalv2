import { twMerge } from "tailwind-merge";

export default function DegAgreementsViewCard({ degreeAgreement , className}){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b  h-10'>
                Overview
                <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-gray-900 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none" disabled>Status: {degreeAgreement?.degAgr_status}</button>
            </h1>
            <p className={descriptionClass}>
                {degreeAgreement?.description}

            </p>

            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Approved By: {degreeAgreement.approvedBy}
                </p>
                <p className={descriptionClass}>
                    Total Cedit Hours: {degreeAgreement.totalCreditHours}
                </p>   
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Assigned ESO: {degreeAgreement.assignedESO}
                </p>
                <p className={descriptionClass}>
                    Hours Still Needed: {degreeAgreement.totalCreditHours - degreeAgreement.completedCreditHours}
                </p>   
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Degree Start Date: {degreeAgreement.degreeStartDate}
                </p>
                <p className={descriptionClass}>
                    Projected Graduation Date: {degreeAgreement.projectedGradDate}
                </p>   
            </div>
        </div>
        
    )
}
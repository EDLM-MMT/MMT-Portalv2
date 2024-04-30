import { twMerge } from "tailwind-merge";

export default function ViewCounselingCard({ career, school, startDate, endDate, assignedESO, serviceMember, username, mosCode, totalHours, completedHours, className }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    return(
        <div className='bg-white w-full border h-50 pb-4 mb-1 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='text-xl font-semibold h-10 border-b'>
                Overview
            </h1>
            {serviceMember &&
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Service Member Name (Username): {serviceMember} ({career.username})
                </p>
                <p className={descriptionClass}>
                    MOS Code: {career.mosCode}
                </p>
            </div>}
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    School: {school}
                </p>
                {assignedESO &&
                <p className={descriptionClass}>
                    Assigned ESO: {assignedESO}
                </p>
                }
                
                <p className={descriptionClass}>
                    Degree Start Date: {startDate}
                </p>
            </div>
            <div className="flex flex-row justify-between font-semibold">
                <p className={descriptionClass}>
                    Total Credit Hours: {totalHours}
                </p>
                <p className={descriptionClass}>
                    Hours Still Required for Degree Completion: {totalHours - completedHours}
                </p>
            </div>
            
        </div>
        
    )
}
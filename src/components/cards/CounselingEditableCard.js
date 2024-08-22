import { useState, useEffect } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';



export default function CounselingEditableCard({ career , routePath, className}){

    const currDate = new Date();
    console.log("currDate", currDate)
    const [edit, setEdit] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(career.assigned_eso);
    const [secondDropdownValue, setSecondDropdownValue] = useState(career.projected_graduation);

    console.log("career:", career)

    useEffect(() => {
        setDropdownValue(career.assigned_eso)
        setSecondDropdownValue(career.projected_graduation)
    }, [career]);




    const handleEdit = () => {
        console.log("Click!");
        setEdit(!edit);

    }

    const handleSave = () => {
        console.log("Click Save!");
        career.assigned_eso = dropdownValue;
        career.projected_graduation = secondDropdownValue;
        setEdit(!edit);

    }

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b h-10 mb-6'>
                Details
                {!edit && <button onClick={handleEdit} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-dod-300 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Edit</button>}
            </h1>
            {edit ? 
                (<div>
                    <div className="flex flex-row justify-between">
                        <p className="flex flex-row mt-4 font-sans line-clamp-6">
                            <b className="mt-2 mr-2">Assigned ESO:</b>
                            <Dropdown options={["John Doe", "Mary Jane Doe"]} initialValue={career?.assigned_eso || "None"} onChange={(event)=>{event.preventDefault(); setDropdownValue(event.target.value);}}/>                                   
                        </p>
                        <p className="mt-4">
                            <div className="flex flex-row justify-between">
                                <b className="mt-2 mr-2">Projected Graduation Date:</b>
                                <Dropdown options={["Fall 2023", "Spring 2024", "Summer 2024", "Fall 2024"]} initialValue={career?.projected_graduation || "TBD"} onChange={(event)=>{event.preventDefault(); setSecondDropdownValue(event.target.value);}}/>
                            </div>
                        </p>
                    </div>
                    <div className="flex flex-row justify-end w-full mt-4">
                        <button onClick={handleSave} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-dod-300 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Save Changes</button>
                    </div>
                </div>) :
                (<div className=" flex flex-row justify-between">
                    <p className="mr-8">
                        <b>Assigned ESO:</b> {career?.assigned_eso}
                    </p>
                    
                    <p className="">
                        <b>Projected Graduation Date:</b> {career.projected_graduation}
                    </p>
                </div>)
            }
        </div>
        
    )
}
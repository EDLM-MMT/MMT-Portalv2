import { twMerge } from "tailwind-merge";
import { useState, useEffect } from 'react';
import Dropdown from '@/components/dropdowns/Dropdown';
import GeneralPurposeOverlay from "../overlays/GeneralPurposeOverlay";
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";


export default function ProgramAdminViewCard({ userData, account , routePath, className}){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);


    const currDate = new Date();
    console.log("currDate", currDate)
    const [edit, setEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [passwordUpdated, setPasswordUpdated] = useState(false);
    const [dropdownValue, setDropdownValue] = useState(account.status);




    useEffect(() => {
        setDropdownValue(account.status)
    }, [account]);

    const handleEdit = () => {
        console.log("Click!");
        setEdit(!edit);

    }

    const handleSave = () => {
        console.log("Click Save!");
        account.status = dropdownValue;
        setEdit(!edit);

    }
    
    const handleReset = () => {
        console.log("Click Reset!");
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        if(passwordUpdated){
            const context = {
                actor: {
                  first_name: userData?.user?.first_name || 'Anonymous',
                  last_name: userData?.user?.last_name || 'User',
                },
                verb: {
                  id: "http://example.org/verb/reset",
                  display: `Reset Password`,
                },
                object: {
                    definitionName: `Reset Password`,
                },
                resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
                resultExtValue: "test",
            };
            console.log(context);
            xAPISendStatement(context);
            console.log("sent");
        }
    }, [passwordUpdated]);

    return(
        <div className='bg-white w-full border h-50 pb-4 rounded-md border-gray-200 p-4 shadow'>
            <h1 className='flex flex-row justify-between text-xl font-semibold border-b  h-10'>
                Overview
                {!edit && <button onClick={handleEdit} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-dod-300 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Edit</button>}

            </h1>
            {edit ? 
                (<div>
                    <p className="mt-4 font-sans line-clamp-6">
                        <b className="mr-2">Status:</b>
                        {!isOpen ? 
                            (<Dropdown options={["Active", "Veteran"]} initialValue={account?.status || "Active"} onChange={(event)=>{
                                event.preventDefault(); setDropdownValue(event.target.value);  }}/>
                            ):(<>{account?.status}</>)
                        }
                    </p>
                    <p className="mt-6">
                        <div className="flex flex-row">
                            <b>Password:</b>
                            <div className="flex-col">
                                <button onClick={handleReset} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-dod-300 px-6 p-1 mb-2 ml-4 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Password Reset</button>
                                {isOpen && <GeneralPurposeOverlay toggleModal={setIsOpen} path={`/programAdmin/accountsManagement/${routePath}`} disable={setPasswordUpdated}
                                            title={"Reset Password"} message={`Please confirm you would like to reset ${account.name}'s account password.`} toggle2ndModal={setEdit}/>}
                                <div className="ml-4 text-gray-500">
                                    Last updated 60 days ago
                                </div>
                            </div>
                        </div>
                    </p>
                    <div className="flex justify-end w-full mt-4">
                        <button onClick={handleSave} className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-dod-300 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none">Save Changes</button>
                    </div>
                </div>) :
                (<div>
                    <p className={descriptionClass}>
                        <b>Status:</b> {account?.status}

                    </p>
                    <p className="mt-6">
                        <b>Password:</b> Last updated 60 days ago
                    </p>
                </div>)
            }
        </div>
        
    )
}
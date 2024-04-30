import { twMerge } from "tailwind-merge";
import Button from "../buttons/Button";
import { useState } from 'react';
import DegreeAgreementsOverlay from "../overlays/DegreeAgreementsOverlay";
import AssignInquiryOverlay from "../overlays/AssignInquiryOverlay";



export default function TwoChoiceCard({ buttonLabel, className, data, card, degreeIndex, toggleModalUpdate, type }){
    const descriptionClass = twMerge(`
        mt-4 font-sans line-clamp-6 
        ${className ?? ""}
    `);

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(true);
    }

    return(
        <div className='bg-white w-full border h-50 rounded-md border-gray-200 p-4 pb-0 shadow'>
            <h1 className='text-xl font-semibold h-10'>
                <div className='flex flex-row justify-between'>
                    {card.title}
                    <button className="flex justify-end items-center text-sm gap-2 dod-500 rounded-md text-white bg-gray-900 px-6 p-1.5 mb-2 transform transition-all duration-150 ease-in-out border-dod-500 border-2  ring-dod-500 outline-none" disabled>Status: {card.inquiry_status}</button>

                    
                </div>
            </h1>
            <p className={descriptionClass}>
                {(type === 'I') && <div className='font-medium'> Inquiry ID: {card.id}</div>}
                {(type === 'ESO') && <div className='font-medium'> Service Member: {card.submitted_by}</div>}
                {card.description}
            </p>
            
            <div className='flex flex-row align-bottom mt-5'>
                <div className= 'w-1/2'>
                    <button className='text-black bg-white hover:bg-white hover:text-black justify-center 
                        h-18 w-full align-middle pt-2 text-sm font-bold items-center border-grey border border-l-0 border-b-0 rounded-none gap-2'
                        onClick={handleClick}>
                        {card.status} 
                    </button>  

                    {(isOpen && buttonLabel=== "Assign Inquiry") &&
                    (<AssignInquiryOverlay toggleModal={setIsOpen} message={"Enter email address or account name below"} />)}
                    
                    {(isOpen && buttonLabel !== "Assign Inquiry") && 
                    (<DegreeAgreementsOverlay toggleModal={setIsOpen} title={buttonLabel} toggleModalUpdate={toggleModalUpdate}
                    message={`Please confirm you want to ${buttonLabel}`} btnText={`Yes, ${buttonLabel}`}
                    data={data} card={card} degreeIndex={degreeIndex}/>)}
                    
                </div>
                <div className= 'w-1/2'>
                    <Button  className='text-black bg-white hover:bg-white hover:text-black justify-center 
                    h-18 w-full align-middle pt-2 text-sm font-bold items-center border-grey border border-r-0 border-b-0 rounded-none gap-2'

                        btnText={"View"} 
                        link={card.secondRoutePath}/>
                </div>  
            </div>
        </div>
    )
}
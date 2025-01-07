import { useState } from "react";
import {
  HiSearch,
} from "react-icons/hi";
import headerImage from '@/public/ADLLogo.png';
import Image from 'next/image';
import {  } from "@heroicons/react/solid";
import { DocumentTextIcon, UserGroupIcon, QuestionMarkCircleIcon} from "@heroicons/react/outline";


export default function AcademicInstituteSideNav() {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => setIsOpen(false);
                  
    return (
      <>
        <div className="flex h-lvh flex-col py-2 w-72 bg-white">
          
          <div className='flex flex-row'>
            <Image src={headerImage} height={80} alt='' className='rounded-lg m-5 max-w-1/2'/>
            <p className="pt-10 text-2xl font-bold"> MMT</p>
          </div>

          <div className='flex flex-col m-4 pl-2 gap-4' >
            <a className="flex flex-row gap-4 hover:cursor hover:font-bold hover:underline" href="/academicInstitute">
              <DocumentTextIcon className="h-6 mt-2"/>
              Modernized Military Transcript 
            </a>
            <a className="flex flex-row gap-4 hover:cursor hover:font-bold hover:underline" href="/academicInstitute/userManagement">
              <UserGroupIcon className="h-5 mt-1"/>
              User Management
            </a>
            <a className="flex flex-row gap-4 hover:cursor hover:font-bold hover:underline" href="/academicInstitute/help">
              <QuestionMarkCircleIcon className="h-5 mt-0.5"/>
              Help
            </a>

          </div>
        </div>
        
      </>
  );
}

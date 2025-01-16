import { useState } from "react";
import {
  HiSearch,
} from "react-icons/hi";
import headerImage from '@/public/ADLLogo.png';
import Image from 'next/image';


export default function SideNav() {
    // const [isOpen, setIsOpen] = useState(true);
    // const handleClose = () => setIsOpen(false);
                  
    return (
      <>
        <div className="flex h-lvh flex-col py-2 w-72 bg-white">
          
          <div className='flex flex-row'>
            <Image src={headerImage} height={80} alt='' className='rounded-lg m-5 max-w-1/2'/>
            <p className="pt-10 text-2xl font-bold"> MMT</p>
          </div>

          <div className='flex flex-col m-4 pl-2 gap-4' >
            <a className="flex flex-row gap-2 hover:cursor hover:font-bold hover:underline" href="/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mr-2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              Overview 
            </a>
            <a className="flex flex-row gap-4 hover:cursor hover:font-bold hover:underline" href="/modernMilitaryTranscript">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 mt-3">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              Modernized Military Transcript 
            </a>
            <a className="flex flex-row gap-4 hover:cursor hover:font-bold hover:underline" href="/help">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              Help
            </a>

          </div>
        </div>
        
      </>
  );
}

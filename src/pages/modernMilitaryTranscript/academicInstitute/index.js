import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react';
import headerImage from '@/public/Abstact1.png';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import SecondaryButton from '@/components/SecondaryButton';
import GraySecondaryButton from '@/components/GraySecondaryButton';
import { Dropdown, Label, Modal, Radio } from 'flowbite-react';
import ShareTranscriptModal from '@/components/ShareTranscriptModal';
import Button from '@/components/Button';
import { TranscriptTable, TranscriptTrackingTable } from '@/components/TranscriptTable';

export default function ModernMilitaryTranscript() {
  const router = useRouter();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(true);
  Modal
  return (
    <DefaultLayout>
      <Head>
        <title>MMT</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='flex flex-col mt-8'>
            <div className='flex justify-between py-4 text-xl font-bold'> 
                <div>
                Welcome Emma Hobert!
                </div>
                <div className="p-0.5 mb-2 text-xs font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom from-accent-blue to-purple">                        
                    <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-2/3 md:w-auto flex py-2 px-4 font-medium text-purple focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                        Request Military Transcript
                    </button>
                </div>
            </div>

            <div className='bg-white shadow-md'>

            </div>

            <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-5 my-8 mr-4'>
            <TranscriptTable />

            </div>
        </div>
    </DefaultLayout>
  );
  
}

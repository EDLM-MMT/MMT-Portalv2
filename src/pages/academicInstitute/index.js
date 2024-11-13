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
            <div className='py-4 text-xl font-bold'> 
            Welcome Emma Hobert!
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

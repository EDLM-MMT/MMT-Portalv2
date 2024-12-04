import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react';
import headerImage from '@/public/Abstact1.png';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import SecondaryButton from '@/components/SecondaryButton';
import GraySecondaryButton from '@/components/GraySecondaryButton';
import { Dropdown, Label, Modal, Radio, Tabs, Badge } from "flowbite-react";
import ShareTranscriptModal from '@/components/ShareTranscriptModal';
import Button from '@/components/Button';
import { NewTranscriptTable } from '@/components/NewTranscriptTable';
import { TranscriptTrackingTable } from '@/components/TranscriptTrackingTable';
import { AllTranscriptTable } from '@/components/AllTranscriptsTable';

export default function ModernMilitaryTranscript() {
  const router = useRouter();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(true);
  // Modal
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

        {/* <div className='bg-white shadow-md'>

            </div> */}

        <div className='rounded-md p-4 shadow-lg focus:shadow-lg px-5 my-8 mr-4'>
          <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div class="w-full md:w-1/2">
              <form class="flex items-center">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="relative w-full">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="" />
                </div>
              </form>
            </div>
          </div>
          <Tabs aria-label="Tabs with underline" variant="underline">
            <Tabs.Item active title={
              <div className="flex items-center">
                New Transcripts
                <Badge color="purple" className="ml-2 rounded-md">
                  5
                </Badge>
              </div>
            }>
              <NewTranscriptTable />
            </Tabs.Item>
            <Tabs.Item title={
              <div className="flex items-center">
                All Transcripts
                <Badge color="gray" className="ml-2">
                  100
                </Badge>
              </div>
            }>
              <AllTranscriptTable />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </DefaultLayout>
  );

}

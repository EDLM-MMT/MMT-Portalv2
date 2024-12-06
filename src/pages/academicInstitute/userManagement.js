import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import React, { useState } from 'react';
import DefaultLayoutAI from '@/components/layouts/DefaultLayoutAI';
import { Tabs, Badge } from "flowbite-react";
import Button from '@/components/Button';
import { NewTranscriptTable } from '@/components/NewTranscriptTable';
import { AllUsersTable } from '@/components/AllUsersTable';
import { ArrowDownIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { AdminUsersTable } from '@/components/AdminUsersTable';
import SecondaryButton from '@/components/SecondaryButton';

export default function ModernMilitaryTranscript() {
  const router = useRouter();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(true);
  // Modal
  return (
    <DefaultLayoutAI>
      <Head>
        <title>MMT</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='flex flex-col mt-8'>
        <div className='flex justify-between py-4 text-xl font-bold'>
          <div>
            User Management
          </div>
        </div>

        <div className='rounded-md p-4 bg-white shadow-lg focus:shadow-lg px-5 my-4 mr-4'>
          <div class="flex flex-row justify-between items-center space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className='flex flex-row w-full gap-5'>
            <div class="w-1/3">
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
            {/* <div className="font-semibold">Filters</div> */}

            <div id="actionsDropdown" class="hidden z-2 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                    </li>
                </ul>
                <div class="py-1">
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                </div>
            </div>
            {/* <SecondaryButton children={
              <div className='w-full flex flex row'>
                Added Last 30 Days
                <ChevronDownIcon className='h-5' />
              </div>
            }/> */}
            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom">
                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-opacity-50 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                    Added Last 30 Days
                    <svg class="ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </button>
            </div>
            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom">
                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-2 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-opacity-50 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">

                    Service Branch
                    <svg class="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                </button>
            </div>

            <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg">
                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center py-2 px-4 font-medium text-purple ring-white outline-white focus:outline-none bg-white rounded-lg hover:bg-gray-100 hover:text-primary-700 dark:bg-gray-800 dark:text-gray-400  dark:hover:text-white dark:hover:bg-gray-700" type="button">
                    Clear Filters
                </button>
            </div>
            </div>

            <div className='flex justify-end'>
                <Button onClick={()=>{}} children={
                <div className="flex flex-row">
                    <PlusIcon className="h-5 mr-2"/>
                Add New
                </div>
                }/>
            </div>

          </div>
          <Tabs aria-label="Tabs with underline" variant="underline">
            <Tabs.Item active title={
              <div className="flex items-center">
                Admin Users
                <Badge color="purple" className="ml-2 rounded-md">
                  1
                </Badge>
              </div>
            }>
              <AdminUsersTable />
            </Tabs.Item>
            <Tabs.Item title={
              <div className="flex items-center">
                All Users
                <Badge color="gray" className="ml-2">
                  10
                </Badge>
              </div>
            }>
              <AllUsersTable />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </DefaultLayoutAI>
  );

}

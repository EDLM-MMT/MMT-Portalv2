import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import React, { useState, useCallback } from 'react';
import DefaultLayoutAI from '@/components/layouts/DefaultLayoutAI';
import { Tabs, Badge } from "flowbite-react";
import Button from '@/components/Button';
import { NewTranscriptTable } from '@/components/NewTranscriptTable';
import { AllUsersTable } from '@/components/AllUsersTable';
import { ArrowDownIcon, ChevronDownIcon, PlusIcon } from '@heroicons/react/outline';
import { AdminUsersTable } from '@/components/AdminUsersTable';
import SecondaryButton from '@/components/SecondaryButton';
import SearchBar from '@/components/SearchBar';
import useField from '@/hooks/useField';

export default function ModernMilitaryTranscript() {
  const router = useRouter();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(true);

  const { fields, updateKeyValuePair, resetKey } = useField({
    keyword: '',
    p: 1,
  });

  const handleSearch = useCallback(
    (e) => {
      if (!fields.keyword || fields.keyword === '') return;
      router.push({ pathname: '/learner/search/', query: fields });
    },
    [fields]
  );

  const handleChange = (event) => {
    updateKeyValuePair(event.target.name, event.target.value);
  };
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
                <SearchBar
                  parameters={fields}
                  onReset={resetKey}
                  onClick={handleSearch}
                  onChange={handleChange}
                />
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
        
              <div className="p-0.5 mb-2 overflow-hidden font-medium rounded-lg bg-gradient-to-r from-purple to-blue-custom">
                <button id="filterDropdownButton" data-dropdown-toggle="filterDropdown" class="w-full md:w-auto flex items-center justify-center p-2 mt-0.25 font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-opacity-50 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                  Role
                  <svg class="ml-1 w-5 h-5" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
              <Button onClick={() => { }} children={
                <div className="flex flex-row">
                  <PlusIcon className="h-5 mr-2" />
                  Add New User
                </div>
              } />
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

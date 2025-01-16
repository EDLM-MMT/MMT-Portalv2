import { AllTranscriptTable } from '@/components/AllTranscriptsTable';
import { Badge, Checkbox, Dropdown, Label, Modal, Radio, Tabs } from "flowbite-react";
import { CheckCircleIcon } from '@heroicons/react/solid';
import { NewTranscriptTable } from '@/components/NewTranscriptTable';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Button from '@/components/Button';
import DefaultLayoutAI from '@/components/layouts/DefaultLayoutAI';
import GraySecondaryButton from '@/components/GraySecondaryButton';
import Head from 'next/head'
import Image from 'next/image';
import InputField from '@/components/InputField';
import React, { useCallback, useState } from 'react';
import SearchBar from '@/components/SearchBar';
import SecondaryButton from '@/components/SecondaryButton';
import ShareTranscriptModal from '@/components/ShareTranscriptModal';
import headerImage from '@/public/Abstact1.png';
import  useField  from '@/hooks/useField';


export default function ModernMilitaryTranscriptAIPage() {
  const router = useRouter();
  const { user } = useAuth();

  const [openModal, setOpenModal] = useState(false);
  const [displayContent, setDisplayContent] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [ssn, setSsn] = useState('');


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
            Welcome Emma Hobert!
          </div>
          <div className="p-0.5 mb-2 text-xs font-medium ">
            <GraySecondaryButton handleClick={() => setOpenModal(true)} buttonLabel={"Request Military Transcript"} route={"/talentFinder"} />
            {openModal && <div 
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
                onClick={openModal}
              ></div>}

            <Modal show={openModal} size="md" position="center" onClose={() => {setOpenModal(false); setDisplayContent(false);}}>
              <Modal.Header>Request Military Transcript</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Insert the first and last name, date of birth, and the last 4 digits of the Service Member’s SSN to request their transcript. 
                  </p>
                  <div className='flex flex-col gap-4'>
                    <div className="flex items-center gap-2">
                      {/* <Radio id="AI" name="sendType" value="AI" defaultChecked /> */}
                      <Label htmlFor="Fname" className='w-1/3'>First Name</Label>
                      <InputField placeholder='First Name' value={firstName} onChange={(event) => setFirstName(event.target.value)} required={true}/>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* <Radio id="AI" name="sendType" value="AI" defaultChecked /> */}
                      <Label htmlFor="Lname" className='w-1/3'>Last Name</Label>
                      <InputField placeholder='Last Name' value={lastName} onChange={(event) => setLastName(event.target.value)} />
                    </div><div className="flex items-center gap-2">
                      {/* <Radio id="AI" name="sendType" value="AI" defaultChecked /> */}
                      <Label htmlFor="DOB" className='w-1/3'>Date of Birth</Label>
                      <InputField value={dob} onChange={(event) => setDob(event.target.value)} placeholder={"MM/DD/YYYY"}/>
                    </div><div className="flex items-center gap-2">
                      {/* <Radio id="AI" name="sendType" value="AI" defaultChecked /> */}
                      <Label htmlFor="SSN">SSN</Label>
                      <div className='w-1/4 ml-4'> <InputField value={ssn} onChange={(event) => setSsn(event.target.value)} placeholder={"####"}/></div>
                      
                    </div>

                  </div>

                  <div className="flex items-center gap-2">
                    <Checkbox id="accept" />
                    <Label htmlFor="accept"> By clicking Request Military Transcript, you confirm that the Service Member(s) have granted their permission(s) for the institution to access their transcript(s) and their PII. </Label>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer className='flex flex-col'>

                {/* <Button className='w-full' onClick={() => { setOpenModal(false); setConfirmModal(true) }}>Request Military Transcript</Button> */}
                <Button className='w-full' testid="requestTranscriptButton" onClick={() => { 
                    //setOpenModal(false); 
                    // API Call 
                    setDisplayContent(true);
                    setFirstName('')
                    setLastName('')
                    setDob('')
                    setSsn('')    
                  }}>Request Military Transcript</Button>
                  {displayContent && 
                  <div className='flex flex-row mt-2 text-green-600'>
                    <CheckCircleIcon className='h-5 mt-1 mr-2' />
                    Your transcript request have been successfully delivered!</div>
                  }
              </Modal.Footer>
            </Modal>

          </div>
        </div>

        {/* <div className='bg-white shadow-md'>

            </div> */}

        <div className='rounded-md p-4 shadow-lg focus:shadow-lg px-5 my-4 mr-4 bg-white'>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
            <div className="w-full md:w-1/2">
              <SearchBar
                parameters={fields}
                onReset={resetKey}
                onClick={handleSearch}
                onChange={handleChange}
              />
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
                <Badge color="purple" className="ml-2">
                  100
                </Badge>
              </div>
            }>
              <AllTranscriptTable />
            </Tabs.Item>
          </Tabs>
        </div>
      </div>
    </DefaultLayoutAI>
  );

}

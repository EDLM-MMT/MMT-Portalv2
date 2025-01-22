import { Checkbox, Dropdown, Label, Modal, Radio } from 'flowbite-react';
import { TranscriptTrackingTable } from '@/components/TranscriptTrackingTable';
import Button from '@/components/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import GraySecondaryButton from '@/components/GraySecondaryButton';
import Head from 'next/head'
import Image from 'next/image';
import React, { useState } from 'react';
import SecondaryButton from '@/components/SecondaryButton';
import ShareTranscriptModal from '@/components/ShareTranscriptModal';
import headerImage from '@/public/Abstact1.png';

export default function ModernMilitaryTranscript() {

  const [openModal, setOpenModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  return (
    <DefaultLayout>
      <Head>
        <title>MMT</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='flex flex-col mt-8'>
        <div className='py-4 text-xl font-bold'>Modernized Military Transcript </div>
        <div className='bg-white shadow-md'>

          <div className='flex flex-row justify-between'>
            <div className='m-5'> 
              <div className='pt-2 text-xl font-bold'>Transcript </div>
              <div className='pt-6 flex flex-row gap-5'>
                <div className=''>Format </div>
                <div className="flex items-center gap-2">
                    <Radio id="modernized" name="transcriptType" value="Modernized" defaultChecked />
                    <Label htmlFor="modernized">Modernized</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Radio id="legacy" name="transcriptType" value="Legacy" />
                    <Label htmlFor="legacy">Legacy</Label>
                </div>
              </div>
              <div className='pt-6 flex flex-row gap-5'>

              {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}

                <GraySecondaryButton handleClick={() => setOpenModal(true)} buttonLabel={"Share Official Transcript"} route={"/talentFinder"} 
                icon={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
                </svg></>} />
                
                <Modal show={openModal} size="md" position="center" onClose={() => setOpenModal(false)}>
                    <Modal.Header>Share Transcript</Modal.Header>
                    <Modal.Body>
                    <div className="space-y-6">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Who do you want to send to?
                        </p>
                        <div className='flex flex-row gap-5'>
                            <div className="flex items-center gap-2">
                                <Radio id="AI" name="sendType" value="AI" defaultChecked />
                                <Label htmlFor="AI">Academic Institutions</Label>
                            </div>
                            {/* <div className="flex items-center gap-2">
                                <Radio id="ESO" name="sendType" value="ESO" />
                                <Label htmlFor="ESO">Educational Service Officers (ESOs)/Counselors</Label>
                            </div> */}
                        </div>
                        <Dropdown label="" placement='bottom' dismissOnClick={false} renderTrigger={() => <div className='flex flex-row justify-between border rounded p-2 bg-gray-100 text-sm'>
                            Select an Institution
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            </div>}>
                            <Dropdown.Item>Purdue University</Dropdown.Item>
                            <Dropdown.Item>Emory University</Dropdown.Item>
                            <Dropdown.Item>Bunker Hill Community College</Dropdown.Item>
                            <Dropdown.Item>New York University</Dropdown.Item>
                        </Dropdown>
                        <div className="flex items-center gap-2">
                          <Checkbox id="accept" />
                          <Label htmlFor="accept">By clicking Share, you are authorizing this institution(s) to have access of your <a href="#/" className='font-bold'>Official transcript </a> and PII. </Label>
                        </div>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button className='w-full' onClick={() => { setOpenModal(false); setConfirmModal(true) }}>Share</Button>

                    </Modal.Footer>
                </Modal>

                <Modal show={confirmModal} size="md" position="center" onClose={() => setConfirmModal(false)}>
                    <Modal.Header>Share Transcript</Modal.Header>
                    <Modal.Body>
                    <div className="space-y-6">
                    <p className='font-bold'>Your transcript(s) have been successfully delivered! </p>
                    <p className=''> You can track the transcript status on the <a href="#/" className='text-purple'> Military Transcript</a>. </p>
                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                    
                    <Button className='w-full' onClick={() => { setOpenModal(false); setConfirmModal(false) }}>Close</Button>

                    </Modal.Footer>
                </Modal>

                <GraySecondaryButton buttonLabel={"View Transcript"} route={"/talentFinder"} 
                icon={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg> </>} />
                <GraySecondaryButton buttonLabel={"Download Transcript (PDF)"} route={"/talentFinder"} 
                icon={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg> </>} />
                <GraySecondaryButton buttonLabel={"Update/Correct Transcript"} route={"/talentFinder"} 
                icon={<>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                </svg> </>}/>
              </div>
            </div>

          </div>
        </div>

        <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-5 my-8 mr-4'>
          <h1 className='flex text-xl font-semibold h-6 mb-6'>
            Tracking Status
          </h1>
          <TranscriptTrackingTable />

        </div>
      </div>
    </DefaultLayout>
  );
  
}

import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Head from 'next/head'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import headerImage from '@/public/Abstact1.png';

import Button from '@/components/Button';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import SecondaryButton from '@/components/SecondaryButton';
import GraySecondaryButton from '@/components/GraySecondaryButton';
import MyUpdatesSections from '@/components/MyUpdatesSections';

export default function Home() {
  const router = useRouter();
  const { user } = useAuth();
  
  return (
    <DefaultLayout>
      <Head>
        <title>MMT</title>
        <link rel="icon" href="/logo.png" />
      </Head>

      <div className='flex flex-col mt-8'>
        <div className='py-4 text-xl font-bold'>Welcome, E-5, Julio Gomez! </div>
        <div className='bg-white shadow-md'>

          <div className='flex flex-row justify-between'>
            <div className='w-1/2 m-5'> 
              <div className='pt-2 text-lg font-bold'>Meet the Modernized Military Transcript (MMT) </div>
              <div className='pt-2 text-gray-600'>The bridge connecting your military journey with academic credits </div>
              <div className='pt-12 flex flex-row'>
                <div>
                  <Button onClick={()=>{router.push("/talentFinder")}} children={
                  <div className='flex flex-row gap-2 w-full'> <p className='pt-0.5'>Learn More</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                  </div>
                  }/>
                </div>
                
                <SecondaryButton children={
                  <div className='flex flex-row gap-2'>
                  FAQs
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                  </svg>
                  </div>
                }/>
              </div>
            </div>
            <div className='max-h-36'>
              <Image src={headerImage} height={150} alt='' className='rounded-lg m-5 max-w-1/2'/>
            </div>
          </div>
        </div>

        <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-5 my-8 mr-4'>
          <h1 className='flex text-xl font-semibold h-6 mb-6'>
            My Modernized Military Transcript
          </h1>
          <div className='flex align-bottom items-bottom mt-4 gap-5'>
            <GraySecondaryButton buttonLabel={"Download Unofficial Transcript (PDF)"} route={"/talentFinder"} 
            icon={<>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
            </svg> </>} />
            <GraySecondaryButton buttonLabel={"Share Official Transcript"} route={"/talentFinder"} 
            icon={<>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
            </svg> </>}/>

            <GraySecondaryButton buttonLabel={"Update/Correct Transcript"} route={"/talentFinder"} 
            icon={<>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
            </svg> </>}/>
          </div>
        </div>

        <div className='bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-5mr-4'>
          <h1 className='flex text-xl font-semibold h-6 mb-3'>
            My Updates
          </h1>
          <div>
            <div className='text-lg font-bold py-2'>Transcript Submission</div>
            <div className='flex flex-col gap-5'>
              <MyUpdatesSections title={"Purdue University School of Aeronautics and Astronautics"} badgelabel={"Delivered"} sentDate={"Sent on 30 MAR 24"} date={"30 MAR 24"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>} />
              <MyUpdatesSections title={"Purdue University School of Aeronautics and Astronautics"} badgelabel={"Sent"} sentDate={"Sent on 30 MAR 24"} date={"30 MAR 24"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>} />
            </div>
          </div>

          <div>
            <div className='text-lg font-bold py-2 pt-6'>Military Courses</div>
            <div className='flex flex-col gap-5'>
              <MyUpdatesSections title={"Precision Guided Weapons Intermediate Maintenance"} description={"Center for Naval Aviation Technical Training · Norfolk, VA"} badgelabel={"Latest"} sentDate={"Added 10 days ago"} date={"20 JAN 24 – 27 FEB 24"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>} />
            </div>
          </div>

          <div>
            <div className='text-lg font-bold py-2 pt-6'>Operational Experiences</div>
            <div className='flex flex-col gap-5'>
              <MyUpdatesSections title={"Aircraft Armament Equipment Technician"} description={"Norfolk, VA"} badgelabel={"Latest"} sentDate={"Added 10 days ago"} date={"18 OCT 23 — Present"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>} />
            </div>
          </div>

          <div>
            <div className='text-lg font-bold py-2 pt-6'>Additional Learning</div>
            <div className='flex flex-col gap-5'>
              <MyUpdatesSections title={"College-Level Examination Program (CLEP)"} description={"College Composition Modular"} sentDate={"Added on JAN 30 2024"} date={"20 DEC 23"}
              icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 mt-1">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>} />
            </div>
          </div>
        </div>


      </div>
      {/* <Footer /> */}
    </DefaultLayout>
  );
  
}

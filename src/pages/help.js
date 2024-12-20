import Card from '@/components/Card';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import cardImage1 from '@/public/help1.png';
import cardImage2 from '@/public/help2.png';
import cardImage3 from '@/public/help3.png';
import cardImage4 from '@/public/help4.png';
import cardImage5 from '@/public/help5.png';
import Image from 'next/image';


export default function Docs() {
  return (
    <DefaultLayout>
      <div className='mt-10 pb-20'>
        <h1 className='pb-4 border-b mb-8 text-3xl font-semibold'>Help Center</h1>
        <div className='flex flex-col bg-white border rounded-md border-gray-200 p-4 shadow-lg focus:shadow-lg px-10 my-8 mr-4'>

        {/* <Card title={"Getting Started"} 
            image={cardImage} children={<>
                <Accordion acctitle={"What is the EDLM portal?"} accdescription={"The EDLM Portal, TM features aim to enhance the readiness of the Department of Defense, and optimize talent management and personnel programs, relevant training and education, world class health care, quality family support, and force resilience through diversity, inclusion, and equal opportunity. "}/>
                <Accordion acctitle={"How does EDLM support DoD Services?"} accdescription={"The EDLM Portal, TM features aim to enhance the readiness of the Department of Defense, and optimize talent management and personnel programs, relevant training and education, world class health care, quality family support, and force resilience through diversity, inclusion, and equal opportunity. "}/>
                <Accordion acctitle={"How do I find more information on EDLM?"} accdescription={"The EDLM Portal, TM features aim to enhance the readiness of the Department of Defense, and optimize talent management and personnel programs, relevant training and education, world class health care, quality family support, and force resilience through diversity, inclusion, and equal opportunity. "}/>
            </>
          }/> */}

        <div className='flex flex-row gap-10'>
            <div>
            <div className='relative my-auto bg-gradient-to-r from-blue-custom to-purple rounded-lg'>
                <div className="container relative">
                <div className='opacity-40'> 
                    <Image src={cardImage1} width={400} alt='' className="rounded-lg" />
                </div>
                </div>
            </div>
            <h1 className='flex text-xl font-semibold h-6 pt-4 pb-8 h-min'>
                1. Getting Started
            </h1>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> What is MMT?</p>
            </div>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> How to Update/Correct My Transcript?</p>
            </div><div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Account Management</p>
            </div>
            </div>

            <div>
            <div className='relative my-auto bg-gradient-to-r from-blue-custom to-purple rounded-lg'>
                <div className="container relative">
                <div className='opacity-40'> 
                    <Image src={cardImage2} width={400} alt='' className="rounded-lg" />
                </div>
                </div>
            </div>
            <h1 className='flex text-xl font-semibold h-6 pt-4 pb-8 h-min'>
                2. Military and Academic Credits
            </h1>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Transfer Military Credits to Academic Credits</p>
            </div>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Evaluation and Requirements</p>
            </div>
            </div>

            <div>
            <div className='relative my-auto bg-gradient-to-r from-blue-custom to-purple rounded-lg'>
                <div className="container relative">
                <div className='opacity-40'> 
                    <Image src={cardImage3} width={400} alt='' className="rounded-lg" />
                </div>
                </div>
            </div>
            <h1 className='flex text-xl font-semibold h-6 pt-4 pb-8 h-min'>
                3. Applying to Academic Institution
            </h1>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Pre-Application Process</p>
            </div>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Application and Admission</p>
            </div><div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'>Post-Course Completion Process</p>
            </div>
            </div>
        </div>

        <div className='flex flex-row gap-10 pt-10 justify-left'>
        <div className='w-1/3'>
            <div className='relative my-auto bg-gradient-to-r from-blue-custom to-purple rounded-lg'>
                <div className="container relative">
                <div className='opacity-40'> 
                    <Image src={cardImage1} width={400} alt='' className="rounded-lg" />
                </div>
                </div>
            </div >
            <h1 className='flex text-xl font-semibold h-6 pt-4 pb-8 h-min'>
              4. Career Planning
            </h1>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Plan my Career </p>
            </div>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Best Practices for Career Planning</p>
            </div><div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Checklist of Items to Complete Prior to Seeing ESO</p>
            </div>
            </div>

            <div className='w-1/3'>
            <div className='relative my-auto bg-gradient-to-r from-blue-custom to-purple rounded-lg'>
                <div className="container relative">
                <div className='opacity-40'> 
                    <Image src={cardImage2} width={400} alt='' className="rounded-lg" />
                </div>
                </div>
            </div>
            <h1 className='flex text-xl font-semibold h-6 pt-4 pb-8 h-min'>
                5. Preparing for Post-Military Separation
            </h1>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'>Steps for Separation </p>
            </div>
            <div className='flex flex-row py-3 pl-5'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
              </svg>
              <p className='ml-2 mb-0 text-lg justify-left text-left text-purple'> Considerations for Post-Military Life </p>
            </div>
            </div>
        </div>

        </div>

      </div>
    </DefaultLayout>
  );
}

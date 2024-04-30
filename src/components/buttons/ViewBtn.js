import { EyeIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function ViewBtn({ transcriptType, path }) {

  return (
    <Link href={{ pathname: path || `/serviceMember/transcripts/${transcriptType}` }} passHref>
      <button
        id={'view-course-button-' + transcriptType}
        className='flex justify-center items-center text-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none' title='view transcript'
      >
        <EyeIcon className='h-5 w-5' />
        View 
      </button>
    </Link>
  );
}

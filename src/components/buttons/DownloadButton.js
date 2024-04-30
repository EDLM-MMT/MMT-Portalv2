import { ArrowCircleDownIcon } from '@heroicons/react/solid'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

export default function DownloadButton({link}) {
    const items = ['PDF', 'Word'];

    return (
        <div className="rounded-md">
            <Menu as="div" className="relative inline-block text-left">
                <div className='text-sm'>
                    <Menu.Button 
                        className='flex justify-center items-center tect-sm gap-2 dod-500 rounded-md hover:shadow-md text-white bg-dod-500/80 hover:bg-blue-400 hover:text-white px-2 p-1.5 transform transition-all duration-150 ease-in-out border-dod-500 border-2 focus:ring-2 ring-dod-500 outline-none' title='view transcript'>
                        <ArrowCircleDownIcon
                            className=" -mr-1 h-4 w-4 text-white hover:text-dod-100"
                            aria-hidden="true"
                        />
                        Download
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="z-50 absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="p1">
                            {items.map((eachItem) => (
                                <Menu.Item key={eachItem}>
                                    {({ active }) => (
                                        
                                            (eachItem === "PDF") ? (

                                                    <a className={`${active ? 'bg-dod-300 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                    href={`../../../${link}`} value="PDF" target="_blank" rel="noopener noreferrer" download><button>{eachItem}</button> </a>
                                            ):(
                                                <a className={`${active ? 'bg-dod-300 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                                href='../../sampleFile.doc' value="Word" download>{eachItem}</a>
                                            )
                                        

                                    )}
                                </Menu.Item>
                            ))}

                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}
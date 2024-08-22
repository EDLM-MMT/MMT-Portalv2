/* eslint-disable no-restricted-globals */
import { Menu, Transition } from '@headlessui/react';

import { Fragment } from 'react';
import { useRouter } from 'next/router';
import useStore from '@/store/store';
import { xAPISendStatement } from "@/utils/xapi/xAPISendStatement";

const listMenuButtons = [
    {
      name: 'Enrollment by University',
      href: '/execStakeholder/universityEnrollment',
    },
    {
      name: 'Enrollment by State',
      href: '/execStakeholder/stateEnrollment',
    },
  ];

  
  
  
  const StatMenu = ({ name, href }) => {
    const router = useRouter();
    const userData = useStore((state) => state.userData);

    const handleClick = (event) => {
      console.log("here");
      const context = {
        actor: {
          first_name: userData?.user?.first_name || 'Anonymous',
          last_name: userData?.user?.last_name || 'User',
        },
        verb: {
          id: "http://example.org/verb/explored",
          display: `Viewed ${name}`,
        },
        object: {
            definitionName: `Viewed ${name}`,
        },
        resultExtName: 'https://w3id.org/xapi/ecc/result/extensions/searchTerm',
        resultExtValue: "test",
      };
      xAPISendStatement(context);
      console.log(event?.target.innerHTML);
    }
    
    return (
      <Menu.Item>
        {({ active }) => (
          <button
            // onClick={() => router.push(href)}
            onClick={() => {handleClick(event); router.push(href);}}
            id={name.toLowerCase().replace(/\s/g, '-')}
            className={`${
              active ? 'bg-gray-100' : 'bg-white'
            } p-1 transition-colors duration-75 ease-in-out cursor-pointer rounded-md w-full flex justify-start gap-2 items-center`}
          >
            {name}
          </button>
        )}
      </Menu.Item>
    );
  };
  
  export default function StatsMenu() {
      
    return (
      <Menu
        as='div'
        className='relative inline-block text-left mt-0.5 '
      >
        {({ open }) => (
          <div className='relative'>
            <Menu.Button data-testid='stats-menu-button' className='group inline-flex justify-end items-center w-full hover:bg-opacity-95 hover:shadow transform transition-all ease-in-out duration-150 px-2 py-1 text-white gap-2 text-lg rounded-md outline-none focus:ring-4 ring-blue-400'>
              <div className='line-clamp-1'>Enrollment Statistics</div>
  
              {/* <ChevronUpIcon
                className={`${
                  !open
                    ? 'rotate-180  group-hover:bg-dod-300'
                    : 'shadow-inner-sm'
                } text-white h-5 rounded-md transition-all ease-in-out duration-75 `}
              /> */}
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-150'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-100'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='absolute origin-top w-52 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <div className='text-gray-700'>
                  <div className='p-2'>
                    <div className='grid gap-1 pt-1'>
                      {listMenuButtons.map((button) => (
                        <StatMenu key={button.name} {...button} />
                      ))}
                    </div>
                  </div>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    );
  }
  
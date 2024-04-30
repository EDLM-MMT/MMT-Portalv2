import {
    UserCircleIcon,
    LogoutIcon
  } from '@heroicons/react/outline';
  import { ChevronUpIcon, UserIcon } from '@heroicons/react/solid';
  import { Fragment } from 'react';
  import { Menu, Transition } from '@headlessui/react';
  import { useRouter } from 'next/router';
  import useStore from '@/store/store';

  
  const listMenuButtons = [
    {
      name: 'Profile',
      icon: <UserCircleIcon className='h-4 w-4' />,
      href: '/profile',
    },
    {
      name: 'Login Activity',
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
      </svg>,
      href: '/loginActivity',
    },
  ];
  
  
  const MenuButton = ({ name, icon, href }) => {
    const router = useRouter();
    return (
      <Menu.Item>
        {({ active }) => (
          <button
            onClick={() => router.push(href)}
            id={name.toLowerCase().replace(/\s/g, '-')}
            className={`${
              active ? 'bg-gray-100' : 'bg-white'
            } p-1 transition-colors duration-75 ease-in-out cursor-pointer rounded-md w-full flex justify-start gap-2 items-center`}
          >
            {icon}
            {name}
          </button>
        )}
      </Menu.Item>
    );
  };
  
  export default function UserMenu({logout, userData}) {
    
    const user = useStore((state) => state.userData);
  
    return (
      <Menu
        as='div'
        className='relative inline-block text-left mt-0.5 max-w-min '
      >
        {({ open }) => (
          <div className='relative'>
            <Menu.Button data-testid='user-menu-button' className='group inline-flex justify-end items-center bg-dod-300 hover:bg-opacity-95 hover:shadow transform transition-all ease-in-out duration-150 px-2 py-1 text-white gap-2 font-semibold rounded-md outline-none focus:ring-4 ring-blue-400'>
              <div
                id='avatar'
                className='h-8 w-8 rounded-full flex-shrink-0 bg-white shadow-inner-sm overflow-hidden flex justify-center items-center'
              >
                <UserIcon className='h-6 text-dod-300 text-shadow' />
              </div>
              <div className='line-clamp-1'>{user?.learner.personnel.person.firstName}</div>
  
              <ChevronUpIcon
                className={`${
                  !open
                    ? 'rotate-180  group-hover:bg-dod-300'
                    : 'shadow-inner-sm'
                } text-white h-5 rounded-md transition-all ease-in-out duration-75 `}
              />
              {/* <ChevronDownIcon className='h-4 w-4' /> */}
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
              <Menu.Items className='absolute right-0 origin-top w-44 mt-2 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10'>
                <div className='text-gray-700'>
                  <div className='p-2'>
                    <div className='grid gap-1 pt-1'>
                      {listMenuButtons.map((button) => (
                        <MenuButton key={button.name} {...button} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className='p-2 flex w-full justify-between items-center'>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={logout}
                        className={`flex justify-start items-center gap-2 hover:bg-gray-50 rounded-md p-1 transition-all duration-75 ease-in-out text-sm hover:shadow-inner-sm shadow-md border-gray-200 border hover:border-transparent ${
                          active && 'ring-2 ring-blue-500 ring-offset-1'
                        } hover:ring-transparent`}
                      >
                        <LogoutIcon className='h-4 w-4' />
                        Logout
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </div>
        )}
      </Menu>
    );
  }
  
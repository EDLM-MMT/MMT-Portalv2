import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

import { ChevronDownIcon } from '@heroicons/react/solid';
import { useEffect } from 'react';

export default function Dropdown({
  options,
  keyName,
  initialValue,
  onChange,
  value,
//   onClear,
}) {
  const [selected, setSelected] = useState(initialValue);

  useEffect(() => {
    setSelected(value);
  }, [value]);

  return (
    <Menu as='div' className='relative inline-block text-left mt-0.5 z-50'>
      <div className='flex flex-col gap-2'>
        <Menu.Button
          title={`${keyName} filter`}
          className='text-gray-800 items-center gap-2 inline-flex  justify-between w-48 bg-white shadow-md px-2 py-1 rounded-md focus:ring-2 ring-blue-400 transform transition-all duration-150 ease-in-out outline-none'
        >
          <div className='line-clamp-1'>{selected || initialValue}</div>
          <ChevronDownIcon className='h-4 w-4 text-gray-600' />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-200'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-100'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='absolute left-0 top-10 w-44 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-2 ring-blue-300 outline-none line-clamp-1'>
          <div className='p-1'>
            {options?.map((group) => {
              return (
                <Menu.Item key={group}>
                  {({ active }) => (
                    <button
                      name={group}
                      value={group}
                      data-testid={group}
                      onClick={(e) => {
                        onChange(e);
                        setSelected(group);
                      }}
                      className={`${
                        active && 'bg-gray-50'
                      } cursor-pointer rounded-md w-full text-left flex justify-between items-center `}
                    >
                      {group}
                    </button>
                  )}
                </Menu.Item>
              );
            })}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
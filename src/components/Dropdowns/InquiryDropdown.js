import { ChevronDownIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

export default function InquiryDropdown({
  options,
  keyName,
  initialValue,
  onChange,
//   onClear,
}) {
  const [selected, setSelected] = useState(initialValue);
  return (
    <Menu as='div' className='relative inline-block text-left w-3/4 mt-0.5'>
      <div className='flex flex-col w-full gap-2'>
        <Menu.Button
          title={`${keyName} filter`}
          className='text-gray-800 items-center gap-2 inline-flex  justify-between w-full bg-white shadow-md px-2 py-1 rounded-md ring-1 focus:ring-2 ring-gray-400 transform transition-all duration-150 ease-in-out outline-none'
        >
          <div className='line-clamp-1'>{selected || keyName}</div>
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
        <Menu.Items className='absolute left-0 top-10 w-full origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-2 ring-gray-300 outline-none line-clamp-1'>
          <div className='p-1 w-full'>
            {options?.map((group) => {
              return (
                <Menu.Item key={group}>
                  {({ active }) => (
                    <button
                      name={group}
                      value={group}
                      onClick={(e) => {
                        onChange(e);
                        setSelected(group);
                      }}
                      className={`${
                        active && 'bg-gray-50'
                      } cursor-pointer rounded-md text-left flex justify-between items-center `}
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

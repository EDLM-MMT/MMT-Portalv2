'use strict';

import React from 'react';

export default function InputField({
  type,
  placeholder,
  name,
  value,
  onFocus,
  onBlur,
  onChange,
  required,
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      required={required}
      placeholder={placeholder}
      name={name}
      className='shadow focus:shadow-md rounded-md p-1 pl-2 w-full border border-gray-200 text-gray-700 focus:ring-2 ring-blue-400 outline-none  transition-all  duration-200'
    />
  );
}

import { useState, useEffect } from 'react'

// Fix the infinite loop
export default function InputChanges() {
  const [value, setValue] = useState('')
  const [count, setCount] = useState(-1)

  useEffect(() => {
    setCount(count + 1)
  }, [value])

  function onChange(event) {
    setValue(event.target.value)
  }

  return (
    <div className='mx-auto max-w-md p-8'>
      <label
        htmlFor='changes'
        className='block text-sm font-medium leading-6 text-gray-900'
      >
        Total changes ({count})
      </label>
      <div className='mt-2'>
        <input
          id='changes'
          className='px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          onChange={onChange}
        />
      </div>
    </div>
  )
}

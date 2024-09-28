import React, { useState } from 'react'

// Display the first name, last name and timezone next to the form
// Bonus: Disable the save button if any value missing
export default function PersonalInfo() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    timezone: 'Pacific Standard Time'
  })

  const updateUser = (name) => (e) => {
    const value = e.target.value
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const allowedSubmit = Object.values(user).every(Boolean)

  return (
    <div className='bg-gray-800 h-screen divide-y divide-white/5'>
      <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
        <div>
          <h2 className='text-base font-semibold leading-7 text-white'>
            {user.firstName} {user.lastName}
          </h2>
          <p className='mt-1 text-sm leading-6 text-gray-400'>{user.timezone}</p>
        </div>

        <form className='md:col-span-2'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
            <div className='sm:col-span-3'>
              <label
                htmlFor='first-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                First name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='first-name'
                  id='first-name'
                  autoComplete='given-name'
                  value={user.firstName}
                  onChange={updateUser('firstName')}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='sm:col-span-3'>
              <label
                htmlFor='last-name'
                className='block text-sm font-medium leading-6 text-white'
              >
                Last name
              </label>
              <div className='mt-2'>
                <input
                  type='text'
                  name='last-name'
                  id='last-name'
                  value={user.lastName}
                  onChange={updateUser('lastName')}
                  autoComplete='family-name'
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                />
              </div>
            </div>

            <div className='col-span-full'>
              <label
                htmlFor='timezone'
                className='block text-sm font-medium leading-6 text-white'
              >
                Timezone
              </label>
              <div className='mt-2'>
                <select
                  id='timezone'
                  name='timezone'
                  value={user.timezone}
                  onChange={updateUser('timezone')}
                  className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 [&_*]:text-black'
                >
                  <option>Pacific Standard Time</option>
                  <option>Eastern Standard Time</option>
                  <option>Greenwich Mean Time</option>
                </select>
              </div>
            </div>
          </div>

          <div className='mt-8 flex'>
            <button
              disabled={!allowedSubmit}
              type='submit'
              className='rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 disabled:bg-slate-500 disabled:cursor-not-allowed'
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

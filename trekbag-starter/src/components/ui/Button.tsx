import React from 'react'

export default function Button({ children, onClick }) {
  return (
    <button
      className='btn secondary btn--secondary'
      onClick={onClick}
    >
      {children}
    </button>
  )
}

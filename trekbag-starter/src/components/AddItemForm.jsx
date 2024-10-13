import { useState } from 'react'

export default function AddItemForm({ onAddItem }) {
  const [inputValue, setInputValue] = useState('')
  const isDisabledInput = !inputValue?.trim()

  const handleChangeInput = (e) => setInputValue(e.target.value)

  const handleSubmitForm = (e) => {
    e.preventDefault()
    onAddItem({ packed: false, name: inputValue })
  }

  return (
    <form onSubmit={handleSubmitForm}>
      <h2>Add an item</h2>
      <input
        autoFocus
        value={inputValue}
        onChange={handleChangeInput}
      />
      <button
        disabled={isDisabledInput}
        style={{
          cursor: isDisabledInput ? 'not-allowed' : 'pointer',
          backgroundColor: isDisabledInput ? 'gray' : undefined
        }}
        className={`btn secondary btn--secondary`}
      >
        Add to list
      </button>
    </form>
  )
}

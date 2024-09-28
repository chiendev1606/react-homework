import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

function AddNewItemForm({onAddItem}) {
  const [text, setText] = useState('')
  const inputRef = useRef()

  useEffect(() =>{
    inputRef.current.focus()
  },[])

  const handleInputName = (e) => setText(e.target.value)

  const handleClickAddBtn = (e) =>{
    e.preventDefault()
    onAddItem({id: new Date().getTime(), name: text})
    setText('')
  }

  return (
    <div className="new-list-item-form">
      <form>
        <label htmlFor="new-list-form-input">
          New item:
        </label>
        
        <div className="row">
          <input
            ref={inputRef}
            value={text}
            onChange={handleInputName}
            id="new-list-form-input"
            type="text"
          />
          <button onClick={handleClickAddBtn}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;
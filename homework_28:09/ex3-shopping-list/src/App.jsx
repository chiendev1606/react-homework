
import { useState } from 'react';
import AddNewItemForm from './AddNewItemForm';


function App() {
  const [items, setItems] = useState([])

  const handleAddNewItem =(newItem) =>{
    setItems([...items, newItem])
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {
            items.map(item => (<li key={item.id} >{item.name}</li>))
          }
        </ol>
      </div>
      <AddNewItemForm onAddItem={handleAddNewItem} />
    </div>
  );
}

export default App;
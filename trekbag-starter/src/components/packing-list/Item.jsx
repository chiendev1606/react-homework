export default function Item({ item, onUpdateItem, onDeleteItem }) {
  const handleChangeStatusItem = () => {
    onUpdateItem({ ...item, packed: !item.packed })
  }

  const handleDeleteItem = () => {
    onDeleteItem(item.id)
  }

  return (
    <li
      className='item'
      key={item.id}
    >
      <label>
        <input
          checked={item.packed}
          type='checkbox'
          onChange={handleChangeStatusItem}
        />
        {item.name}
      </label>

      <button onClick={handleDeleteItem}>❌</button>
    </li>
  )
}

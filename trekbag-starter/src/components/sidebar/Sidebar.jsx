import ActionButtonGroup from './ActionButtonGroup'
import AddItemForm from './AddItemForm'

export default function Sidebar({ handleAddItem, handleChangeAllStatus, resetItemsToInitial, removeAllItems }) {
  return (
    <div className='sidebar'>
      <AddItemForm onAddItem={handleAddItem} />
      <ActionButtonGroup
        onChangeAllStatus={handleChangeAllStatus}
        onResetItems={resetItemsToInitial}
        onRemoveItems={removeAllItems}
      />
    </div>
  )
}

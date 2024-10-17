import Button from '../ui/Button'

export default function ActionButtonGroup({ onChangeAllStatus, onResetItems, onRemoveItems }) {
  return (
    <section className='button-group'>
      <Button onClick={() => onChangeAllStatus(true)}>Mark all as complete</Button>
      <Button onClick={() => onChangeAllStatus(false)}>Mark all as incomplete</Button>
      <Button onClick={() => onResetItems()}>Reset to initial</Button>
      <Button onClick={() => onRemoveItems()}>Remove all items</Button>
    </section>
  )
}

export default function ActionButtonGroup({ onChangeAllStatus, onResetItems, onRemoveItems }) {
  return (
    <section className='button-group'>
      <button
        className='btn secondary btn--secondary'
        onClick={() => onChangeAllStatus(true)}
      >
        Mark all as complete
      </button>
      <button
        className='btn secondary btn--secondary'
        onClick={() => onChangeAllStatus(false)}
      >
        Mark all as incomplete
      </button>
      <button
        className='btn secondary btn--secondary'
        onClick={() => onResetItems()}
      >
        Reset to initial
      </button>
      <button
        className='btn secondary btn--secondary'
        onClick={() => onRemoveItems()}
      >
        Remove all items
      </button>
    </section>
  )
}

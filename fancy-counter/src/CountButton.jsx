import { MinusIcon, PlusIcon } from '@radix-ui/react-icons'
import { isReadLimit } from './utils'

export default function CountButton({ onDecrease, onIncrease, count }) {
  return (
    <>
      <button
        className='count-btn'
        disabled={count === 0}
        onClick={onDecrease}
      >
        <MinusIcon className='count-btn-icon' />
      </button>
      <button
        className='count-btn'
        disabled={isReadLimit(count)}
        onClick={onIncrease}
      >
        <PlusIcon className='count-btn-icon' />
      </button>
    </>
  )
}

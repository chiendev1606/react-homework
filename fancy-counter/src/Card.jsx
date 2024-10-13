import { useEffect, useState } from 'react'
import CountButton from './CountButton'
import ResetButton from './ResetButton'
import { isReadLimit } from './utils'

export default function Card() {
  const [count, setCount] = useState(0)

  const handleDecreaseCount = () => {
    setCount(count - 1)
  }

  const handleIncreaseCount = () => {
    setCount(count + 1)
  }

  const handleResetCount = () => setCount(0)

  useEffect(() => {
    const handlePressSpace = (e) => {
      if (e.code !== 'Space' || isReadLimit(count)) return
      setCount((prevCount) => prevCount + 1)
    }

    window.addEventListener('keydown', handlePressSpace)

    return () => {
      window.removeEventListener('keydown', handlePressSpace)
    }
  }, [count])

  return (
    <div className={`card ${isReadLimit(count) ? 'card--limit' : ''}`}>
      <h1 className='title'>{isReadLimit(count) ? 'Limit! Buy Pro for >5' : 'Fancy Counter'}</h1>
      <p className='count'>{count}</p>
      <ResetButton onReset={handleResetCount} />
      <div className='button-container'>
        <CountButton
          count={count}
          onDecrease={handleDecreaseCount}
          onIncrease={handleIncreaseCount}
        />
      </div>
    </div>
  )
}

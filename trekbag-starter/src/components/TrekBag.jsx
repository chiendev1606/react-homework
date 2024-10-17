import { useEffect, useState } from 'react'
import { getDataFromLS, saveDataToLS } from '../utils/LocalStorge'
import Footer from './Footer'
import Header from './Header'
import PackingList from './packing-list/PackingList'
import Sidebar from './sidebar/Sidebar'

export const defaultItems = [
  {
    id: 1,
    name: 'good mood',
    packed: true
  },
  {
    id: 2,
    name: 'passport',
    packed: false
  },
  {
    id: 3,
    name: 'phone charger',
    packed: false
  }
]

export default function TrekBag() {
  const [items, setItems] = useState(getDataFromLS())

  const handleChangeItems = (items) => {
    setItems(items)
  }

  useEffect(() => {
    saveDataToLS(items)
  }, [items])

  const handleUpdateSingleItem = (newItem) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id === newItem.id) {
          return { ...item, ...newItem }
        }
        return item
      })
    )
  }

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const handleAddItem = (item) => {
    setItems((prev) => [...prev, { ...item, id: prev.length }])
  }

  const handleChangeAllStatus = (isCompleted) => {
    setItems((prev) => prev.map((item) => ({ ...item, packed: isCompleted })))
  }

  const resetItemsToInitial = () => {
    setItems([...defaultItems])
  }

  const removeAllItems = () => {
    setItems([])
  }

  const countItemPacked = items.reduce((acc, item) => {
    if (item.packed) {
      acc++
    }
    return acc
  }, 0)

  return (
    <>
      <h1>Trekbag</h1>
      <main>
        <Header countItemPacked={countItemPacked} />
        <PackingList
          items={items}
          onChangeItems={handleChangeItems}
          onUpdateSingleItem={handleUpdateSingleItem}
          onDeleteItem={handleDeleteItem}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          handleChangeAllStatus={handleChangeAllStatus}
          removeAllItems={removeAllItems}
          resetItemsToInitial={resetItemsToInitial}
        />
      </main>
      <Footer />
    </>
  )
}

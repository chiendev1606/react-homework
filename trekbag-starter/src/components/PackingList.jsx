import { useEffect, useState } from 'react'
import FilterPackingList from './FilterPackingList'
import Item from './Item'

export default function PackingList({ items, onChangeItems, onUpdateSingleItem, onDeleteItem }) {
  const [filters, setFilters] = useState({})

  const handleFilterList = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }))
  }

  useEffect(() => {
    if (!filters?.sort) return
    const sortValue = filters?.sort

    if (sortValue === 'default') {
      onChangeItems(items.sort((a, b) => a.id - b.id))
    }

    if (sortValue === 'unpacked') {
      onChangeItems(
        items.sort((a) => {
          return !a.packed ? -1 : 1
        })
      )
    }

    if (sortValue === 'packed') {
      onChangeItems(
        items.sort((a, b) => {
          return b.packed ? -1 : 1
        })
      )
    }
  }, [filters?.sort, items])

  return (
    <ul className='item-list'>
      {items.length === 0 && (
        <section className='empty-state'>
          <h3>Empty Packing List</h3>
          <p>Start by adding some items you absolutely {"don't"} want to forget</p>
        </section>
      )}

      <FilterPackingList
        filters={filters}
        onFiltersChange={handleFilterList}
        items={items}
      />

      {items?.length > 0 &&
        items.map((item) => {
          return (
            <Item
              key={item.id}
              item={item}
              onDeleteItem={onDeleteItem}
              onUpdateItem={onUpdateSingleItem}
            />
          )
        })}
    </ul>
  )
}

import Select from 'react-select'

const optionsFilter = [
  {
    label: 'Sort by default',
    value: 'default'
  },
  {
    label: 'Sort by packed',
    value: 'packed'
  },
  {
    label: 'Sort by unpacked',
    value: 'unpacked'
  }
]

const DEFAULT_VALUE = {
  label: 'Sort by default',
  value: 'default'
}

export default function FilterPackingList({ items, onFiltersChange, filters }) {
  if (items?.length === 0) return null
  const selectValue = optionsFilter.find((option) => option.value === filters.sort) || DEFAULT_VALUE

  return (
    <section className='sorting'>
      <Select
        onChange={(newValue) => {
          onFiltersChange('sort', newValue?.value)
        }}
        value={selectValue}
        options={optionsFilter}
      />
    </section>
  )
}

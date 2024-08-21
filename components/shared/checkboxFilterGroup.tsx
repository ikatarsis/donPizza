'use client'

import React, { ChangeEvent, FC, useState } from 'react'
import { FilterChecboxProps, FilterCheckbox } from './filterCheckBox'
import { Input } from '../ui'

type Item = FilterChecboxProps

interface CheckboxFilterGroupProps {
  title: string,
  items: Item[],
  defaultItems: Item[],
  limit?: number,
  searchInputPlaceholder?: string,
  className?: string,
  onchange?: (values: string[]) => void,
  defaultValue?: string[]
}

export const CheckboxFilterGroup: FC<CheckboxFilterGroupProps> = ({ 
  title, 
  items, 
  defaultItems, 
  limit = 5, 
  searchInputPlaceholder = 'Поиск...',
  className,
  onchange,
  defaultValue
}) => {
  const [showAll, setShowAll] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  const list = showAll 
    ? items.filter((item) => item.text.toLowerCase().includes(searchValue.toLocaleLowerCase()))  
    : defaultItems.slice(0, limit)

  const onChangeSearchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className={className}>
      <p className='font-bold mb-3'>{title}</p>

      {showAll && (
        <div className='mb-5'>
        <Input onChange={onChangeSearchInput} placeholder={searchInputPlaceholder} className='bg-gray-50 border-none' />
      </div>
      )}

      <div className='flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar'>
        {list.map((item, index) => (
          <FilterCheckbox 
            key={index} 
            text={item.text} 
            value={item.value} 
            endAdornment={item.endAdornment} 
            checked={false}
            onCheckedChange={(ids) => console.log(ids)} 
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? 'border-t border-t-neutral-100 mt-4' : ''}>
          <button className='text-primary mt-3' onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Скрыть' : '+ Показать все'}
          </button>
        </div>
      )}
    </div>
  )
}
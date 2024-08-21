import React, { FC } from 'react'
import { FilterCheckbox, Title } from './index'
import { Input, RangeSlider } from '../ui'
import { CheckboxFilterGroup } from './checkboxFilterGroup'
import { ingredients } from './consts'

interface FiltersProps {
  className?: string
}

export const Filters: FC<FiltersProps> = ({ className }) => {
  return (
    <div className={className}>
      <Title text='Фильтрация' size='sm' className='mb-5 font-bold' />
      {/*Фильтрация*/}
      <div className='flex flex-col gap-4'>
        <FilterCheckbox text='Можно собирать' value='1'/>
        <FilterCheckbox text='Новинки' value='2'/>
      </div>
      <div className='mt-5 border-y border-y-neutral-100 py-6 pb-7'>
        {/*Фильтрация по цене*/}
        <div className='font-bold mb-3'>Цена от и до:</div>
        <div className='flex gap-3 mb-5'>
          <Input type='number' placeholder='0' min={0} max={1000} defaultValue={0} />
          <Input type='number' placeholder='1000' min={100} max={1000} />
        </div>
        <RangeSlider min={0} max={1000} step={10} value={[0, 1000]} />
      </div>
      {/*Фильтрация ингрдиенты*/}
      <CheckboxFilterGroup
        title='Ингредиенты'
        className='mt-5'
        limit={6}
        defaultItems={ingredients}
        items={ingredients}
      />
    </div>
  )
}
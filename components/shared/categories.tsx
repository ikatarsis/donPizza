'use client'

import { cn } from '@/lib/utils'
import { useCategoryStore } from '@/store/category'
import React, { FC } from 'react'

const categories = [
  { id: 1, name: 'Пицца' },
  { id: 2, name: 'Комбо' },
  { id: 3, name: 'Закуски' },
  { id: 4, name: 'Коктейли' },
  { id: 5, name: 'Кофе' },
  { id: 6, name: 'Напитки' },
  { id: 7, name: 'Десерты' },
]

interface CategoriesProps {
  className?: string
}

export const Categories: FC<CategoriesProps> = ({ className }) => {
  const categoryActiveId = useCategoryStore((state) => state.activeId)

  return (
    <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
      {categories.map(({id, name}, index) => (
        <a 
          key={index} 
          className={cn(
            'flex items-center font-bold h-11 rounded-2xl px-5', 
            categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
          )}
          href={`/#${name}`}
        >
          <button>{name}</button>
        </a>
      ))}
    </div>
  )
}
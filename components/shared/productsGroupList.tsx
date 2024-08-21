'use client'

import React, { FC, useEffect, useRef } from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './productCard'
import { useIntersection } from 'react-use'
import { useCategoryStore } from '@/store/category'

interface ProductsGroupListProps {
  title: string,
  items: any,  
  categoryId: number,
  className?: string,
  listClassName?: string,
}

export const ProductsGroupList: FC<ProductsGroupListProps> = ({ title, items, className, listClassName, categoryId }) => {
  const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
  const intersectionRef = useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 0.4
  })

  useEffect(() => {
    if(intersection?.isIntersecting) {
      setActiveCategoryId(categoryId)
    }
  }, [categoryId, intersection?.isIntersecting, title])

  return (
    <div className={className} id={title} ref={intersectionRef}>
      <Title text={title} size='lg' className='font-extrabold mb-5' />

      <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
        {items.map((item, index) => (
          <ProductCard 
            key={item.id}
            id={item.id}
            name={item.name}
            imageUrl={item.imageUrl}
            price={item.items[0].price}
          />
        ))}
      </div>
    </div>
  )
}
import { Categories, Container, Filters, SortPopup, Title, TopBar, ProductCard, ProductsGroupList } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Container className='mt-10'>
        <Title text='Все пиццы' size='lg' className='font-extrabold' />
      </Container>
      <TopBar />
      <Container className='mt-10 pb-14'>
        <div className='flex gap-[80px]'>
          <div className='w-[250px]'>
            <Filters />
          </div>

          <div className='flex-1'>
            <div className='flex flex-col gap-16'>
              <ProductsGroupList title='Пицца' categoryId={1} items={[{
                id: 1, 
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 2, 
                name: 'Пицца мясная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 3, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 4, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 5, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              }]} />

              <ProductsGroupList title='Комбо' categoryId={2} items={[{
                id: 1, 
                name: 'Пицца',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EF438E93884BFEBFE79D11095AE2D4.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 2, 
                name: 'Пицца мясная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EEBEEDA4B0427DB077A5ADBD30D154.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 3, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 4, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              },
              {
                id: 5, 
                name: 'Пицца сырная',
                imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                price: 1200,
                items: [{price: 550}]
              }]} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

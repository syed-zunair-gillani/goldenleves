import React from 'react'
import api from '@/config/api'

async function getData() {
  const dataForProducts = {
    per_page: 30,
  };

  const { data } = await api.get('products', dataForProducts);
  return {
    products: data
  }
}


const Shop = async () => {
  const { products } = await getData()

  return (
    <div className='text-gray-300'>{JSON.stringify(products, null, 2)}</div>
  )
}

export default Shop
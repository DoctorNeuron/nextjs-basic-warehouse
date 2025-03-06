import { GetCountProduct } from '@/database/database';
import React from 'react';

export default async function TotalProducts() {

  const productTotal = await GetCountProduct();
  await new Promise(res => setTimeout(res, 5000));

  return (
    <h1 className='text-bold text-4xl'>{productTotal}</h1>
  );
}

import { GetTop5Products } from '@/database/database';
import Image from 'next/image';
import React from 'react';

export default async function Top5Products() {
  const products = await GetTop5Products();
  await new Promise(res => setTimeout(res, 8000));

  return (
    <div className='w-full flex flex-col justify-between '>
      {
        products.map(p => (
          <div key={p.id} className='flex gap-3 items-center'>
            <Image src={p.image} alt={p.name} width={35} height={35} />
            <span>{p.name}</span>
          </div>
        ))
      }
    </div>
  );
}

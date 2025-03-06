import { GetProduct } from '@/database/database';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ProductPage() {
  const product = await GetProduct({});
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-3xl font-bold '>All Products</h1>
      <div className='flex w-full flex-wrap gap-4'>
        {
          product.map(p => (
            <Link key={p.id} href={`/new-product/${p.id}`} passHref>
              <div className='p-2 bg-sky-800 w-32 h-32 flex flex-col gap-3 justify-center rounded-sm hover:bg-sky-900 cursor-pointer'>
                <div className='w-full flex justify-center'>
                  <Image src={p.image} alt={p.name} width={75} height={75} />
                </div>
                <p className='text-sm text-center'>{p.name}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  );
}

import { GetProductByID } from '@/database/database';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default async function ProductIDPage({ params }: { params: Promise<{ id: string }> }) {
  const ID = (await params).id;
  const product = await GetProductByID(ID);

  if (!product) throw new Error(`Product not found. Let's take you back to front menu. ID: ${ID}`);

  return (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between w-full'>
        <h1 className='text-3xl font-bold'>{product.name}</h1>
        <Link href='/product' className='bg-sky-800 rounded w-fit p-3 cursor-pointer hover:bg-sky-900'>Go Back</Link>
      </div>
      <div className='flex gap-4'>
        <div className='bg-sky-800 p-4 rounded-md'>
          <Image src={product.image} alt={product.name} width={90} height={90}/>
        </div>
        <div>
          <div>Category: {product.category}</div>
          <div>Price: {product.price}</div>
        </div>
      </div>
    </div>
  );
}

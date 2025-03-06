import { GetProductByID } from '@/database/database';
import Image from 'next/image';
import React from 'react';

export default async function DetailPageSide({ params }: { params: Promise<{ id: string }> }) {
  const product = await GetProductByID((await params).id);

  if (!product) throw new Error("Product not found");

  return (
    <div className='w-full bg-gray-800 p-2 rounded-sm'>
      <div className='p-2 flex justify-center bg-slate-700 rounded-sm mb-5'>
        <Image src={product.image} alt={product.name} width={90} height={90}/>
      </div>
      <div className='w-full'>
        <table className='w-full'>
          <tbody>
            <tr>
              <td className='bg-slate-700 p-1' width='50%'>Name</td>
              <td className='pl-1 bg-slate-900'>{product.name}</td>
            </tr>
            <tr>
              <td className='bg-slate-700 p-1' width='50%'>Category</td>
              <td className='pl-1 bg-slate-900'>{product.category}</td>
            </tr>
            <tr>
              <td className='bg-slate-700 p-1' width='50%'>Price</td>
              <td className='pl-1 bg-slate-900'>{product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

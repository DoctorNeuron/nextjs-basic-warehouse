'use client';
import Link from 'next/link';
import React from 'react';

export default function ProductIDErrorPage({ error } : { error: Error }) {
  return (
    <div className='flex flex-col gap-3'>
      <p>{error.message}</p>
      <Link href='/product' className='bg-sky-800 rounded w-fit p-3 cursor-pointer hover:bg-sky-900'>Go Back</Link>
    </div>
  );
}

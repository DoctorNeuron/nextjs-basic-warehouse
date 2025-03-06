import Image from 'next/image';
import React from 'react';

export default function Homepage() {
  return (
    <div className='w-full flex justify-center flex-col items-center gap-12 mt-12'>
      <Image src="/vercel.svg" alt='Logo' width={90} height={90} />
      <h1 className='text-4xl font-bold'>Welcome to my product page 🤩</h1>
    </div>
  );
}

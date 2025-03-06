import DashboardLoading from '@/components/dashboard/DashboardLoading';
import Top5Products from '@/components/dashboard/Top5Products';
import TotalProducts from '@/components/dashboard/TotalProducts';
import React, { Suspense } from 'react';

export default async function DashboardPage() {

  await new Promise(res => setTimeout(res, 3000));

  return (
    <div className='w-full flex gap-3'>
      <div className='p-2 bg-sky-800 rounded-sm'>
        <h1 className='font-extrabold text-2xl'>Total Products</h1>
        <Suspense fallback={<DashboardLoading/>}>
          <TotalProducts/>
        </Suspense>
      </div>
      <div className='p-2 bg-sky-800 rounded-sm'>
        <h1 className='font-extrabold text-2xl'>Top 5 Products</h1>
        <Suspense fallback={<DashboardLoading/>}>
          <Top5Products/>
        </Suspense>
      </div>
    </div>
  );
}

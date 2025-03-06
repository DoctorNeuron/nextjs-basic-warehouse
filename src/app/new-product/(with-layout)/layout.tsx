import React from 'react';

interface NewProductLayoutPageProps {
  detail: React.ReactNode,
  children: React.ReactNode
}

export default function NewProductLayoutPage(props: NewProductLayoutPageProps) {
  return (
    <div className='grid grid-cols-[7fr_3fr]'>
      <div>
        {props.children}
      </div>
      {props.detail}
    </div>
  );
}

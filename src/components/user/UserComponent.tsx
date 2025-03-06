'use client';

import { Users } from '@/interface/users';
import classNames from 'classnames';
import React, { useState } from 'react';

type UserComponentProps = {
  users: Users[]
}

export default function UserComponent(props: UserComponentProps) {
  const [state, setState] = useState(0);
  return (
    <div className='flex w-full gap-3 flex-col'>
      {
        props.users.map(x => (
          <div key={x.id} className={classNames('p-2 bg-sky-800 cursor-pointer', {
            'bg-yellow-600': state === x.id
          })} onClick={() => setState(x.id)}>
            <h1 className='text-xl font-bold'>{x.name}</h1>
            <p className='text-sm italic'>Street: {x.address.street}</p>
          </div>
        ))
      }
    </div>
  );
}

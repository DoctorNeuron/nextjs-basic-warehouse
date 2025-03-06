import { Users } from '@/interface/users';
import React from 'react';
import UserComponent from '../../components/user/UserComponent';

export default async function Page() {
  const result: Users[] = await (await fetch('https://jsonplaceholder.typicode.com/users/')).json();

  return <UserComponent users={result} />;
}

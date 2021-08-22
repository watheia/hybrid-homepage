import React from 'react';
import { useToggle } from './use-toggle';

export const BasicuseToggle = () => {
  const { count, increment } = useToggle();

  return (
    <>
      <h1>The count is {count}</h1>
      <button onClick={increment}>increment</button>
    </>
  );
};

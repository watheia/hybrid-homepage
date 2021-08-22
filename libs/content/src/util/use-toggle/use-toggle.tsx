import { useState } from 'react';

export function useToggle() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return { count, increment }
}

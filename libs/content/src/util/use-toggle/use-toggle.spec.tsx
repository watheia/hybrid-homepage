import { renderHook, act } from '@testing-library/react-hooks';
import { useToggle } from './use-toggle';

it('should increment counter', () => {
  const { result } = renderHook(() => useToggle())
  act(() => {
    result.current.increment()
  })
  expect(result.current.count).toBe(1)
})

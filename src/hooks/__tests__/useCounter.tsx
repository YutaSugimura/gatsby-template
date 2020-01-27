import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../useCounter';

test('should use Counter', () => {
  const { result } = renderHook(() => useCounter(0));

  expect(result.current.count).toBe(0);
  expect(typeof result.current.increment).toBe('function');

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(1);
});

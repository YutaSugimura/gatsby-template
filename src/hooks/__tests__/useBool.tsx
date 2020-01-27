import { renderHook, act } from '@testing-library/react-hooks';
import useCounter from '../useCounter';
import useBool from '../useBool';

test('should use Boolean', () => {
  const { result } = renderHook(() => useBool());

  expect(result.current.bool).toBe(false);
  expect(typeof result.current.setTrue).toBe('function');

  act(() => {
    result.current.setTrue();
  });
  expect(result.current.bool).toBe(true);

  act(() => {
    result.current.setFalse();
  });
  expect(result.current.bool).toBe(false);
});

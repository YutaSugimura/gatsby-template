import counter, { increment, decrement, setCount } from './counter';

describe('count reducer', () => {
  it('should handle initial state', () => {
    expect(counter(undefined, increment)).toEqual({ count: 1 });
  });

  it('should handle increment', () => {
    expect(
      counter(
        { count: 1 },
        {
          type: increment.type,
        },
      ),
    ).toEqual({ count: 2 });

    expect(
      counter(
        { count: 2 },
        {
          type: decrement.type,
        },
      ),
    ).toEqual({ count: 1 });

    expect(
      counter(
        { count: 1 },
        {
          type: setCount.type,
          payload: 10,
        },
      ),
    ).toEqual({ count: 10 });

    expect(
      counter(
        { count: 10 },
        {
          type: setCount.type,
          payload: 0,
        },
      ),
    ).toEqual({ count: 0 });
  });
});

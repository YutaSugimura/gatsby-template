import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as middleware from '../index';
import { setCount } from '../../actionReducer/counter';

export const mockStore = configureMockStore([thunk]);

describe('tests middleware', () => {
  it('tests async ', async () => {
    const store = mockStore({ counter: { count: 0 } });
    await store.dispatch(middleware.asyncIncrement(0));
    const expectedActions = [setCount(1)];

    setTimeout(() => {
      expect(store.getActions()).toEqual(expectedActions);
    }, 1100);
  });
});

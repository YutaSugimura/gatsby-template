import React from 'react';
import { mount } from 'enzyme';
import Count from '../../pages/page-2';

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: () => {
    0;
  },
  useDispatch: () => mockDispatch,
}));

describe('', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('Redux Hooks', () => {
    const component = mount(<Count />);
    component.find('button').simulate('click');
    expect(mockDispatch).toBeCalled();
  });
});

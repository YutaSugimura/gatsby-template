import React from 'react';
import renderer from 'react-test-renderer';
import SimpleEmotion from '../emotionComponents/simple';
import WithButton from '../emotionComponents/withEmotion';

test('renders with correct styles', () => {
  const tree = renderer
    .create(<WithButton>emotion button</WithButton>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders component styles', () => {
  const tree = renderer.create(<SimpleEmotion />).toJSON();
  expect(tree).toMatchSnapshot();
});

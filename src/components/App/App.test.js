import React from 'react';
import ReactDOM from 'react-dom';
import App from '.';
import renderer from 'react-test-renderer';

xit('renders without crashing', () => {
  const tree=renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

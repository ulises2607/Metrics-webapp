import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import Details from '../pages/Details';
import store from '../Redux/store';

test('Snapshot del componente Details', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <Details />
      </MemoryRouter>
    </Provider>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

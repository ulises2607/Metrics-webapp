import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DetailsCard from '../Components/DetailsCard';
import store from '../Redux/store';

jest.mock('../Redux/Details/detailsSlice', () => ({
  fetchDetail: jest.fn(),
  showDetails: jest.fn(),
}));

const mockStore = configureStore([]);
const storeMoc = mockStore({});

test('debería mostrar el nombre y la ciudad importante correctamente', () => {
  const props = {
    name: 'Nombre de prueba',
    impCity: 'Ciudad Importante de Prueba',
    show: true,
    detail: { key1: 'valor1', key2: 'valor2' },
  };
  /* eslint-disable react/jsx-props-no-spreading */
  render(
    <Provider store={storeMoc}>

      <DetailsCard {...props} />
    </Provider>,
  );
});

test('debería coincidir con el snapshot después de hacer clic en el botón', () => {
  const props = {
    name: 'Nombre de prueba',
    impCity: 'Ciudad Importante de Prueba',
    show: false,
    detail: {},
  };
  render(

    <Provider store={store}>
      <DetailsCard {...props} />
    </Provider>,
  );
});

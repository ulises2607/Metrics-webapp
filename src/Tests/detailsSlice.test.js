import { configureStore } from '@reduxjs/toolkit';
import detailsSlice, { fetchDetail, showDetails } from '../Redux/Details/detailsSlice';

describe('detailsSlice', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        details: detailsSlice.reducer,
      },
    });
  });

  it('debería mostrar los detalles', async () => {
    await store.dispatch(fetchDetail('Salta')).unwrap();

    const state = store.getState().details;

    expect(state.cities[0].provinces[15].detail).toEqual(expect.any(Object));
    expect(state.cities[0].provinces[15].show).toBe(false);
  });

  it('debería cambiar el estado de showDetails', () => {
    store.dispatch(showDetails('Salta'));

    const state = store.getState().details;

    expect(state.cities[0].provinces[15].show).toBe(true);
  });
});

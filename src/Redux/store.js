import { configureStore } from '@reduxjs/toolkit';
import homeSlice from './Home/HomeSlice';
import detailsSlice from './Details/detailsSlice';

const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
    details: detailsSlice.reducer,
  },
});

export default store;

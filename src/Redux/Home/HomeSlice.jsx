import { createSlice } from '@reduxjs/toolkit';
import { SOUTH_AMERICA } from '../../database/database';

const initialState = {
  home: SOUTH_AMERICA,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
  },
});

export default homeSlice;

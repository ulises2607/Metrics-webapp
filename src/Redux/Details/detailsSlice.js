import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ejemplo } from '../../database/database';

const API_KEY = '3e341f1094147b1dd3b25d397b2c892e';

const initialState = {
  cities: ejemplo,
  updatedDetails: [],
};

const getData = async (longitude, latitude) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
  const data = await response.json();
  return data.list[0].components;
};

export const fetchDetail = createAsyncThunk('home/fetchHome', async (city) => {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
  const dataLocation = await response.json();
  const { lat, lon } = dataLocation[0];
  const data = await getData(lon, lat);
  return { data, city };
});

const detailsSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {
    showDetails: (state, action) => {
      const updatedState = {
        ...state,
        cities: state.cities.map((country) => ({
          ...country,
          provinces: country.provinces.map((province) => ({
            ...province,
            show: province.important_city === action.payload ? !province.show : province.show,
          })),
        })),
      };
      return updatedState;
    },
  },
  extraReducers: {
    [fetchDetail.fulfilled]: (state, action) => {
      const { data, city } = action.payload;

      const updatedState = {
        ...state,
        cities: state.cities.map((country) => ({
          ...country,
          provinces: country.provinces.map((province) => ({
            ...province,
            detail: province.important_city === city ? data : province.detail,
          })),
        })),
      };

      return updatedState;
    },
  },
});

export const { showDetails } = detailsSlice.actions;

export default detailsSlice;

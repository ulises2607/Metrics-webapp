import { createSlice } from "@reduxjs/toolkit";
import { ejemplo } from "../../database/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = '3e341f1094147b1dd3b25d397b2c892e';


const initialState = {
    cities: ejemplo,
    updatedDetails: [],
};

const getData = async (longitude, latitude) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);
        const data = await response.json();
        return data.list[0].components;
    } catch (error) {
        console.log(error, 'error en el getData');
    }
}

export const fetchDetail = createAsyncThunk('home/fetchHome', async ( city ) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`);
        const dataLocation = await response.json();
        console.log(dataLocation, 'data con info de la ciudad');
        const { lat, lon } = dataLocation[0];
        const data = await getData(lon, lat);
        console.log(data, 'data del fetchDetail');
        return {data, city};
    } catch (error) {
        console.log(error, 'error en el fetchDetail');
    }

    return final;
});

const detailsSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        showDetails: (state, action) => {
            console.log("Antes de actualizar el estado:", state);
      
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
      
            console.log("Después de actualizar el estado:", updatedState);
            return updatedState;
        },
    },
    extraReducers: {
        [fetchDetail.fulfilled]: (state, action) => {
            const { data, city } = action.payload;
            console.log("Antes de actualizar el estado en fetchDetail.fulfilled:", state);
      
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
      
            console.log("Después de actualizar el estado en fetchDetail.fulfilled:", updatedState);
            return updatedState;
          },
}})


export const { showDetails } = detailsSlice.actions;

export default detailsSlice;


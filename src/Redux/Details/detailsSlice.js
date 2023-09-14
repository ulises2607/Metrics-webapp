import { createSlice } from "@reduxjs/toolkit";
import { ejemplo } from "../../database/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = '3e341f1094147b1dd3b25d397b2c892e';


const initialState = {
    cities: ejemplo,
    details:[]
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
        return data;
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
            return {
              ...state,
              cities: state.cities.map((country) => ({
                ...country,
                provinces: country.provinces.map((province) => ({
                  ...province,
                  show: province.important_city === action.payload ? !province.show : province.show,
                })),
              })),
            };
          } 
        },
    extraReducers: {
        [fetchDetail.fulfilled]: (state, action) => {
            console.log(action.payload, 'action.payload del fetch llamadi desde el handle');
        //     return {
        //         ...state,
        //         cities: state.cities.map((country) => ({
        //             ...country,
        //             provinces: country.provinces.map((province) => ({
            
        // }
    }
}})


export const { showDetails } = detailsSlice.actions;

export default detailsSlice;


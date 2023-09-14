import { createSlice } from "@reduxjs/toolkit";
import { ejemplo } from "../../database/database";
import { createAsyncThunk } from "@reduxjs/toolkit";
const API_KEY = '3e341f1094147b1dd3b25d397b2c892e';


const initialState = {
    cities: ejemplo,
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

export const fetchDetail = createAsyncThunk('home/fetchHome', async ( country ) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${country}&appid=${API_KEY}`);
        const data = await response.json();
        console.log(data, 'data');
        const { lat, lon } = data[0];
        const data2 = await getData(lon, lat);
        console.log(data2, 'data2');
        return data2;
    } catch (error) {
        console.log(error, 'error en el fetchhome');
    }

    return final;
});

const detailsSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {

    },
    extraReducers: {
        [fetchDetail.fulfilled]: (state, action) => {
            state.details = action.payload;
        }
    }
});


export default detailsSlice;


import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SOUTH_AMERICA } from "../../database/database";

const initialState = {
    home: SOUTH_AMERICA,
    detail: [],
    error: null,
}

const getData = async (longitude, latitude) => {
    try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=3e341f1094147b1dd3b25d397b2c892e`);
        const data = await response.json();
        return data.list[0].components;
    } catch (error) {
        console.log(error, 'error en el getData');
    }
}

export const fetchHome = createAsyncThunk('home/fetchHome', async ( country ) => {
    const name = ['Salta', 'BuenosAires', 'Cordoba', 'Mendoza', 'Rosario', 'Tucuman'];
    const final = [];

    await Promise.all(
        name.map(async (element) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${element}&appid=3e341f1094147b1dd3b25d397b2c892e`);
                const data = await response.json();
                const { lat, lon } = data[0];
                const data2 = await getData(lon, lat);
                final.push(data2)
                // final.push(data[0]);
            } catch (error) {
                console.log(error, 'error en el fetchhome');
            }
        })
    );

    return final;
});





const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHome: (state, action) => {
            state.home = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchHome.pending, (state) => {
            state.error = undefined;
          })
        .addCase(fetchHome.fulfilled, (state, action) => {
            state.detail = action.payload;
            const timestamp = 1694631600;

            const date = new Date(timestamp * 1000);

            const fechaLegible = date.toLocaleString();

            console.log(fechaLegible);
            console.log(state.home);
        })
    }
})

export const { setHome } = homeSlice.actions

export default homeSlice

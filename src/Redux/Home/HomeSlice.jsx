import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SOUTH_AMERICA } from "../../database/database";

const API_KEY = '3e341f1094147b1dd3b25d397b2c892e';

const initialState = {
    home: SOUTH_AMERICA,
    error: null,
}




const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setHome: (state, action) => {
            state.home = action.payload
        }
    },
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(fetchHome.pending, (state) => {
    //         state.error = undefined;
    //       })
    //     .addCase(fetchHome.fulfilled, (state, action) => {
    //         state.detail = action.payload;
    //         const timestamp = 1694631600;

    //         const date = new Date(timestamp * 1000);

    //         const fechaLegible = date.toLocaleString();

    //         console.log(fechaLegible);
    //         console.log(state.home);
    //     })
    // }
})

export const { setHome } = homeSlice.actions

export default homeSlice

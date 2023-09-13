import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    home: [],
    error: null,
}

export const fetchHome = createAsyncThunk('home/fetchHome', async () => {
    const name = ['Salta', 'Buenos Aires', 'Cordoba', 'Mendoza', 'Rosario', 'Tucuman'];
    const final = [];

    await Promise.all(
        name.map(async (element) => {
            try {
                const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${element}&appid=3e341f1094147b1dd3b25d397b2c892e`);
                const data = await response.json();
                final.push(data[0]);
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
            state.home = action.payload;
        })
    }
})

export const { setHome } = homeSlice.actions

export default homeSlice

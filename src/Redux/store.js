import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./Home/HomeSlice";

const store = configureStore({
    reducer: {
        home: homeSlice.reducer,
    }
});

export default store;
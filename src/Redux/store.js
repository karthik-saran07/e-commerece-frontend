import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartCounter"

const store = configureStore({
    devTools:true,
    reducer:{
        cartOperation : cartSlice
    }
})

export default store;
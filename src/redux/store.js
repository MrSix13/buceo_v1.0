import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./slices/ProductsSlice";


const store = configureStore({
    reducer:{
        products: ProductsSlice
    }
})


export default store;
import {createSlice,  } from '@reduxjs/toolkit';
import { collections } from '../../data';
import { getAllProducts } from '../thunk-actions/productActions';



const initialState={
    loading: false,
    allProducts: localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [],
    backupProducts:localStorage.getItem("Products") ? JSON.parse(localStorage.getItem("Products")) : [],
    collections: collections
}


export const productSlice = createSlice({
    name:"Products",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(getAllProducts.rejected,(state,action)=>{
            state.loading = false;

        })
        .addCase(getAllProducts.pending,(state,action)=>{
            state.loading = true;
        })
        .addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.allProducts = action.payload;
            state.backupProducts = action.payload;
        })
        
    }
});

export default productSlice.reducer;
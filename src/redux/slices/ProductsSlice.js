import {createSlice,  } from '@reduxjs/toolkit';
import { getAllProducts } from '../thunk-actions/productActions';



const initialState={
    loading: false,
    allProducts:[],
    backupProducts:[],
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
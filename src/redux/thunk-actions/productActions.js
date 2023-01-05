import { products } from "../../data"
import {createAsyncThunk} from '@reduxjs/toolkit'

export const getAllProducts = createAsyncThunk(
    'products',
    async()=>{
        return products
    }
)


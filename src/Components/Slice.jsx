import { createSlice } from "@reduxjs/toolkit";
import arry from "./Carwale.json"
export const Slice=createSlice({
    name:"carwale",
    initialState:{
           arr:arry.CarWale,
           Brand:arry.Brand
    },
    reducers:{
       update:(state,action)=>{
           state.Brand=(action.payload) 
    }

    }
})

export default Slice.reducer
export const {update}=Slice.actions
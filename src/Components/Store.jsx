import { configureStore } from "@reduxjs/toolkit";
import star from "./Slice"
export const cv=configureStore({
    reducer:{data:star}
})
import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import { Provider } from "react-redux"
import { cv } from "../Store"
import { Home } from "../Home/Home"
import Nav from "./Nav"
import { Footer } from "./Footer"
import { Detail } from "../Cardetail/Detail"
import { BrandPage } from "../Brand/Brand"
import { Comparison } from "../Compare/Comparison"
import { Choice } from "../Choice/Choice"

export const Routings=()=>{
    return(<>
        <Provider store={cv}>
        <BrowserRouter>
        <Nav/>
        <Routes>           
            <Route path="/carwale-project/" element={<Home/>}></Route>
            <Route path="/Brand" element={<BrandPage/>}></Route> 
            <Route path="/Spec" element={<Detail/>}></Route>
            <Route path="/Comparisn" element={<Comparison/>}></Route> 
             <Route path="/Choice" element={<Choice/>}></Route>
 
        </Routes>
        <Footer/>
        </BrowserRouter>
        </Provider>
    </>)
}
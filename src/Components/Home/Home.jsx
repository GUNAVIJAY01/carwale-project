import React from "react"
import { Banner } from "./Banner/Banner"
import { Carcaro } from "./CarCarousel/CarC"
import { CarChoices } from "./CarChoice/Carchoice"
import { Brand } from "./Brand/Brand"

export const Home=()=>{ 
    return(<>
        <Banner/>
        <Carcaro/>
        <CarChoices/>
        <Brand/>
    </>)
}
import React from "react"
import { Box,Container,Typography,Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export const CarChoices=()=>{
    const state=useSelector(({data})=>(data))
    let trss=useNavigate()

    let array=[{button:"UNDER 5 lakh",price:"5 lakh",Price:5},{button:"UNDER 6 lakh",Price:6,price:"6 lakh"},{button:"UNDER 7 lakh",Price:7,price:"7 lakh"},{button:"UNDER 8 lakh",price:"8 lakh",Price:8},{button:"UNDER 10 lakh",Price:10,price:"10 lakh"},
    {button:"UNDER 15 lakh",Price:15,price:"15 lakh"},{button:"UNDER 20 lakh",Price:20,price:"20 lakh"},{button:"UNDER 25 lakh",Price:25,price:"25 lakh"},{button:"UNDER 30 lakh",Price:30,price:"30 lakh"},{button:"LUXURY CAR",Price:"Luxury Car",price:"Luxury Car"}]

   let clkme=(a)=>{
    
        trss(`/Choice?id=${a}`)

}

return (<Container>
        <Box>
            <h3>Find The Cars Of Your Choice</h3>
        </Box>

        <Box sx={{backgroundColor:"#e1e1e175",border:"1px solid lightgray",textAlign:"center",padding:{xs:"10px",md:"10px 40px"},margin:{xs:"0px",md:"0px"}}}>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
            
            {array.map((val,ind)=>{
                return(<Box key={ind} sx={{width:{xs:"45%",sm:"16.66%",lg:"31%"},padding:{xs:"10px 5px",lg:"10px 5px"}}}>
                <Button variant="outlined" onClick={()=>clkme(val.Price)} 
                sx={{backgroundColor:"white",width:{xs:"100%",md:"80%"},fontSize:{xs:"10px",md:"12px"},
                padding:{xs:"0 5px"},borderRadius:"25px",height:{xs:"30px",md:"45px"},color:"gray",border:"1px solid lightgray"}}>
                    {val.button}</Button>
            </Box>    )
            })}
            
        </Box>
        </Box>

    </Container>)
}
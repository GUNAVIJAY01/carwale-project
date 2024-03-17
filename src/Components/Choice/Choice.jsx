import { Box, Container } from "@mui/material"
import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const Choice=()=>{

    const[AB,setAb]=useState([])
    
    
    
    let state=useSelector(({data})=>data)
    
    let [paara]=useSearchParams()
    let ads=paara.get("id")
useEffect(()=>{
    if(ads==="Luxury Car"){
        let ab=state.Brand.map((v,i)=>{
            return v.Collection
        })
       let as= ab.flat().filter((vl,ind)=>{
        return Math.round(vl.Price)>=40
       })
       setAb(as)    
    }
    else{
    let ab=state.Brand.map((v,i)=>{
        return v.Collection
    })
   let as= ab.flat().filter((vl,ind)=>{
    return Math.round(vl.Price)<=ads
   })
   setAb(as)
}
},[])

let array=[
        {button:"UNDER 5 lakh",price:"5 lakh",Price:5},{button:"UNDER 6 lakh",Price:6,price:"6 lakh"},
        {button:"UNDER 7 lakh",Price:7,price:"7 lakh"},{button:"UNDER 8 lakh",price:"8 lakh",Price:8},
        {button:"UNDER 10 lakh",Price:10,price:"10 lakh"},{button:"UNDER 15 lakh",Price:15,price:"15 lakh"},
        {button:"UNDER 20 lakh",Price:20,price:"20 lakh"},{button:"UNDER 25 lakh",Price:25,price:"25 lakh"},
        {button:"UNDER 30 lakh",Price:30,price:"30 lakh"},{button:"LUXURY CAR",Price:"Luxury Car",price:"Luxury Car"}]
        
let sa=array.find((vl,sa)=>{
    return vl.Price==ads?vl:""
})

    let nex=useNavigate()

let Nextpge=(s)=>{
    nex(`/spec?name=${s}`)
        
    }

return (<>
            

            <Container maxWidth="lg">
            <Box>
                <h3 style={{margin:"0 10px"}}>{AB.length} Car Under {sa.price}</h3>   
            </Box>
                <Box sx={{display:"flex",flexWrap:"wrap"}}>
        {AB.map((vl,ind)=>{

            return (<Box sx={{width:{xs:"100%",md:"50%"},padding:"5px 15px",textAlign:"center",margin:"10px 0",}} key={ind}>
                <Box sx={{border:"1px solid lightgray"}}>
                    <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center"}}>
                        <Box sx={{width:"50%",cursor:"pointer"}} onClick={()=>Nextpge(vl.CarName)}>
                    <img src={vl.CarImg} width="100%"/>

                        </Box>
                        <Box sx={{width:"50%"}}>
                        <Box sx={{display:"flex",alignItems:"center",width:"100%"}}>
                        <h4 style={{margin:"0px 0 2px 0"}}>{vl.CarName}</h4>  
                        <i ><ChevronRightIcon/></i>
                        </Box>
                        <Box sx={{textAlign:"start",fontSize:"15px"}}>
                        <h4 style={{padding:"2px 0"}}>Rs.{vl.Price} Lakh</h4>
                        <p style={{padding:"2px 0"}}> Avg.Ex-Showroom price</p>
                        <p style={{color:"blue",padding:"2px 0"}}>show price in my city</p>
                        </Box>
                        </Box>

                        </Box>
            </Box>
            </Box>)
        })
        }
</Box>
</Container>
    </>)
}
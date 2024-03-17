import React from "react"
import { Box,Container,Typography } from "@mui/material" 
import {useSelector} from "react-redux"
import { useNavigate } from "react-router-dom"
export const Brand=()=>{
    
    const state=useSelector((ds)=>ds.data)

    const nav=useNavigate()
    let Brand=(id)=>{
        nav(`/Brand?id=${id}`)
    }
    return (
        
       <Box sx={{margin:"10px 0 0 0",width:{xs:"100%"}}}>
    <Container maxWidth="lg">
        <Box component="h3">
                All Brands 
        </Box>
        <Box sx={{width:{xs:"100%"},padding:"",display:{xs:"block"},margin:"10px  0"}}>
        <Box sx={{display:"flex",flexWrap:"wrap"}}>
        {state.Brand.map((val,ind)=>{
            return(<Box key={ind} sx={{width:{xs:"32%",md:"33.33%",lg:"16.66%"},padding:{xs:"0",md:"10px"},border:"1px solid lightgray"}}>
                <Box sx={{padding:{xs:"10px 4px"},width:"100%",height:"80%",textAlign:"center"}}>
                <Box sx={{cursor:"pointer"}} onClick={()=>Brand(val.BrandId)}>
                <img src={val.BrandImage} width="100px"/>        
                <Typography>{val.Name}</Typography>
            </Box>
            </Box>
            </Box>)
        })
        }
        </Box>
        </Box>
        
    </Container>
    </Box>     )
}
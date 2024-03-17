import { Box, Button, Typography } from "@mui/material"
import React from "react"
import SearchIcon from '@mui/icons-material/Search';

export const Banner=()=>{
     

    return (<Box component="div" sx={{backgroundImage:"url('https://imgd.aeplcdn.com/1920x580/media/cw/nnqo5bb_1695261.jpg')",backgroundPosition:{xs:"left",md:"center",sm:"left"},backgroundRepeat:"no-repeat",backgroundSize:"cover",height:{xs:"100%",sm:"100%",lg:"100%"},display:{xs:{width:"100%"}}}} className="banner" >
        <Box component="div"className="row" sx={{alignItems:"center",justifyContent:"center",height:{xs:"50vh",md:"80vh"},position:"relative"}}>
    <Box sx={{display:{xs:""},width:{xs:"80%",md:"50%"},textAlign:"center",position:"absolute",right:{lg:"25%"},bottom:{xs:"10px",sm:"60px",md:"10px"}}}>
      <Box component="h1" sx={{color:"white",margin:1,fontSize:{xs:"18px"}}} >FIND THE RIGHT CAR</Box>  
    
    <Box sx={{backgroundColor:"white",padding:"2px" ,position:"relative",display:"flex"}}>
    
    <Box >
      <select style={{height:"40px",border:"none",outline:"none",padding:"8px"}}>
           <option>New</option>
           <option>Used</option>
      </select>
    </Box>        
    <Box component="span"sx={{margin:"7px 0 0 0",}}><SearchIcon/></Box>
    <Box component="input" height="40px" placeholder="Type to select car name,e.g.Citreon C3 Aircross"sx={{outline:"none",width:{xs:"100%",md:"100%"},padding:"0 10px",border:"none"}}/>
    <Button variant="contained"color="error" maxWidth>Search</Button>

    </Box>
    <Box className="row"sx={{justifyContent:"space-between",margin:"10px 0",fontSize:{xs:"13px",md:"16px"}}}>
        <Box component="a" href="#"sx={{display:{xs:"none",sm:"none",md:"block"},color:"white",textDecoration:"none"}}> e.g.CitroenC3AirCross</Box>
        <Box component="div" sx={{margin:{xs:"auto",lg:"0px"}}}> 
            <Box component="a"sx={{color:"white",textDecoration:"none"}} href="#">New Car Disounts | </Box>
            <Box component="a"href="#" sx={{color:"white",textDecoration:"none"}}>Help Me Find A Car | </Box>
            <Box component="a"href="#" sx={{display:{xs:"none",sm:"none",md:"block"},color:"white",textDecoration:"none"}}>Sell My Car</Box>
        </Box>
    </Box>

        </Box>
        </Box>
    </Box>)
}
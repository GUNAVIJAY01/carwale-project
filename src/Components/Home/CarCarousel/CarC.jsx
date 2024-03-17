import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useSelector } from "react-redux";
import { Box,Container, Button,Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Carcaro=()=>{
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        { 
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
    const state=useSelector((data)=>data.data)
    // console.log(state.arr)
 
    let AB=useNavigate()
 const detail=(id)=>{
    AB(`/Spec?id=${id}`) 
 }

return (
      <Box sx={{margin:"10px 0 0 0",padding:{xs:"10px 0"}}}>
          <Container maxWidth="lg">
        <h2> Featured Cars </h2>
        <Box sx={{margin:"10px 0 0 0"}}>
        <Box component="span" sx={{margin:"0 10px 0 0 ",cursor:"pointer"}}>TRENDING</Box>
        <Box component="span"sx={{margin:"0 10px 0 0 ",cursor:"pointer"}}>POPULAR</Box>
        <Box component="span"sx={{margin:"0 10px 0 0 ",cursor:"pointer"}}>UPCOMING</Box>
        </Box>
        <Box sx={{width:"90%"}}>
        <Slider {...settings} style={{width:"100%"}}>
          
          {state.arr.map((va,ind)=>{
            return(<Box key={ind} sx={{width:{xs:"43%",md:"33.33%"}}}>
              <Box sx={{border:"1px solid lightgray",margin:"5px",padding:"5px"}}>
              <Box>
                <Box component="img" src={va.singleImg}  sx={{width:{xs:"100px",md:"150px",md:"300px"}}}/>
              </Box>
               <Box sx={{padding:{xs:"10px",md:"0 25px"}}}>
              <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>{va.CarName}</Typography>
              <Typography sx={{fontSize:{xs:"13px",md:"16px"}}}>Rs.{va.Price} lakh  <span style={{color:"gray"}}>onwards</span></Typography>
              <Typography sx={{fontWeight:"500",fontSize:"13px"}}>On-Road Price,Chennai</Typography>
                </Box> 
                <Box sx={{padding:{md:"5px 25px"}}}>
                <Button sx={{margin:"10px 0px 0px 0",fontSize:"12px"}} variant="outlined" onClick={()=>detail(va.carId)}>View Price Breakup</Button>
                </Box> 
                </Box> 
            
            </Box>)
          })}
          
        </Slider>
        <Box component="a" href="#" sx={{textDecoration:"none"}}>View All Popular Cars</Box>
        </Box>
        </Container>
      </Box>
    );
  }

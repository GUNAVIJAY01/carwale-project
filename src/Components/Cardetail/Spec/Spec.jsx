import { Box,Container,Typography,Button } from "@mui/material" 
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import CropOriginalOutlinedIcon from '@mui/icons-material/CropOriginalOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import CurrencyRupeeTwoToneIcon from '@mui/icons-material/CurrencyRupeeTwoTone';
import LocalGasStationOutlinedIcon from '@mui/icons-material/LocalGasStationOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import { PiEngineLight } from 'react-icons/pi';
import { GiGearStickPattern } from 'react-icons/gi';
import { GiCash } from 'react-icons/gi';
import { FaAngleRight } from 'react-icons/fa6';
import { MdGpsNotFixed } from 'react-icons/md';
import { IoCarSportOutline } from 'react-icons/io5';
import AirlineSeatReclineExtraSharpIcon from '@mui/icons-material/AirlineSeatReclineExtraSharp';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HandshakeOutlinedIcon from '@mui/icons-material/HandshakeOutlined';
import Slider from "react-slick";
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../../Style.css"

export const Spec=()=>{

      const nav=useNavigate()

 let Tata=(Name)=>{
      nav(`/Brand?name=${Name}`)
 }
 
 let homes=()=>{
      nav("/")
 }


  
  
  const[params]=useSearchParams()
      
    const st=useSelector((dt)=>dt.data)

    const[spec,setSpec]=useState([])
    
    let Abc=params.get("name")
    let Abcd=params.get("fst")
    let Abd=params.get("scd")
 
useEffect(()=>{
    if(Abc){
        let cd=st.Brand.map((vl,ins)=>{
          return vl.Collection
        })
        let Ad= cd.flat().filter((vs,ins)=>{
          return vs.CarName===Abc
        })
        setSpec(Ad)
    }
    else if(Abcd){
      let cd=st.Brand.filter((vl,ins)=>{
        return vl.BrandId==Abcd
      })
      let Ad= cd.find((vs,ins)=>{
        return vs.Collection
      })
      let Ab=Ad.Collection.filter((va,ins)=>{
        return va.No==Number(Abd)
      })
            setSpec(Ab)
    }

    else{
    let pec=st.arr.filter((value,ind)=>{
        return Number(params.get("id"))===value.carId?value:""
    })
    setSpec(pec)
  }

},[])  

    // Carousel

    const settings = {
        autoplay:false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      let man=(s)=>{
              
        // s.filter((vs,ind)=>{
          //   return 
          // })
      }  
return (<>
            <Container className="spec" maxWidth="lg">
                {spec.map((v,i)=>{
                    return(<Box key={i}>
                               <h3>{v.CarName}</h3> 
                          <Box sx={{width:"100%",display:"flex",flexWrap:"wrap",border:"1px solid lightgray",margin:"10px 0",padding:"5px"}}>
                                
                                <Box sx={{width:{xs:"100%",md:"50%"},padding:"0 15px 0 0"}}>
                                <div>
        
        <Slider {...settings} style={{width:"100%"}}>
          {v.CarImage.map((val,ind)=>{
            return (<Box className="carouselspec" sx={{width:"90%"}}key={ind}>
                   <Box sx={{margin:"0px"}}>
                    <Box component="img" src={val.Img} sx={{width:{xs:"100%",md:"100%"}}}></Box>
                    </Box> 
            </Box>)
          })}
        </Slider>
        <Box sx={{display:"flex",margin:"10px 0 0 10px"}}>
          <Box sx={{display:"flex",alignItems:"center",cursor:"pointer",margin:"0 20px 0px 10px"}}>
              <span><PaletteOutlinedIcon/></span>           
              <p> Color </p>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",cursor:"pointer",margin:"0 20px 0 0"}}>
              <span><CropOriginalOutlinedIcon/></span>           
              <p> Images </p>
          </Box>
          <Box sx={{display:"flex",alignItems:"center",cursor:"pointer"}}>
              <span><PlayCircleFilledWhiteOutlinedIcon/></span>           
              <p> videos </p>
          </Box>

        </Box>
      </div>
       </Box>

      <Box sx={{width:{xs:"100%",md:"50%"}}}>
          <Box sx={{width:"100%",display:"flex",cursor:"pointer",margin:"0"}}>
            <Box sx={{width:"50%",border:"1px solid lightgray",borderTop:{md:"none"},textAlign:"center",padding:"15px",display:"flex",alignItems:"center",justifyContent:"space-between",margin:"0 0px",borderRight:"none"}}>
            <Box>
                <p style={{color:"gray",padding:"10px 0"}}>Variant</p>  
                <h5>Select Variant</h5>
            </Box>
            <Box>
                <span><ChevronRightOutlinedIcon/></span>

            </Box>

            </Box>
            <Box sx={{width:"50%",borderTop:{md:"none"},borderRight:"none",border:"1px solid lightgray",padding:"15px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <Box>
                <p style={{color:"gray",padding:"10px 0"}}>City</p>  
                <h5>Anna Nagar,Chennai</h5>
            </Box>
            <Box>
                <span><ChevronRightOutlinedIcon/></span>

            </Box>
            </Box>

          </Box>

                {/* Price */}
          <Container maxWidth="lg">

          <Box sx={{margin:"10px 0"}}>
            <h2 style={{margin:"5px 0"}}>RS. {v.Price} Lakh</h2>
            <p style={{color:"gray"}}>On-Road Price,Chennai</p>
            <Box sx={{display:"flex",alignItems:"center",margin:"10px 0"}}>
                <span style={{fontSize:"3px",color:"gray"}}><LocalMallOutlinedIcon/></span>
                <i style={{color:"gray"}}>  Available only in Nexa Showroom</i>
                
            </Box>
          </Box>
          
          <Box sx={{display:"flex",justifyContent:"space-between",margin:"10px 0",alignItems:"center"}}>
            <Box>
            <p>EMI Rs.</p>
            <p style={{color:"blue"}}>EMI calculator</p>
            </Box>
            <Box>
                <Button variant="outlined">Get EMI Offers</Button>
                </Box>                
          </Box>
            <Box sx={{margin:"20px 0"}}>
                <Button variant="contained" color="error"size="large">Get Diwali Offers</Button>
                </Box>          
        </Container>
        </Box> 

                            </Box>                   
          {/* carousel And rightside complete */}
 
 
            <Box>
              <h3>{v.CarName} Car Specifications </h3>
              <Box sx={{display:"flex",flexWrap:"wrap"}}>
                <Box sx={{width:{xs:"100%",md:"70%"},padding:"0px 15px",margin:"10px 0 10px 0"}}>
                     <Box sx={{border:"1px solid lightgray",display:"flex",flexWrap:"wrap"}}>
                        <Box sx={{border:"1px solid lightgray",borderTop:"none",borderLeft:"none",width:{xs:"50%",md:"33.33%"},padding:"15px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"0px"}}>
                                 <CurrencyRupeeTwoToneIcon/> 
                             </p>
                             <p>Price</p>
                          </div>
                          <h3>RS. {v.Price} Lakhs Onwards</h3>
                        </Box>
                        
                        <Box sx={{border:"1px solid lightgray",borderTop:"none",borderLeft:"none",width:{xs:"50%",md:"33.33%"},padding:"15px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"0px",margin:"0 2px"}}>
                                <SpeedOutlinedIcon/> 
                            </p>
                             <p>Mileage</p>
                          </div>
                          <h3>{v.Mileage}</h3>
                        </Box>
                        
                        <Box sx={{border:"1px solid lightgray",borderRight:{md:"none"},borderTop:"none",borderLeft:"none",width:{xs:"50%",md:"33.33%"},padding:"15px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"20px",margin:"0 2px"}}>
                                    <PiEngineLight/> 
                         
                            </p>
                             <p>Engine</p>
                          </div>
                          <h3>{v.Engine}</h3>
                        </Box>
                        
                        <Box sx={{border:"1px solid lightgray",borderTop:"none",borderBottom:{md:"none"},borderLeft:"none",width:{xs:"50%",md:"33.33%"},padding:"15px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"20px",margin:"0 2px"}}>
                                 <LocalGasStationOutlinedIcon/> 
                            </p>
                             <p>Fuel Type</p>
                          </div>
                          <h3>{v.FuelType}  &  {v.fuelModel}</h3>
                        </Box>
                        
                        <Box sx={{border:"1px solid lightgray",borderTop:"none",borderLeft:"none",borderBottom:"none",width:{xs:"50%",md:"33.33%"},padding:"5px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"20px",margin:"0 5px"}}>
                                 <GiGearStickPattern/> 
                            </p>
                            <p >Transmission</p>
                          </div>
                          <h3>{v.manualGear}  &  {v.automaticGear}</h3>
                        </Box>
                        
                        <Box sx={{width:{xs:"50%",md:"33.33%"},padding:"5px"}}>
                         <div style={{display:"flex",color:"gray",alignItems:"center"}}>
                             <p style={{fontSize:"20px",margin:"0 5px"}}>
                             <AirlineSeatReclineExtraSharpIcon/> 
                            </p> 
                             <p>Seating Capacity</p>
                          </div>
                          <h3>{v.seatingCapacity} Seater</h3>
                        </Box>
                         </Box> 

              <Box sx={{margin:"10px 0"}}>
                  <h3>{v.CarName} Price</h3>
                  <div style={{padding:"10px 10px"}}>

                <Typography>{v.Price_Content}</Typography>
                  </div>
                </Box>  
                <Box >
                  <Box sx={{display:"flex",alignItems:"center"}}>
                    <span><FilterAltOutlinedIcon/></span>
                    <p> Filter By Fuel type & Transmission</p>
                  </Box>
 
                  <Box sx={{margin:"10px 0 0 0"}}>

                  <Button variant="outlined" size="small" sx={{margin:"0 10px"}} onClick={()=>man(v.variants)}>Manual</Button>
                  <Button variant="outlined" size="small">Automatic(Tc)</Button>
 
                  </Box>
                  <Box>
                    
                  <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between",borderBottom:"1px solid lightgrey",margin:"15px 0"}}> 
                                <Box sx={{width:"33.33%",color:"gray",padding:"0 25px"}}>
                                  <Typography>Variants</Typography>

                                </Box>
                                
                                <Box sx={{width:"33.33%",color:"gray"}}>
                                  <Typography>On-Road Price</Typography>

                                </Box>
                                
                                <Box sx={{width:"33.33%",color:"gray"}}>
                                  <Typography>Compare</Typography>

                                </Box>
                              </Box>
                      <Box sx={{display:"flex",flexWrap:"wrap"}}>
                    {v.variants.map((va,ins)=>{
                      return(<>
                            <Box key={{ins}} sx={{borderBottom:"1px solid lightgray",width:"100%",padding:"10px"}}>
                              <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
                                <Box sx={{width:"33.33%",color:"gray"}} >
                                  <h3>{va.CarS} {va.variantName}</h3>
                                  <Typography sx={{fontSize:"14px",padding:"10px 0 0 0"}}>{va.Engine},{va.fuelType},{va.Mileage},{va.automaticGear},{va.manualGear}</Typography>
                                </Box>
                                <Box sx={{width:"33.33%"}} >
                                  <h3>Rs.{va.Price} Lakh</h3>
                                </Box>
                                <Box sx={{width:"33.33%"}} >
                                  <p style={{display:"flex",alignItems:"center"}}>Add to Compare
                                  <input type="checkbox"style={{margin:"0 10px"}}/></p>
                                </Box>

                              </Box>

                            </Box>
                      </>)
                    })}
                    </Box>                  

                    <Box sx={{border:"1px solid lightgray",display:"flex",display:{xs:"none",sm:"none",md:"none"},margin:"10px 0 ",backgroundColor:"rgb(241, 240, 240)",padding:"10px 0"}}>
                      <Box sx={{padding:"13px",width:"15%"}}>
                          <span><ArticleOutlinedIcon/></span>
                        </Box>
                        <Box sx={{width:"85%",display:"flex",alignItems:"center",padding:"0 20px"}}>
                          <Box sx={{width:"65%"}}>
                              <h4>{v.CarName}</h4>
                              <Typography>  Download the Brochure in just one click to view{v.BrandNames} Price,specs and features of all the variants</Typography>
                              <p style={{display:"flex",alignItems:"center",color:"blue",fontSize:"18px",marginTop:"10px"}}>check other Car's Brochure<span style={{marginTop:"5px",fontSize:"0px"}}><ChevronRightOutlinedIcon/></span></p>  
                          </Box>
                        
                          <Box sx={{width:"35%",padding:"0"}}>
                            <Button sx={{color:"white",width:"100%",}} variant="contained" color="error"  >Download Brochure</Button>
                          </Box>

                        </Box>
                    </Box>

                        <Box sx={{margin:"20px 0 0px 0"}}>
                              <h3>{v.CarName} Car Specifications</h3>
                              <p style={{margin:"10px 0"}}>{v.CarName} mileage Claimed by ARAI is {v.Mileage}</p>
                        <Box sx={{margin:"10px 0"}}>
                            <table className="cards">
                              <thead >
                                <tr>
                                <th><b>Powertrain</b></th>
                                <th><b>ARAI Mileage</b></th>
                                <th><b>User Reported Mileage</b></th>
                                </tr>
                              </thead>
                              <tbody>
                                {v.allMileage.map((va,ind)=>{
                                  return(<tr key={ind}>
                                    <td>{va.petrolManual}<span style={{color:"gray",padding:"0 10px"}}>( {va.cc} )</span></td>
                                    <td>{va.AraiMileage}</td>
                                    <td>{va.Reported}</td>
                                  </tr>)
                                })}
                                  

                              </tbody>

                            </table>
                        </Box>
                        </Box>


                        <Box>
                          <h3>{v.CarName} Images</h3>
                               <Box sx={{border:"1px solid lightgray",padding:'10px'}}>
                                <Box sx={{display:"flex",flexWrap:"wrap"}}>
                                <Box sx={{width:"33.33%" ,padding:"0 5px"}}>
                                  <Box component="img" src={v.img1} width="100%"/>
                                </Box>
                                <Box sx={{width:"33.33%",padding:"0 5px"}}>
                                  <Box component="img" src={v.img2} width="100%"/>
                                </Box>
                                <Box sx={{width:"33.33%",padding:"0 5px"}}>
                                  <Box component="img" src={v.img3} width="100%"/>
                                </Box>
                                <Box sx={{width:"66.64%",padding:"0 5px"}}>
                                  <Box component="img" src={v.img4} width="100%"/>
                                </Box>
                                <Box sx={{width:"33.33%",padding:"0 5px"}}>
                                  <Box component="img" src={v.img5} width="100%" />
                                  <Box className="imgs" sx={{position:"relative",height:{xs:"50px",sm:"120px",md:"130px"},width:"100%"}}>
                                   <Box component="h3" sx={{padding:"0 0 0 2px",fontSize:{xs:"12px"}}}>View all Images (139)</Box>
                                  </Box>
                                </Box>
                                </Box>
                                </Box>
                        </Box>



                    </Box>                  
                </Box>

                </Box>


                          {/* Right side */}

                <Box sx={{width:{xs:"100%",md:"30%"},padding:"0px 15px"}}> 
                    <Box sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                      <img src={"https://tpc.googlesyndication.com/simgad/15901227242515244801"} width="100%"/>

                    </Box>
                    <Box sx={{backgroundColor:"skyblue",position:"relative",padding:"25px",margin:"30px 0 0 0",display:{xs:"none",sm:"none",md:"block"}}}>
                    <span className="ic"><HandshakeOutlinedIcon/></span>

                      <Box sx={{backgroundColor:"white",padding:"25px",borderRadius:"5px"}}>
                          <h3>{v.Dealer}</h3>
                          <h3 style={{margin:"10px 0"}}><a href="tel:8588894279" style={{display:"inline-block",display:"flex",alignItems:"center",textDecoration:"none"}}><LocalPhoneIcon/><span style={{padding:"0 5px"}}>{v.Phone}</span></a></h3>
                      
                    <div>
                    <Typography sx={{fontSize:"13px"}}>{v.DealerCont}</Typography>  
                      </div>
                      
                        <div className="row"style={{color:"gray",fontSize:"13px",justifyContent:"space-between",margin:"10px 0 0 0"}}>
                          <p>Doorstep Demo</p>
                          <p>Offers and Discounts</p>
                        </div>
                        <div className="row"style={{color:"gray",justifyContent:"space-between",fontSize:"13px",margin:"10px 0 0 0"}}> 
                        <p>Lowest Emi</p>
                        <p>Exchange Benefits</p>
                        </div>
                        <h3 style={{margin:"25px 0 0 0",color:"blue",cursor:"pointer"}}>Get the Best Deal</h3>
                      
                    </Box>
                    </Box>
                        <Box sx={{margin:"15px 0",width:{xs:"100%"}}}>
                                <h3>{v.CarName} Price in India</h3>
                         <table className="cities" style={{width:"100%"}}>
                                <thead>
                               <tr >
                                  <th>City</th>
                                  <th>On-Road Prices</th>
                                </tr>   
                                </thead>
                               <tbody style={{textAlign:"center"}}>
                                  {v.Cities.map((vl,ins)=>{
                                    return (
                                      <tr>
                                    <td>{vl.City}</td>
                                    <td>RS.{vl.Price} Lakh onwards</td>
                                  </tr>
                                    )
                                    })}
                                  
                                </tbody> 
                         </table>
                          </Box>       

                     <Box sx={{margin:"20px 0"}}>
                      <img src={"https://tpc.googlesyndication.com/simgad/15901227242515244801"} width="100%" />
                      </Box>             

                      <Box sx={{margin:"10px 0"}}>
                        <h2 style={{margin:"10px 0"}}>Car Buyer's tool</h2>
                        <Box sx={{border:"1px solid lightgray",backgroundColor:"lightgray"}}>

                        <Box sx={{display:"flex",alignItems:"center",borderBottom:"1px solid gray",padding:"10px"}}>
                             <span style={{fontSize:"35px",margin:"0 10px"}}><GiCash/></span>       
                             <Box>
                                    <h3>Instant Car Loan</h3>
                                    <p>Apply and Get Best Car Loan Offers within minutes</p>
                              </Box>       
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",borderBottom:"1px solid gray",padding:"10px"}}>
                             <span style={{fontSize:"35px",margin:"0 10px"}}><MdGpsNotFixed/></span>       
                             <Box>
                                    <h3>Locate Dealers</h3>
                                    <p>Locate{v.Name} Dealers</p>
                              </Box>       
                        </Box>
                        <Box sx={{display:"flex",alignItems:"center",borderBottom:"1px solid gray",padding:"10px"}}>
                             <span style={{fontSize:"35px",margin:"0 10px"}}><IoCarSportOutline/></span>       
                             <Box>
                                    <h3>{v.Name} Cars</h3>
                                    <p>Explore other {v.Name} Cars</p>
                              </Box>       
                        </Box>
                        </Box>
                        </Box>    

                        <Box sx={{margin:"10px 0",display:{xs:"none",sm:"none",md:"block"}}}>
                          <img src="https://tpc.googlesyndication.com/simgad/15901227242515244801" width="100%"/>
                        </Box>



                </Box>

              </Box>
            </Box>






              <Box sx={{display:"flex",alignItems:"center"}}>
                 <span onClick={()=>homes()} style={{cursor:"pointer",color:"blue"}}>Home</span>
                 <i style={{fontSize:"11px",margin:"3px 0px 0 2px"}}><FaAngleRight/></i>
                 <span onClick={()=>Tata(v.Brand)}style={{color:"blue",cursor:"pointer"}}>{v.Brand}</span>              
                 <i style={{fontSize:"11px",margin:"3px 0px 0 2px"}}><FaAngleRight/></i>
                 <span >{v.CarName}</span>              
                 </Box>
                    </Box>)
                })}

            </Container>
    </>)
}
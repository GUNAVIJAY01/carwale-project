import { Box, Container } from "@mui/material"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate, useSearchParams } from "react-router-dom"

import { FaStar } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import "../Style.css"


export const Comparison=()=>{
    
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  

    const [arry,setArry]=useState([]) 
    const [arryss,setArryss]=useState([]) 
    
    let state=useSelector(({data})=>data)
           
    const[pars]=useSearchParams()
    let pasd=(pars.get("pas"))
    console.log(pasd)

useEffect(()=>{
    let fsCar=Number(pars.get("FirstCar"))
    let fsId=Number(pars.get("FirstId"))
    let sdCar=Number(pars.get("SecondCar"))
    let sdId=Number(pars.get("SecondId"))

   let sa=state.Brand.find((vl,ind)=>{
    return fsCar===vl.BrandId
   })
   
   let as= sa.Collection.filter((vl,insd)=>{
    return fsId===vl.No
   })
   setArry(as)

   let sad=state.Brand.find((vl,ind)=>{
    return sdId===vl.BrandId
   })
   
   let asd= sad.Collection.filter((vl,insd)=>{
    return vl.No===sdCar
   })

   setArryss(asd)
},[])
    const sa=useNavigate()
    let firs=()=>{
            sa(`/Brand?pasds=${pasd}`)
    }


let hme=()=>{
    sa("/")   
}


return(<>
    <Container size="sm">
            <Box sx={{display:"flex",border:"1px solid black",margin:"20px 0",position:"relative"}}>
                    <Box sx={{position:"absolute",border:"1px solid blue",borderRadius:"50%",padding:"5px",top:{xs:"40%",sm:"40%",md:"35%"},right:{xs:"46%",sm:"48%",md:"48.5%"},backgroundColor:"white",zIndex:"99"}}>
                        <p style={{color:"red"}}>Vs</p>
                    </Box>
               {arry.map((vl,ind)=>{
                return (<Box key={ind} sx={{textAlign:"center",borderRight:"1px solid black",position:"relative",width:"50%"}}>
                       <Box sx={{position:"absolute",right:"10px",top:"10px"}}>
                          <i onClick={()=>firs()}><IoMdClose/></i>  
                        </Box> 
                     <Box component="img" src={vl.CarImg} sx={{width:{xs:"100%",sm:"100%",md:"50%"}}} />   
                     <Box><b style={{color:"blue",padding:"5px 0"}}>{vl.CarName}</b>
                     <p style={{padding:"5px 0"}}>Rs.{vl.Price} Lakh</p>
                     <p style={{color:"gray"}}>on Road Price,Chennai</p>
                     </Box>
                </Box>)
               })}
               {arryss.map((vl,ind)=>{
                return (<Box key={ind} sx={{textAlign:"center",width:{xs:"50%",md:"50%"},position:"relative",}}>
                     <Box sx={{position:"absolute",right:"10px",top:"10px"}}>
                          <i onClick={()=>firs()}><IoMdClose/></i>  
                        </Box> 
                     <Box component="img" src={vl.CarImg} sx={{width:{xs:"100%",sm:"100%",md:"50%"}}} />   
                     <Box sx={{margin:"10px 0"}}>
                    <b style={{color:"blue",padding:"5px 0"}}>{vl.CarName}</b>
                     <p style={{padding:"5px 0"}}>Rs.{vl.Price} Lakh</p>
                     <p style={{color:"gray"}}>on Road Price,Chennai</p>
                     </Box>
                </Box>)
               })}               
            </Box>
               
        <Box sx={{margin:"10px 0",width:{xs:"100%"}}}> 
                <Box component="a" href="#abc1" className="anchor" sx={{display:"inline-block",textDecoration:"none",color:"black",fontWeight:"bold",padding:"0 8px 0 0"}}>SPECIFICATIONS</Box>
                <Box component="a" href="#abc2" className="anchor" sx={{display:"inline-block",textDecoration:"none",color:"black",fontWeight:"bold",padding:"0 8px"}}>FEATURES</Box>
                <Box component="a" href="#abc3" className="anchor" sx={{display:"inline-block",textDecoration:"none",color:"black",fontWeight:"bold",padding:"0 8px"}}>COLORS</Box>
                <Box component="a" href="#abc4" className="anchor" sx={{display:"inline-block",textDecoration:"none",color:"black",fontWeight:"bold",padding:"0 8px"}}>USER REVIEWS</Box>
       </Box>
    <Box sx={{border:"1px solid lightgray",margin:"10px 0"}}>
    <Box componet="a" href="#" id="abc">
    <h4 style={{fontSize:"18px",margin:"10px 10px"}}>Specifications</h4>

    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{border:"",borderBottom:""}}
        >
          <Typography><b>Engine & Transmission</b></Typography>
        </AccordionSummary>
        <AccordionDetails sx={{border:""}}>
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                Engine
                (know more)                </Box> 
                <Box component="td" sx={{margin:"0 10px",width:"33.33%",textAlign:"center",padding:"10px",borderBottom:"none"}}>
                    {arry.map((vl,sa)=>{
                        return (<>
                            <p>{vl.Engine}</p>
                        </>)
                    })}
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    {arryss.map((vl,sa)=>{
                        return (<>
                            <p>{vl.Engine}</p>
                        </>)
                    })}
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                FuelType                               </Box> 
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    {arry.map((vl,sa)=>{
                        return (<>
                            <p>{vl.FuelType}</p>
                        </>)
                    })}
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    {arryss.map((vl,sa)=>{
                        return (<>
                            <p>{vl.FuelType}</p>
                        </>)
                    })}
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{border:"",}}>
               <Box component="table"className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",borderBottom:"none",textAlign:"center",padding:"10px"}}>
                    Mileage (ARAI)(kmpl)                   </Box> 
                <Box component="td" sx={{margin:"0 10px",borderBottom:"none",width:"33.33%",textAlign:"center",}}>
                    {arry.map((vl,sa)=>{
                        return (<>
                            <p>{vl.Mileage}</p>
                        </>)
                    })}
                </Box>
                <Box component="td" sx={{borderBottom:"none",width:"33.33%",textAlign:"center"}}>
                    {arryss.map((vl,sa)=>{
                        return (<>
                            <p>{vl.Mileage}</p>
                        </>)
                    })}
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{border:""}}>
               <Box component="table" className='gs'>
                <td style={{textAlign:"center"}}>
               
                     Transmission   
               
               </td> 
                <td style={{width:"33.33%",textAlign:"center"}}>
                   {arry.map((vl,sa)=>{
                        return (<>
                            <p>{vl.maualGear} & {vl.automaticGear}</p>
                        </>)
                    })}
                
                </td>
                <td style={{width:"33.33%",padding:"10px",textAlign:"center"}}>
                    
                    {arryss.map((vl,sa)=>{
                        return (<>
                            <p>{vl.manualGear} & {vl.automaticGear} </p>
                        </>)
                    })}
                
                </td>

               </Box>
          </Typography>

        </AccordionDetails>
      </Accordion>

                </Box>   
                
                
    <Box componet="a" href="#" id="abc2">
    <h4 style={{fontSize:"18px",margin:"10px 10px"}}>Features</h4>
        
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{border:"",borderBottom:"none"}}
        >
          <Typography><b>Manufacturer Waranty</b></Typography>
        </AccordionSummary>
        <AccordionDetails sx={{}}>
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    Battery Waranty in Kilometers
                             </Box> 
                <Box component="td" sx={{margin:"0 10px",width:"33.33%",textAlign:"center",padding:"10px",borderBottom:"none"}}>
                    
                            <p>Not Applicable</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    
                <p>Not Applicable</p>
                            
                    
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                Waranty in Years                         </Box> 
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    <p>-</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    
                            <p>2</p>
                    
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{border:""}}>
               <Box component="table"className="gs" sx={{borderBottom:""}}>
               <Box component="td" sx={{width:"33.33%",borderBottom:"none",textAlign:"center",padding:"10px"}}>
                    Waranty in Kilometers                   </Box> 
                <Box component="td" sx={{margin:"0 10px",borderBottom:"none",width:"33.33%",textAlign:"center",}}>
                 <p>-</p>
                
                </Box>
                <Box component="td" sx={{borderBottom:"none",width:"33.33%",textAlign:"center"}}>
                    
              <p>40000</p>
                    
                </Box>

               </Box>
          </Typography>
          
        
        </AccordionDetails>
      </Accordion>
      </Box>
 
     <Box componet="a" href="#" id="abc3">
    <Box>   
    <h3 style={{fontSize:"18px",margin:"10px 10px"}}>Colours</h3>            
    
    <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:""}}>
                <tr>
               <Box component="td" rowspan="5" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",}}>
                                        </Box> 
                <Box component="td"  sx={{width:"33.33%",textAlign:"",borderBottom:"none",padding:"10px"}}>
                    <p style={{margin:"10px 0",backgroundColor:"rgb(38, 68, 149)",height:"30px",width:"80px"}}>
                       
                    </p>
                    <p style={{color:""}}>Nexa Blue (Celestial)</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"",borderBottom:"",padding:"10px"}}>
                <p style={{backgroundColor:"rgb(13, 77, 161)",height:"30px",width:"80px",margin:"10px 0"}}></p>
                    <p style={{color:""}}>Exuberant blue</p>
                    
                </Box>
                </tr>
                
                <tr>
               
                <Box component="td" sx={{width:"33.33%",textAlign:"",borderBottom:"none",padding:"10px"}}>
                    <p style={{margin:"10px 0",backgroundColor:"rgb(97, 110, 145",height:"30px",width:"80px"}}>
                       
                    </p>
                    <p style={{color:""}}>Grandeur Grey</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"",borderBottom:"",padding:"10px"}}>
                <p style={{backgroundColor:"rgb(20, 19, 22)",height:"30px",width:"80px",margin:"10px 0"}}></p>
                    <p style={{color:""}}>Pearl Midnight Black</p>
                    
                </Box>
                </tr>
                
                <tr>
               
                <Box component="td"  sx={{width:"33.33%",textAlign:"",borderBottom:"none",padding:"10px"}}>
                    <p style={{margin:"10px 0",backgroundColor:"rgb(120, 100, 93)",height:"30px",width:"80px"}}>
                       
                    </p>
                    <p style={{color:""}}>Eartheren Brown</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"",borderBottom:"",padding:"10px"}}>
                <p style={{backgroundColor:"rgb(107, 72, 15)",height:"30px",width:"80px",margin:"10px 0"}}></p>
                    <p >Brave Khaki</p>
                    
                </Box>
                </tr>

                <tr>
               
                <Box component="td"  sx={{width:"33.33%",textAlign:"",borderBottom:"none",padding:"10px"}}>
                    <p style={{margin:"10px 0",backgroundColor:"rgb(248, 248, 248)",height:"30px",width:"80px"}}>
                       
                    </p>
                    <p style={{color:""}}>Arctic White</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"",borderBottom:"",padding:"10px"}}>
                <p style={{backgroundColor:"rgb(194, 202, 208)",height:"30px",width:"80px",margin:"10px 0"}}></p>
                    <p style={{color:""}}>Splendid Silver</p>
                    
                </Box>
                </tr>
                

               </Box>
          </Typography>          
        
    
</Box>


        <h4 style={{fontSize:"18px",margin:"10px 10px"}}>Reviews</h4>
 <Box componet="a" href="#" id="abc4">
    <Typography><b>User Reviews</b></Typography>
        <Box sx={{border:""}}>
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:"none"}}>
               <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    overall Rating
                             </Box> 
                <Box component="td" sx={{margin:"0 10px",width:"33.33%",textAlign:"center",padding:"10px",borderBottom:"none"}}>
                    
                            <p><i style={{color:"green"}}><FaStar/></i>
                            {arry.map((vs,s)=>{
                                return (<>
                                    {vs.Ratings} / 5
                                </>)
                            })}</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none"}}>
                    
                <p><i style={{color:"green"}}><FaStar/></i>
                {arryss.map((vs,s)=>{
                                return (<>
                                    {vs.Ratings} / 5
                                </>)
                            })}</p>            
                    
                </Box>

               </Box>
          </Typography>
          
          <Typography sx={{}}>
               <Box component="table" className="gs" sx={{borderBottom:""}}>
                <tr>
               <Box component="td" rowspan="5" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",}}>
                Ratins Parameters                        </Box> 
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.7</p>
                    <p style={{color:"gray"}}>Exterior</p>
                                    </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"",padding:"10px"}}>
                <p>4.6</p>
                    <p style={{color:"gray"}}>Exterior</p>
                    
                </Box>
                </tr>
                <tr>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.5</p>
                    <p style={{color:"gray"}}>Comfort</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.4</p>
                    <p style={{color:"gray"}}>Comfort</p>
                </Box>
                </tr>

                <tr>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.6</p>
                    <p style={{color:"gray"}}>Performance</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.6</p>
                    <p style={{color:"gray"}}>Performance</p>
                </Box>                                    
                </tr>
                <tr>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.6</p>
                    <p style={{color:"gray"}}>Fuel Economy</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.4</p>
                    <p style={{color:"gray"}}>Fuel Economy</p>
                </Box>                                    
                </tr>
                <tr>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.6</p>
                    <p style={{color:"gray"}}>Value for Money</p>
                </Box>
                <Box component="td" sx={{width:"33.33%",textAlign:"center",borderBottom:"none",padding:"10px"}}>
                    <p>4.4</p>
                    <p style={{color:"gray"}}>Value for Money</p>
                </Box>                                    
                </tr>

               </Box>
          </Typography>          
        
        </Box>
              </Box>
              </Box>
        </Box>   

        <Box sx={{display:"flex"}}>
        <Box sx={{display:"flex"}}>
             <b style={{color:"blue"}} onClick={()=>hme()}>Home </b>
             <i style={{margin:"2px 0 0 0"}}> <FaAngleRight/></i>               
        </Box>
        <Box sx={{display:"flex"}}>
             <b style={{color:""}}>Comparison </b>
             <i style={{margin:"2px 0 0 0"}}> <FaAngleRight/></i>               
        </Box>
        <Box sx={{display:"flex"}}>
             <b style={{color:""}}>{arry.map((vl,is)=>{
                return <>
                        {vl.CarName} 
                </>
             })} <b style={{padding:"0 2px"}}>Vs </b> {arryss.map((vl,is)=>{
                return <>
                       {vl.CarName} 
                </>
             })} </b>
        </Box>
                        
        </Box>
            </Container>
    </>)

}
import { Box,Typography } from "@mui/material"
import React from "react"
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';  

export const Footer=()=>{
    return (<>
          <Box sx={{backgroundColor:"#002b51",height:"100%",width:{xs:"100%"}}}>
            <Box sx={{margin:" 0px"}}>
                <Box sx={{width:{xs:"100%"}}}>
                <Box  sx={{display:"flex",justifyContent:"center",padding:"10px 0 0 0",fontSize:{xs:"10px",sm:"18px",md:"15px"},width:"100%"}}>
                     <li style={{listStyle:"none",margin:"0 25px 0 0",color:"#90b1d1fa"}}>CarWale</li>   
                     <li style={{listStyle:"none",margin:"0 25px 0 0"}}><a style={{textDecoration:"none",color:"#90b1d1fa"}} href="https://www.cartrade.com/">CarTrade<span style={{fontSize:"8px"}}>com</span></a></li>   
                     <li style={{listStyle:"none",margin:"0 25px 0 0"}}><a style={{textDecoration:"none",color:"#90b1d1fa"}} href="https://www.bikewale.com/">bikeWale</a></li>   
                     <li style={{listStyle:"none",margin:"0 25px 0 0"}}><a style={{textDecoration:"none",color:"#90b1d1fa"}} href="https://www.mobilityoutlook.com/">Mobility Outlook</a></li>   
                     <li style={{listStyle:"none"}}><a style={{textDecoration:"none",color:"#90b1d1fa"}} href="https://www.cartrade.com/">CarWale</a></li>   
                </Box>
                </Box>
                <Box sx={{color:"#90b1d1fa",margin:"15px 0 0 0",padding:"10px",display:"flex"}}>
                    
                <Box sx={{width:"50%",fontSize:"13px",textAlign:"end",padding:"0px 25px",borderRight:"1px solid #90b1d1fa"}}>
 
                           <Typography sx={{fontSize:"13px"}}>Language :<b>English</b></Typography> 
                   <Box sx={{width:"100%",display:"flex",margin:"10px 0 0 0"}}>
                        <span style={{margin:"0 10px 0 0",width:"80%"}}>About Us</span>
                        <span style={{width:"20%"}}>Terms & Condition</span>
                    </Box>    
                     <Box sx={{fontSize:"13px",width:"100%",margin:"10px 0 0 0",display:"flex",justifyContent:"space-evenly"}}>
                        <span style={{fontSize:"13px",width:"80%",margin:"0 15px 0 0 "}}>Careers</span>
                        <span style={{fontSize:"13px",width:"20%"}}>Advertise</span>
                    </Box>     
 

                    </Box>  
                    <Box sx={{width:"50%",padding:"0px 25px"}}>
                            <Typography sx={{fontSize:"13px"}}>Download Mobile App</Typography>
                            <div style={{width:"100%",padding:"10px 0 0 0"}}>
                                <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2"} width="100px" style={{cursor:"pointer",margin:"0 10px 0 0 "}}/>
                                <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2"} width="110px" style={{cursor:"pointer"}}/>
                            </div>
                            <Typography sx={{fontSize:"13px"}}> Connect with us</Typography>
                            <ul style={{display:"flex"}}>
                                <li style={{listStyle:"none",cursor:"pointer",marginRight:"5px"}}><FacebookSharpIcon/></li>
                                <li style={{listStyle:"none",cursor:"pointer",marginRight:"5px"}}><TwitterIcon/></li>
                                <li style={{listStyle:"none",cursor:"pointer",marginRight:"5px"}}><i><YouTubeIcon/></i></li>
                                <li style={{listStyle:"none",cursor:"pointer",marginRight:"5px"}}><i><LinkedInIcon/></i></li>
                                <li style={{listStyle:"none",cursor:"pointer",marginRight:"5px"}}><i><InstagramIcon/></i></li>
                            </ul>
                        </Box>   
                </Box> 
<Typography sx={{color:"#90b1d1fa",textAlign:"center",fontSize:"13px",padding:"10px"}}>©2006-2023. www.carwale.com     <i style={{margin:"0 10px"}}>|</i>   <span style={{cursor:"pointer"}}>Visitors Agreement & Privacy Policy</span> </Typography>

            </Box>
            </Box>  
        </>)
}
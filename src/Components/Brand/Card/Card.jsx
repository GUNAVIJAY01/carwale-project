import React from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Box,Container,Typography } from "@mui/material" 
import Button from '@mui/material/Button';
import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { IoCloseCircleOutline} from "react-icons/io5";
import { BiSearch} from "react-icons/bi";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';


export const Card=()=>{
    
    const state=useSelector(({data})=>data)
    const [set]=useSearchParams()

        // param
        
    let para=set.get("id")
    let paras=Number(set.get("pasds"))
            
    const [firstId,setfirstId]=useState("")
    const [secondId,setsecondtId]=useState("")
    const[arr,setArr]=useState([])
    const[brand,setBrand]=useState()
    const[compar,setCompar]=useState(false)
    const[sear,setSearc]=useState(state.Brand)
    const[pop,setPop]=useState("")
    
        // second Compare

    const[pops,setPops]=useState("")
    const[cmpr,setCmpr]=useState(false)
    const transfer=useNavigate()
   

useEffect(()=>{
    if(paras){
        let Ab=state.Brand.filter((v,ind)=>{
            return v.BrandId===Number(paras)
            })

        setArr(Ab)

        let as=state.Brand.filter((vs,is)=>{
            return Number(para)!=vs.BrandId?vs:"" 
        })
        setBrand(as)    
    
    }
else{
        let Ab=state.Brand.filter((v,ind)=>{
            return v.BrandId===Number(para)
            })
        setArr(Ab)
       
       
        let as=state.Brand.filter((vs,is)=>{
                return Number(para)!=vs.BrandId?vs:"" 
            })
            setBrand(as) 

        
          }
},[])
  

let Pass=(id)=>{
    let Ab=state.Brand.filter((v,ind)=>{
        return v.BrandId===id
    })
    setArr(Ab)
    
    let as=state.Brand.filter((vs,is)=>{
        return id!=vs.BrandId?vs:"" 
    })
    setBrand(as)        

}

let home=()=>{
    transfer("/")
}




let inputs=(e)=>{
    
  if(e.target.value===""){
        let abc=state.Brand.filter((vl,ind)=>{
            return vl
         })   
         setSearc(abc)
    }
    else{
        let abc=sear.filter((vl,ind)=>{
            return (vl.Name.toLowerCase()).includes((e.target.value).toLowerCase().trim())?vl:""
         })   
         setSearc(abc)

    } 
}

        // first Compare

let nums=(id,Name)=>{

    setfirstId(id)
      let as=state.Brand.find((v,i)=>{
                return v.BrandId===id 
        })
      let s=as.Collection.filter((v,i)=>{
                return v.No===Name
            })
            setPop(s)
            setCompar(false)
            
      let asas=arr.map((vl,i)=>{
                return {...vl,comp:true}
            })    
            setArr(asas)
        }
    
let clos=()=>{
            let cd=arr.map((v,ins)=>{
                return {...v,comp:false}
            })
            setArr(cd)
        }

let ico=()=>{
            setCompar(false)
        }
        
let copare=(s)=>{
            setCompar(true)
        }
    // second Compare
 
 let icos=()=>{
     setCmpr(false)
    }   

let num=(id,Name)=>{
    setsecondtId(id)
    let as=state.Brand.find((v,i)=>{
        return v.BrandId===id 
})
let s=as.Collection.filter((v,i)=>{
        return v.No===Name
    })
    setPops(s)
    setCmpr(false)
    
let asas=arr.map((vl,i)=>{
        return {...vl,any:true}
    })    
    setArr(asas)
}
let compare=(s)=>{
    setCmpr(true)
}  
let close=()=>{
    let cd=arr.map((v,ins)=>{
        return {...v,any:false}
    })
    setArr(cd)
}

    // compare the two car
 
let Comparison=()=>{
    let sc=pop.map((v,ins)=>{
        return v.No
    })    
     let sd=pops.map((v,ins)=>{
        return v.No
    })     
        let Ab=firstId
        let Abc=secondId

       transfer(`/Comparisn?FirstCar=${sc}&FirstId=${Ab}&SecondCar=${sd}&SecondId=${Abc}&pas=${para}`)     

    }  

    let Cliks=(a,b)=>{
        transfer(`/spec?fst=${a}&scd=${b}`)
    }
return(<Container maxWidth="lg">
             {arr.map((v,i)=>{
                 return (<>
                        <Box keys={i}>
                            <h3>{v.Cars}</h3>
                            <p style={{textIndent:"50px",padding:"10px"}}>{v.Content}</p>
                </Box>

        <Box>
            <Box sx={{display:"flex",flexWrap:"wrap"}}>          
        
                        {/* leftside */}
        
                <Box sx={{width:{xs:"100%",md:"60%"},padding:"10px 0"}}>
              <h3>{v.Models}</h3>         
              
                  {v.Collection.map((val,ind)=>{
                    return(<Container keys={ind} maxWidth="lg">
                             
                        <Box sx={{border:{md:"none",lg:"1px solid lightgray"},padding:"10px",width:"100%",margin:"10px 0"}}>
                             <Box sx={{display:"flex",flexWrap:"wrap",alignItems:"center",position:"relative"}}>
                                <Box sx={{width:{xs:"40%",md:"40%"},cursor:"pointer"}}onClick={()=>Cliks(v.BrandId,val.No)}>

                                <img src={val.CarImg}width="100%"/>
                                </Box>
                                <Box sx={{width:{xs:"60%",md:"100%",lg:"60%"}}}>
                                    <Box sx={{fontSize:{xs:"12px"}}}>
                                    <Typography sx={{fontSize:"15px"}}>{val.CarName}</Typography>
                                     <p style={{margin:"5px 0"}}>{val.speed}<span style={{margin:"0 10px"}}>|</span>{val.Bhp}</p>   
                                     <Typography sx={{margin:"10px 0"}}><b> RS.{val.Price} lakh</b><span style={{color:"gray",margin:"0 10px"}}>onwards</span></Typography>
                                     <Typography sx={{color:"grey",fontSize:"13px"}}>On-Road Price,Chennai</Typography>   
                                     <b style={{color:"blue",cursor:"pointer",margin:"10px 0 0 0",display:"inline-block"}}>Best offer</b>
                                     </Box>   

                                        <Box sx={{display:{xs:"none",sm:"block",md:"block"}}}>
                                    <Box sx={{display:"flex",alignItems:"center",border:"1px solid lightgray",width:{sm:"150px",md:"150px"},position:"absolute",right:0,top:0}}>
                                    <StarRoundedIcon style={{color:"lightgreen"}}/><p>
                                    <b style={{color:"lightgreen"}}>{val.Ratings}</b><b style={{fontSize:"12px",padding:"0 2px"}}>/ 5</b>
                                    <span style={{margin:"0 10px"}}>|</span>
                                    <span style={{color:"lightgray",fontSize:"12px"}}>{val.Rate}</span></p>                     
                                        </Box>   
                                        </Box>   
                                </Box>
                                </Box>     

                            </Box>
                         </Container>)
                 })   }

             </Box>
                 {/* right side */}

            <Box sx={{width:{xs:"100%",md:"40%"}}}>
            <Box>
                  <h3>Similiar and Popular Brands</h3>  
                 <Box sx={{display:"flex",flexWrap:"wrap",padding:"10px 0"}}>
                 {
                    brand.map((value,ind)=>{
                        return (<>
                        <Box keys={ind} sx={{border:"1px solid lightgray",width:"33.33%",textAlign:"center",padding:"10px"}}>
                             <Box sx={{cursor:"pointer"}} onClick={()=>Pass(value.BrandId)}>
                             <img src={value.BrandImage} width="80px"/>   
                             <Typography>{value.Name}</Typography>
                        </Box>
                        </Box>
                        </>)
                    })
                 }

                 </Box>
                 </Box>
                 </Box>

                 </Box>

                 <Box>
                    {arr.map((vl,ind)=>{    
                        return(<Box>
                            <h3>{vl.Cars} Comparison</h3>    
                            <Box sx={{display:"flex",width:{xs:"100%",md:"100%"},border:"1px solid lightgray",margin:"10px 0",position:"relative"}}>
                                <Box sx={{position:"absolute",right:{xs:"45%",sm:"48%",md:"48.5%"},zIndex:"99",backgroundColor:"white",top:"38%"}}>
                                     <span style={{color:"red",border:"1px solid blue",borderRadius:"50%",padding:"5px",display:"inline-block"}}>Vs</span>   
                                    </Box>
                               {vl.comp?<Box  sx={{width:"50%",borderRight:"1px solid lightgray",position:"relative"}}>
                                    {pop.map((vl,ind)=>{
                                        return (<Box key={ind} sx={{textAlign:"center",padding:{xs:"10px",md:0},margin:{xs:"10px 0"}}} >
                                                    <Box component="img" src={vl.CarImg} sx={{width:{md:"50%",xs:"100%"}}}/>
                                                    <h3 style={{color:"blue"}}>{vl.CarName}</h3>
                                                    <p>{vl.Price} Lakh</p>
                                                    <p style={{color:"gray"}}>On Road Price Chennai</p>
                                                    <Box onClick={clos} sx={{cursor:"pointer",position:"absolute",right:0,top:0,margin:"5px",display:"inline-block"}} component="span"><CloseIcon/></Box>
                                            </Box>)
                                    })}
                                    
                                </Box>
                                :
                                <Box  sx={{width:"50%",borderRight:"1px solid lightgray",position:"relative"}}>
                                <Box onClick={()=>copare(vl)} sx={{display:"flex",justifyContent:"center",alignItems:"center",height:"250px",width:"100%",textAlign:"center",cursor:"pointer"}}>
                               <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuuVANA4Ebo2z6TjayAv5CGRNaCTGwbgz6Q&usqp=CAU"} style={{borderRadius:"100%",margin:"0 0px 0 0px"}} width="60px" />
                                </Box>
                                <Box component="p" sx={{position:"absolute",top:{xs:"160px",md:"160px"},right:{xs:"50px",sm:"140px",md:"240px"}}}>select a car</Box>

                                </Box>} 

                                {vl.any?<Box  sx={{width:"50%",borderRight:"1px solid lightgray",position:"relative"}}>
                                    {pops.map((vl,ind)=>{
                                        return (<Box key={ind} sx={{textAlign:"center",padding:{xs:"10px",md:0},margin:{xs:"10px 0"}}} >
                                                    <Box component="img" src={vl.CarImg} sx={{width:{xs:"100%",md:"50%"}}}/>
                                                    <h3 style={{color:"blue"}}>{vl.CarName}</h3>
                                                    <p>{vl.Price} Lakh</p>
                                                    <p style={{color:"gray"}}>On Road Price Chennai</p>
                                                    <Box onClick={close} sx={{cursor:"pointer",position:"absolute",right:0,top:0,margin:"5px",display:"inline-block"}} component="span"><CloseIcon/></Box>
                                            </Box>)
                                    })}
                                    
                                </Box>
                                :
                            <Box  sx={{width:"50%",borderRight:"1px solid lightgray"}}>
                            <Box onClick={()=>compare(vl)} sx={{display:"flex",position:"relative",justifyContent:"center",alignItems:"center",height:"250px",width:"100%",textAlign:"center",cursor:"pointer"}}>
                           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuuVANA4Ebo2z6TjayAv5CGRNaCTGwbgz6Q&usqp=CAU"} style={{borderRadius:"100%",margin:"0 0px 0 0px"}} width="60px" />
                            </Box>
                            <Box sx={{position:"absolute",top:{xs:"160px",md:"160px"},right:{xs:"50px",sm:"140px",md:"240px"}}}>select a car</Box>
                            </Box>}
                                         
                            </Box>
                        </Box>)
                    })}

            </Box>
                   <Button variant="contained" size="large" color="error" sx={{margin:"8px 8px",width:"33.33%",height:"50px"}} 
                   onClick={()=>Comparison()}>Compare </Button>
                

                 <Box sx={{display:"flex",alignItems:"center"}}>
                 <Box sx={{display:"flex",alignItems:"center"}}> 
                    <a href="" onClick={home} style={{textDecoration:"none",color:"blue"}}>Home</a>
                 <i style={{fontSize:"3px"}}><ChevronRightOutlinedIcon/></i>
                       </Box>
                    <p>{v.Name}</p>
                      </Box>
                      
                      </Box>
                 
                 </>)
            })}
 {compar && <Box sx={{position:{xs:"fixed",sm:"fixed",md:"fixed"},backgroundColor:"rgb(243 239 239)",height:{xs:"100%",sm:"580px",md:"50%",lg:"75%"},width:{xs:"100%",sm:"50%",md:"50%",lg:"600px"},top:{xs:"0",sm:"20%",md:"25%",lg:"15%"},right:{xs:"0",md:"30%",lg:"28%"},bottom:{sm:"0px"},left:{sm:"20%",md:"unset",},zIndex:"99"}}>
    
    <Box className="bg" sx={{width:"100%",margin:"30px 0 0 0",position:"relative"}}>
           <h5 style={{margin:"45px 0 10px 40px"}}>Select Your Brand  Channel</h5> 
           <span onClick={ico} style={{position:"absolute",right:"10px",fontSize:"25px",top:"-5px",cursor:"pointer"}}><IoCloseCircleOutline/></span>
           <Box>
               <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/skyline-bg.svg"} width="60px"/>
               <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/skyline-bg.svg"} width="60px"/>
           </Box>
           <Container maxWidth="lg">
              <Box className="ip" sx={{position:"relative"}}>
                <input type="text" style={{position:"absolute",top:"-15px",width:"100%",height:"38px",border:"1px solid lightgray"}} onChange={inputs} placeholder="Type to Select Brand or Model"/>
                <span style={{position:"absolute",top:"-8px",left:"12px",fontSize:"25px"}}><BiSearch/></span>
                </Box>          
                <h5 style={{padding:"30px 0 10px 0"}}>POPULAR BRANDS</h5>
                <Box sx={{overflow:"auto",width:{xs:"100%",sm:"100%",md:"450px",lg:"550px"},height:{xs:"80vh",sm:"400px",md:"615px",lg:"47vh"}}}>
                 
                {sear.map((vl,ind)=>{
                     return(<Box key={ind} sx={{width:"100%"}}>
                        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Box sx={{display:"flex",alignItems:"center"}}>
            <img src={vl.BrandImage} style={{width:"70px"}}/>
        <Typography sx={{padding:"0 5px"}}  >{vl.Name}</Typography>
        </Box>
        </AccordionSummary>
        <AccordionDetails>
          {vl.Collection.map((v,ind)=>{
                return(<Box key={ind}>
                        <Typography onClick={()=>nums(vl.BrandId,v.No)}  sx={{padding:"5px 10px",cursor:"pointer"}}>
                            {v.CarName}
                        </Typography>
                </Box>)
            })}
       </AccordionDetails>
      </Accordion>
        
       </Box> 
       )
                })}
                </Box>
           </Container>
          </Box>
    
    </Box>} 
    
    
{cmpr && <Box sx={{position:{xs:"fixed",sm:"fixed",md:"fixed"},backgroundColor:"rgb(243 239 239)",height:{xs:"100%",sm:"580px",md:"50%",lg:"70%"},width:{xs:"100%",sm:"50%",md:"500px",lg:"600px"},top:{xs:"0",sm:"20%",md:"25%",lg:"15%"},right:{xs:"0",md:"30%"},bottom:{sm:"0px"},left:{sm:"20%",md:"unset"},zIndex:"99"}}>
    
    <Box className="bg" sx={{width:"100%",margin:"30px 0 0 0",position:"relative"}}>
           <h5 style={{margin:"45px 0 10px 40px"}}>Select Your Brand Channel</h5> 
           <span onClick={icos} style={{position:"absolute",right:"10px",fontSize:"25px",top:"-5px",cursor:"pointer"}}><IoCloseCircleOutline/></span>
           <Box>
               <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/skyline-bg.svg"} width="60px"/>
               <img src={"https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/skyline-bg.svg"} width="60px"/>
           </Box>
           <Container maxWidth="lg">
              <Box className="ip" sx={{position:"relative"}}>
                <input type="text" style={{position:"absolute",top:"-15px",width:"100%",height:"38px",border:"1px solid lightgray"}} onChange={inputs} placeholder="Type to Select Brand or Model"/>
                <span style={{position:"absolute",top:"-8px",left:"12px",fontSize:"25px"}}><BiSearch/></span>
                </Box>          
                <h5 style={{padding:"30px 0 10px 0"}}>POPULAR BRANDS</h5>
                <Box sx={{overflow:"auto",width:{xs:"100%",sm:"100%",md:"450px",lg:"550px"},height:{xs:"80vh",sm:"400px",md:"500px",lg:"47vh"}}}>
                 
                {sear.map((vl,ind)=>{
                     return(<Box key={ind} sx={{width:"100%"}}>
                        <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Box sx={{display:"flex",alignItems:"center"}}>
            <img src={vl.BrandImage} style={{width:"70px"}}/>
        <Typography sx={{padding:"0 5px",}}  >{vl.Name}</Typography>
        </Box>
        </AccordionSummary>
        <AccordionDetails>
          {vl.Collection.map((v,ind)=>{
                return(<Box key={ind}>
                        <Typography onClick={()=>num(vl.BrandId,v.No)} sx={{padding:"5px 10px",cursor:"pointer"}}>
                            {v.CarName}
                        </Typography>
                </Box>)
            })}
       </AccordionDetails>
      </Accordion>
        
       </Box> 
       )
                })}
                </Box>
           </Container>
          </Box>
    
    </Box>} 
    

    </Container>)
}


   
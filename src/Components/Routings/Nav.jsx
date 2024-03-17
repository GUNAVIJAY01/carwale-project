import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RoomIcon from '@mui/icons-material/Room';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import TranslateSharpIcon from '@mui/icons-material/TranslateSharp';
import { Container, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { FaBars } from "react-icons/fa6";
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import CreditScoreIcon from '@mui/icons-material/CreditScore';
import { FaHome } from "react-icons/fa";
import { CiShoppingTag } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

export default function Nav() {




    const [state, setState] = React.useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {['Home', 'New Cars', 'Used Car', 'My Shortlist','Car Loan','Loan Against a Car'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index== 0 ?<FaHome /> :""}
                  {index== 1 ?<CiShoppingTag /> :""}
                  {index== 2 ?<FaCar /> :""}
                  {index== 3 ?<FaRegHeart /> :""}
                  {index== 4 ?<IoCardOutline /> :""}
                  {index== 5 ?<CreditScoreIcon /> :""}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Box>
    );
  


  return (
    <Box>
      <Container maxWidth="xl" sx={{position:"sticky",top:"0",backgroundColor:"white",height:"60px",padding:"5px 0",zIndex:"88"}}>
    <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",margin:1,}}>
      <Box sx={{display:"flex",alignItems:"center"}}>
      <Box component="span" sx={{cursor:"pointer",display:{xs:"block",sm:"block",md:"none",lg:"none"},paddingRight:"8px",fontSize:"18px"}}> <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><FaBars/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list()}
            <Box sx={{margin:"10px 0 0 20px "}}>
              <p>TOLL FREE NUMBER</p>
              <p style={{color:"skyblue",padding:"10px 0 0 0"}}><IoCallOutline/> 1800 2090 230</p>
            </Box>
            <Box sx={{margin:"10px 0px 10px 20px "}}>
              <p style={{margin:"10px 0"}}>Download Mobile app</p>
            <Box component="img" src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/app-store.svg?v2" width="100px" sx={{marginRight:"10px"}}></Box>
            <Box component="img" src="https://imgd.aeplcdn.com/0x0/cw/static/icons/svg/play-store.svg?v2"width="100px" ></Box>
            </Box>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>    </Box>
        
        <img src="https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"width="150px"style={{paddingBottom:"8px",cursor:"pointer"}} />
      </Box>
      <Box sx={{display:{xs:"none",sm:"none",md:"none",lg:"flex"}}}>
      <Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> NEW CARS</Typography>
        </Box>
<Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> USED CARS</Typography>
        </Box>
        <Box component="div" sx={{margin:{lg:"0 15px 0 0"},cursor:"pointer"}}>
        <Typography component="h4"> REVIEW & NEWS</Typography>
      </Box>
      </Box>
      
      <Box position="relative" >
        <Stack direction="row" spacing={2}sx={{alignItems:"center"}}>
        <Box component="input" placeholder="Search" sx={{display:{xs:"none",sm:"none",md:"none",lg:"block"},height:"35px",padding:"0px 8px",borderRadius:"5px",outline:"none",border:"1px solid lightgray",width:"100%"}}/>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"block",sm:"block",md:"block",lg:"none"}}}>             <SearchIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer"}}><RoomIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}><TranslateSharpIcon/>     </Box>
        <Box component="span" sx={{cursor:"pointer",display:{xs:"none",sm:"none",md:"none",lg:"block"}}}>             <AccountCircleSharpIcon/>     </Box>
        </Stack>
      </Box>


    </Box>
        </Container>      
        </Box>
  );
}
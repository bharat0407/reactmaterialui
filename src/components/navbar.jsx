import { Pets,Mail, Notifications } from '@mui/icons-material';
import { AppBar, Box, InputBase, styled, Toolbar, Typography,Badge, Avatar ,Menu,MenuItem} from '@mui/material';
import React, { useState } from 'react';
import Userimg from '../images/user.jpeg';

const StyledToolbar = styled(Toolbar)({
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center"
})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width:"40%",
}));
const IconContainer = styled("Box")(({theme})=>({
    display: "none",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"flex"
    }
}));
const UserBox = styled("Box")(({theme})=>({
    display: "flex",
    gap:"20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]:{
        display:"none"
    }
}));
const Navbar = () => {
    const[open,setOpen] = useState(false);
    return (<AppBar position='sticky' variant='outlined'>
        <StyledToolbar>
            <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }} >MEMORY</Typography>
            <Pets sx={{ display: { xs: "block", sm: "none" } }} />
            <Search><InputBase placeholder='search...' /></Search>
            <IconContainer>
                <Badge badgeContent={4} color="error">
                    <Mail />
                </Badge>
                <Badge badgeContent={2} color="error">
                   <Notifications/>
                </Badge>
                <Avatar alt='User' src={Userimg}
                onClick={(e)=>setOpen(true)}
                 />
                
            </IconContainer>
            <UserBox onClick = {(e)=>setOpen(true)}>
                    <Avatar alt='User' src={Userimg}></Avatar>
                    <Typography variant='h6'>Bharat</Typography>
                </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e)=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>

    </AppBar>
    )
}

export default Navbar;
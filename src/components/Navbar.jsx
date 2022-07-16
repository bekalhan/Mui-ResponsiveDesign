import { AppBar,Toolbar,styled, Typography ,Box, InputBase, Badge ,Menu , MenuItem} from '@mui/material'
import React from 'react';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between",

});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
  }));

  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));

  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));




function Navbar() {

    const [open,setOpen] = useState(false);


  return (
    <AppBar position='stick'>
        <StyledToolbar>
            <Typography variant="h6" sx={{display:{xs:"none",sm:"block"}}}>
                ROOT!
            </Typography>
            <MenuIcon sx={{display:{xs:"block",sm:"none"}}} />
            <Search>
                <InputBase placeholder='search...'></InputBase>
            </Search>
            <Icons>
                <Badge badgeContent={4} color="error">
                    <EmailIcon />
                </Badge>
                <Badge badgeContent={2} color="error">
                    <NotificationsIcon />
                </Badge>
                <AccountCircleIcon sx={{width:30,height:30}} onClick={e=>setOpen(true)} />
            </Icons>
            <UserBox>
                 <AccountCircleIcon sx={{width:30,height:30}} onClick={e=>setOpen(true)} />
                 <Typography variant='h6'>
                        Berat
                 </Typography>
            </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        onClose={e =>setOpen(false)}
        open={open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar
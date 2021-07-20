import React from 'react'
import {AppBar, Toolbar, Typography,IconButton} from '@material-ui/core'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import MenuIcon from '@material-ui/icons/Menu';


    function FadeMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    
  return (
    <div>
        <AppBar position='static'>
        <Toolbar>
            <IconButton color='inherit'>
            <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
            <MenuIcon />
            </Button>
            <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            >
            <MenuItem onClick={handleClose}>Twenty20</MenuItem>
            <MenuItem onClick={handleClose}>One Day International</MenuItem>
            <MenuItem onClick={handleClose}>Tests</MenuItem>
            </Menu>
            </IconButton>
            <Typography variant='h6'>Live Score</Typography>
        </Toolbar>
     
      </AppBar>    
    </div>
  );
}

export default FadeMenu
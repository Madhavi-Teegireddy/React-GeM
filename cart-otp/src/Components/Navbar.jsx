import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const Navbar = ({cart}) => {   
  console.log("cart in navbar", cart)     
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Products
          </Typography>
          {/* <Link to="/cart">
          <ShoppingCartIcon {cart.length}/>
          </Link> */}

          <Link to="/cart" style={{ textDecoration: 'none', color: 'inherit' }}>
              <IconButton color="inherit">
                <ShoppingCartIcon />
                <span style={{fontSize:"12px"}}>{cart.length}</span>
              </IconButton>
            </Link>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default Navbar
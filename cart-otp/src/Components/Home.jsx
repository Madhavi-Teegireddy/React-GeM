import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { Button,  Typography } from '@mui/material';
import Navbar from './Navbar';
import Cart from './Cart';

import { Link } from 'react-router-dom';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 60,
    lineHeight: '60px',
  }));
  

  
const Home = ({handleAddCart, cart}) => {
    const [product, setProduct] = useState([]);    
    

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
    },[]);

  return (
    <div>       
        <Navbar cart={cart}/> 

         <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 6, sm: 8, md: 12 }} alignItems="center" textAlign="center"
         sx={{
            '--Grid-borderWidth': '1px',
            borderTop: 'var(--Grid-borderWidth) solid',
            borderLeft: 'var(--Grid-borderWidth) solid',
            borderColor: 'divider',
            '& > div': {
              borderRight: 'var(--Grid-borderWidth) solid',
              borderBottom: 'var(--Grid-borderWidth) solid',
              borderColor: 'divider',
            },
          }}>
         {product.map((item, id) => (
          
           <Grid item xs={2} sm={4} md={3} key={id} justifyContent="center">
            <Link to={`/singleProduct/${item.id}`}>
           <Typography variant="h6" sx={{ mb: 1 }}>
               {item.title}
           </Typography>
           <Box>
           <img style={{ width: '100px', height: '100px', margin: 'auto' }} src={item.image} alt={item.title} loading="lazy" />
           </Box>
           </Link>
           <Button variant="outlined" color="success" onClick={() => {handleAddCart(item)}}>Add to Cart</Button>
           
       </Grid>
         ))}
       </Grid>

    </div>
  )
}

export default Home

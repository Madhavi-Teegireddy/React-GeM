import React from 'react';
import { Box, Button, Grid, List, Typography } from '@mui/material';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Cart = ({ cart, setCart }) => {
  console.log("Cart component:", cart);

  const handleDelete = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

const handleIncreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
    );
    setCart(updatedCart);
  };
  
  const handleDecreaseQuantity = (id) => {
    const updatedCart = cart.map((item) =>
      item.id === id && (item.quantity || 0) > 1
        ? { ...item, quantity: (item.quantity || 0) - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateItemTotal = (item) => {
    return (item.price || 0) * (item.quantity || 0) 
  }

  const calculateCartTotal = () => {
    return cart.reduce((total,item) => total+calculateItemTotal(item),0)
  }

  return (
    <div>
      <Navbar cart={cart} />

      <h2>Cart Items</h2>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 6, sm: 8, md: 12 }}
        alignItems="center"
        textAlign="center"
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
        }}
      >
        {cart.map((item, id) => (
            
          <Grid item xs={2} sm={4} md={3} key={id} justifyContent="center">
            <Typography variant="h6" sx={{ mb: 1 }}>
              {item.title}
            </Typography>
            <Box>
              <img
                style={{ width: '100px', height: '100px', margin: 'auto' }}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            </Box>
            <Box>
              <Button onClick={() => handleIncreaseQuantity(item.id)}>+</Button>
              <span>{item.quantity}</span>
              <Button onClick={() => handleDecreaseQuantity(item.id)}>-</Button>
            </Box>

            <Typography variant="body2">
              Total: Rs.{calculateItemTotal(item).toFixed(2)}
            </Typography>
            <Button onClick={() => handleDelete(item.id)}>Remove</Button>
            
          </Grid>
           
        ))}
       
      </Grid>

      <Typography variant="h6" sx={{ mt: 2 }}>
        Total Cart Price: ${calculateCartTotal().toFixed(2)}
      </Typography>

      <Link to="/payment">
      <Typography>Proceed to Payment</Typography>
      </Link>
    </div>
  );
};

export default Cart;


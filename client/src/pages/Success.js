import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import Jumbotron from '../components/Jumbotron';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import '../index.css';

import {
  Typography,
  Box,
} from '@material-ui/core';


function Success() {
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() => {
    async function saveOrder() {
      const cart = await idbPromise('cart', 'get');
      const products = cart.map((item) => item._id);

      if (products.length) {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) => {
          idbPromise('cart', 'delete', item);
        });
      }

      setTimeout(() => {
        window.location.assign('/');
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Box component="div" className='success'>
      <Jumbotron>
        <Typography variant='h4' style={{ height: 500, fontFamily: "'Ephesis', cursive" , clear: 'both', textAlign: 'center', paddingTop:'12.75rem', paddingLeft: '25rem',}}>Thank you for your purchase! You will be re-routed to the homepage soon.</Typography>
      </Jumbotron>
    </Box>
  );
}

export default Success;

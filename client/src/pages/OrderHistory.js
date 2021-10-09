import React from 'react';
import { Link } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
// import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Grid,
  Box,
} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    background: '#f8f3e5',
    height: '100%',
    width: '100%',
    margin: '0px'
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap'
  }
})


const OrderHistory = () => {

  const classes = useStyles();

  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <Box component='div' className={classes.mainContainer}>
        <Link to="/" style={{ textDecoration: 'none', fontSize:'1rem', color: '#666', fontWeight: '600', paddingTop:'2rem'}}>← Back to Products</Link>

        {user ? (
          <Box component='div'>
            <Typography variant='h3' style={{ textAlign: 'center', fontFamily: "'Ephesis', cursive" }} >
              Order History for {user.firstName} {user.lastName}
            </Typography>
            <Divider />
            {user.orders.map((order) => (
              <Box component='div' key={order._id} style={{ paddingTop: '2rem'}}>
                <Typography variant='h5' style={{ textAlign: 'center', paddingBottom: '1rem'}}>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </Typography>
                <Grid container className={classes.grid}>
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <Grid item xs={12} sm={8} md={4}>
                      <Box component='div' key={index} style={{ textAlign: 'center'}}>
                        <Link style={{ textDecoration: 'none', fontFamily:'Ephesis', color: '#666'}} to={`/products/${_id}`}>
                          <img alt={name} src={`/images/${image}`} />
                          <Box component="p">{name}
                          </Box>
                        </Link>
                        <Box component='div'>
                          <span>${price}</span>
                        </Box>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}

          </Box>
        ) : null}
      </Box>
    </>
  );
}

export default OrderHistory;

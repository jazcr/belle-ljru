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
  Box,
} from '@material-ui/core';

const useStyles = makeStyles({
  icon: {
    
  },
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
      <Box component='div' className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <Typography variant='h2'>
              Order History for {user.firstName} {user.lastName}
            </Typography>
            <Divider />
            {user.orders.map((order) => (
              <Box component='div' key={order._id} className="my-2">
                <Typography variant='h3'>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </Typography>
                <Box component='div' className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <Box component='div' key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <Box component="p">{name}</Box>
                      </Link>
                      <Box component='div'>
                        <span>${price}</span>
                      </Box>
                    </Box>
                  ))}
                </Box>
              </Box>
            ))}
          </>
        ) : null}
      </Box>
    </>
  );
}

export default OrderHistory;

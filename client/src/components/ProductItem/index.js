import React from "react";
//import '../../index.css';
import { Link } from "react-router-dom";
//import { pluralize } from "../../utils/helpers"
import { useStoreContext } from "../../utils/GlobalState";
import { ADD_TO_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
//import Typed from 'react-typed';

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles({
  cardContainer: {
    maxWidth: 520,
    margin: '3rem'
  },
  span: {
    fontSize: '1.25rem',
    color: 'black',
    fontWeight: '500'
  },
  title: {
    textAlign: 'center',
    textDecoration: 'none',
    color: 'black',
    fontWeight: '700'
  },
  icon: {
    fontSize: '2rem'
  },
 
})



function ProductItem(item) {
  const classes = useStyles();
  const [state, dispatch] = useStoreContext();

  const {
    image,
    name,
    _id,
    price,
    //description,
    //quantity
  } = item;

  const { cart } = state

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
    }
  }

  return (
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <Link to={`/products/${_id}`} style={{ textDecoration: 'none' }}>
            <CardMedia>
              <img
                alt={name}
                src={`/images/${image}`}
                style={{ alignItems: 'center'}}
              />
            </CardMedia>
            <CardContent>
              <Typography variant='h6' className={classes.title}>{name}</Typography>
            </CardContent>
          </Link>
          <Typography
            variant='body2'
            color='textSecondary'
            component='p'
            style={{ textAlign: 'right', marginRight: '1px' }}>
            Price: <span className={classes.span}>${price}</span>
          </Typography>
        </CardActionArea>
        <CardActions>
          <IconButton onClick={addToCart}>
            <Tooltip title='Add To Cart'>
              <AddShoppingCartIcon className={classes.icon} />
            </Tooltip>
          </IconButton>
        </CardActions>
      </Card>
  );
}

export default ProductItem;

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import '../index.css';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  ADD_TO_CART,
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import {
  Divider,
  Typography,
  Box,
  IconButton,
} from '@material-ui/core';

const useStyles = makeStyles({
  icon: {
    fontSize: '2rem'
  },
})


const Detail= () => {

  const classes = useStyles();

  const [state, dispatch] = useStoreContext();

  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {

    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }

    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }

    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () => {
    const itemInCart = cart.find((cartItem) => cartItem._id === id);
    if (itemInCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemInCart,
        purchaseQuantity: parseInt(itemInCart.purchaseQuantity) + 1,
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...currentProduct, purchaseQuantity: 1 },
      });
      idbPromise('cart', 'put', { ...currentProduct, purchaseQuantity: 1 });
    }
  };

  const removeFromCart = () => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct && cart ? (
        <Box component="div">
          <Link to="/" style={{ textDecoration: 'none', fontSize:'1rem', color: '#666', fontWeight: '600', paddingTop:'2rem'}}>← Back to Products</Link>

          <Typography variant='h3' style={{ textAlign: 'center', fontFamily: "'Ephesis', cursive" }} >{currentProduct.name}</Typography>
          <Divider />

          <Box component="p" style={{ textAlign: 'center', paddingTop: '2rem', paddingBottom: '2rem' }}>{currentProduct.description}</Box>
          <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '30%' }}
          />
          <Box component="p" style={{ textAlign: 'center'}}>
          Price:<span style={{ fontWeight:'600', paddingLeft: '1rem'}}>${currentProduct.price}{' '}</span>
            <IconButton onClick={addToCart}>
              <Tooltip title='Add To Cart'>
                <AddShoppingCartIcon className={classes.icon} />
              </Tooltip>
            </IconButton>
            <IconButton
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              <Tooltip title='Remove From Cart'>
                <RemoveShoppingCartIcon className={classes.icon} />
              </Tooltip>
            </IconButton>

          </Box>
        </Box>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;

import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/client';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import CartItem from '../CartItem';
import Auth from '../../utils/auth';
import { useStoreContext } from '../../utils/GlobalState';
import { TOGGLE_CART, ADD_MULTIPLE_TO_CART } from '../../utils/actions';
import './style.css';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Box, Slide} from '@mui/material';
import CancelIcon from '@mui/icons-material/Cancel';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { Link } from "react-router-dom";

import {
  IconButton,
} from '@material-ui/core';

const stripePromise = loadStripe('pk_test_51JgHG1K26w07WHByfAHM2hrxkw41soOIIhAabUL4v1k2ZQyOhkjHdNReFaWnH0Us5r27zoqJYptMLsrickPCesBG00OZia2Ixq');

const Cart = () => {
  const [state, dispatch] = useStoreContext();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  useEffect(() => {
    async function getCart() {
      const cart = await idbPromise('cart', 'get');
      dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
    }

    if (!state.cart.length) {
      getCart();
    }
  }, [state.cart.length, dispatch]);

  function toggleCart() {
    dispatch({ type: TOGGLE_CART });
  }

  function calculateTotal() {
    let sum = 0;
    state.cart.forEach((item) => {
      sum += item.price * item.purchaseQuantity;
    });
    return sum.toFixed(2);
  }

  function submitCheckout() {
    const productIds = [];

    state.cart.forEach((item) => {
      for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item._id);
      }
    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  if (!state.cartOpen) {
    return (
      <div className="cart-closed" onClick={toggleCart}>
        <FontAwesomeIcon icon={faShoppingBag} color='#e9cb81' />
      </div>
    );
  }


  return (
    <Box sx={{ width: `calc(100px + 16px)` }}>
      {/* <FormControlLabel
        control={<Switch checked={state.cartOpen} onChange={toggleCart} />}
        label="Show"
      /> */}
      <Slide direction="up" in={state.cartOpen} mountOnEnter unmountOnExit>
        <div className="cart">
          <CancelIcon className="close" onClick={toggleCart} />

          <h2>Shopping Cart</h2>
          {state.cart.length ? (
            <div>
              {state.cart.map((item) => (
                <CartItem key={item._id} item={item} />
              ))}

              <div className="flex-row space-between">
                <strong>Total: ${calculateTotal()}</strong>

                {Auth.loggedIn() ? (
                  <IconButton style={{ fontSize: '1rem'}} onClick={submitCheckout}>Checkout</IconButton>
                ) : (
                  <Link style={{ textDecoration:'none', color:'#f8f3e5'}} to="/login">(Log In)
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="emptyCart">
            <div style={{ textAlign: 'center'}}><SelfImprovementIcon className="meditate" style={{fontSize:"50px"}}/></div>
            <h3 style={{ textAlign: 'center'}}>
              You have not added anything to your cart yet!
            </h3>
            </div>
          )}
        </div>
      </Slide>
    </Box>

  );
};

export default Cart;

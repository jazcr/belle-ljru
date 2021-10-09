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
import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Slide from '@mui/material/Slide';
import FormControlLabel from '@mui/material/FormControlLabel';
import CancelIcon from '@mui/icons-material/Cancel';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import { Link } from '@material-ui/core';

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
                  <button onClick={submitCheckout}>Checkout</button>
                ) : (
                  <Link style={{ textDecoration:'none', color:'#f8f3e5'}} href="/login">(Log In)</Link>
                )}
              </div>
            </div>
          ) : (
            <div className="emptyCart">
            <div style={{ textAlign: 'center'}}><SelfImprovementIcon className="meditate" style={{fontSize:"50px"}}/></div>
            <h3 style={{ textAlign: 'center'}}>
              You haven't added anything to your cart yet!
            </h3>
            </div>
          )}
        </div>
      </Slide>
    </Box>
    // <div className="cart">
    //   <div className="close" onClick={toggleCart}>
    //     [close]
    //   </div>
    //   <h2>Shopping Cart</h2>
    //   {state.cart.length ? (
    //     <div>
    //       {state.cart.map((item) => (
    //         <CartItem key={item._id} item={item} />
    //       ))}

    //       <div className="flex-row space-between">
    //         <strong>Total: ${calculateTotal()}</strong>

    //         {Auth.loggedIn() ? (
    //           <button onClick={submitCheckout}>Checkout</button>
    //         ) : (
    //           <span>(log in to check out)</span>
    //         )}
    //       </div>
    //     </div>
    //   ) : (
    //     <h3>
    //       <span role="img" aria-label="shocked">
    //         😱
    //       </span>
    //       You haven't added anything to your cart yet!
    //     </h3>
    //   )}
    // </div>
  );
};

export default Cart;
// <FormControlLabel
//   control={<Switch checked={checked} onChange={handleChange} />}
//   label="Show"
// />
// <Box sx={{ display: 'flex' }}>
//   <Grow in={checked}>{icon}</Grow>
//   {/* Conditionally applies the timeout prop to change the entry speed. */}
//   <Grow
//     in={checked}
//     style={{ transformOrigin: '0 0 0' }}
//     {...(checked ? { timeout: 1000 } : {})}
//   >
//     {icon}
//   </Grow>
// </Box> 

// <Paper sx={{ m: 1 }} elevation={4}>
// <Box component="svg" sx={{ width: 100, height: 100 }}>
//   <Box
//     component="polygon"
//     sx={{
//       fill: (theme) => theme.palette.common.white,
//       stroke: (theme) => theme.palette.divider,
//       strokeWidth: 1,
//     }}
//     points="0,100 50,00, 100,100"
//   />
// </Box>
// </Paper>
// );

// export default function SimpleGrow() {
// const [checked, setChecked] = React.useState(false);

// const handleChange = () => {
// setChecked((prev) => !prev);
// };

// return (
// <Box sx={{ height: 180 }}>
//   <FormControlLabel
//     control={<Switch checked={checked} onChange={handleChange} />}
//     label="Show"
//   />
//   <Box sx={{ display: 'flex' }}>
//     <Grow in={checked}>{icon}</Grow>
//     {/* Conditionally applies the timeout prop to change the entry speed. */}
//     <Grow
//       in={checked}
//       style={{ transformOrigin: '0 0 0' }}
//       {...(checked ? { timeout: 1000 } : {})}
//     >
//       {icon}
//     </Grow>
//   </Box>
// </Box>
// );
// }


import React from 'react';
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_FROM_CART, UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";

import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  TextField,
  Box
} from '@material-ui/core';

//CSS Styles  

const CartItem = ({ item }) => {

  const [, dispatch] = useStoreContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    idbPromise('cart', 'delete', { ...item });

  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      idbPromise('cart', 'delete', { ...item });

    } else {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: item._id,
        purchaseQuantity: parseInt(value)
      });
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <Box component='div' className="cartItem">
      <Box component='div'>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </Box>
      <Box component='div'>
        <Box component='div'>{item.name}, ${item.price}</Box>
        <Box component='div'>
          <span>Qty:</span>
          <TextField 
            id="standard-basic" 
            label="Search Item" 
            variant="standard"
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            <FontAwesomeIcon icon={faTrashAlt} color='#6C4740' />
          </span>
        </Box>
      </Box>
    </Box>
  );
}

export default CartItem;
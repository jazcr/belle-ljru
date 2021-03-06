import React, { useEffect, useState } from 'react';
import ProductItem from '../ProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@mui/material/InputAdornment';
import {
  Box,
  Grid,
  TextField
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
  },
  search: {
    marginRight: '10px',
    textAlign: 'right'
  }
})

function ProductList() {

  const classes = useStyles();

  const [search, setSearch ] = useState('');

  const [state, dispatch] = useStoreContext();

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts() {
    if (!currentCategory) {
      return state.products;
    }

    return state.products.filter(
      (product) => product.category._id === currentCategory
    );
  }



  return (
    <Box component='div' spacing={2} className={classes.mainContainer}>
    <Box component='div' className={classes.search}>
      {/* <TextField id="standard-basic" label="Search Item" variant="standard" value={search} onChange={e => setSearch(e.target.value)} 
      />
      <SearchIcon style={{ marginTop:'1.50%'}} /> */}
      <TextField
          label="Search Item"
          id="outlined-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          InputProps={{
            endAdornment: <InputAdornment position="end"><SearchIcon style={{ marginTop:'1.50%'}} /></InputAdornment>,
          }}
          className={classes.search}
          value={search} 
          onChange={e => setSearch(e.target.value)}
        />
      </Box>
      {state.products.length ? (
        <Grid container className={classes.grid}>
          {filterProducts().filter(product => product.name.toLowerCase().includes(search.toLowerCase())).map((product) => (
            <Grid item xs={12} sm={8} md={4}>
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
            />
            </Grid>
          ))}
        </Grid>
      ) : (
        <h3>You haven't added any products yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </Box>
  );
}

export default ProductList;

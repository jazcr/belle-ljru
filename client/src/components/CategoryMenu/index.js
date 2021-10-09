import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Link,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles({
  heading: {
      color: '#000',
      padding: '4rem 0 2rem 1rem',
      textAlign: 'center',
      fontFamily: "'Ephesis', cursive"
  },
  btn: {
    paddingBottom: '5%',
    fontSize: '1.25rem'    
  }
})

function CategoryMenu() {

  const classes = useStyles();

  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <>
      <Typography className={classes.heading} variant='h3'>Belle L'JaRu Skincare: Love the skin you are in!</Typography>
      {categories.map((item) => (
        <IconButton className={classes.btn}
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </IconButton>
      ))}
      <IconButton className={classes.btn}>
          <Link style={{ textDecoration:'none', color:'#666'}} href="/">
            All
          </Link>
        </IconButton>
    </>
  );
}

export default CategoryMenu;

import React from "react";
import Parallax from 'react-rellax';
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../index.css';
import HomeFooter from '../components/HomeFooter';

import { makeStyles } from '@material-ui/core/styles';
//import Typed from 'react-typed';
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  IconButton
} from '@material-ui/core';

const useStyles = makeStyles({
  mainContainer: {
    background: '#f8f3e5',
    height: '100%',
    width: '100%',
    margin: '50px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    padding: '50px 0 0',
    flexWrap: 'wrap'
  },
  cardContainer: {
    maxWidth: 650,
    margin: '3rem'
  },
  footer: {
    backgroundColor: '#6C4740'
  }
})


const Home = () => {
  const classes = useStyles();
  return (
    <>
      <div className="container1">
        <Parallax speed={25}>
          <div className="bg1 rellax"></div>
        </Parallax>
        <Parallax speed={30}>
          <div className="bg1 rellax"></div>
        </Parallax>
        <Parallax speed={45}>
          <div className="bg1 rellax"></div>
          <div style={{ height: 700 }}>
            <h1 className='parallaxText'> Belle L'JaRu Skincare</h1>
          </div>
        </Parallax>

        <Parallax speed={60}>
          <div className="bg1 rellax"></div>
        </Parallax>
        <Parallax speed={75}>
          <div className="bg1 rellax"></div>
        </Parallax>
        <Parallax speed={90}>
          <div className="bg1 rellax"></div>
        </Parallax>
      </div>
      <div className="fixed"></div>
      <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
      </div>
      <br /><br /><br /><br /><br /><br />
      <HomeFooter />
    </>
  );
};

export default Home;

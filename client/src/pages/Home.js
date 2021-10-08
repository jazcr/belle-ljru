import React from "react";
import Parallax from 'react-rellax';
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import '../index.css';
import HomeFooter from '../components/HomeFooter';




const Home = () => {
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
            <h1 className='parallaxText'></h1>
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

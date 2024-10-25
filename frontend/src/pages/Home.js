
import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCartProduct from '../components/HorizontalCartProduct';

const Home = () => {
  console.log("Home component rendered");
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCartProduct category={"airpodes"} heading={"Top's Airpodes"} />
    </div>
  );
};

export default Home; 

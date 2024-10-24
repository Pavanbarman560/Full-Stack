
import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';

const Home = () => {
  console.log("Home component rendered");
  return (
    <div>
      <CategoryList />
      <BannerProduct />
    </div>
  );
};

export default Home; 

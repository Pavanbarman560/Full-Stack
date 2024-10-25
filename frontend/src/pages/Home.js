
import React from 'react';
import CategoryList from '../components/CategoryList';
import BannerProduct from '../components/BannerProduct';
import HorizontalCartProduct from '../components/HorizontalCartProduct';
import VerticalCartProduct from '../components/verticalCartProduct';


const Home = () => {
  console.log("Home component rendered");
  return (
    <div>
      <CategoryList />
      <BannerProduct />
      <HorizontalCartProduct category={"airpodes"} heading={"Top's Airpodes"} />
      <HorizontalCartProduct category={"watches"} heading={"Popular's Watches"} />
      <VerticalCartProduct category={"mobiles"} heading={"Latest's Mobiles"} />
      <VerticalCartProduct category={"mouse"} heading={"Best Mouse"} />
      <VerticalCartProduct category={"televisions"} heading={"3D Televisions"} />
      <VerticalCartProduct category={"camera"} heading={"DSLR Camera"} />
      <VerticalCartProduct category={"earphones"} heading={"BoAt Earphones"} />
      <VerticalCartProduct category={"speakers"} heading={"Deep bass Speakers"} />
      <VerticalCartProduct category={"refrigerator"} heading={"5 Star Refrigerator"} />
      <VerticalCartProduct category={"printers"} heading={"Popular's Printers"} />
      <VerticalCartProduct category={"processor"} heading={"Top's Processor"} />
      <VerticalCartProduct category={"trimmers"} heading={" Hot Trimmers"} />
      
    </div>
  );
};

export default Home; 

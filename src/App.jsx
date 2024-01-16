import React from "react";
import "./App.css";
import "./Carousel.css";
import Slider from "./Components/Slider";
import Navbar from "./Components/Navbar";
import All_Category from "./Components/All_Category";
import Round from "./Components/Round";
import Three from "./Components/Three";
import Card from "./Components/Card";
import ForYouData from "./Components/ForYouData";
import { FaCommentsDollar } from "react-icons/fa";
import DealOnlyOnNoon from "./Components/DealOnlyOnNoon";
import WomenFashion from "./Components/WomenFashion";
import MensFashion from "./Components/MensFashion";
import KidsFashion from "./Components/KidsFashion";
import HomeAndkitchen from "./Components/HomeAndkitchen";

function App() {
  return (
    <>
      <Navbar />
      <All_Category />
      <Slider />
      <Round />
      <Three />
      <h1>Recommended for you</h1>

      <div className="flex-container">
        {ForYouData.map((val) => (
          <Card
            img={val.img}
            description={val.description}
            price={val.price}
            onClick={() =>
              handleCardClick({
               
                description: val.description,
                price: val.price,
              })
            }
          />
        ))}
      </div>
      <h1>Deals only on noon</h1>
< DealOnlyOnNoon/>
<h1>Trending deals in TV & accessories</h1>
<div className="flex-container">
        {ForYouData.map((val) => (
          <Card
            img={val.img}
            description={val.description}
            price={val.price}
            onClick={() =>
              handleCardClick({
               
                description: val.description,
                price: val.price,
              })
            }
          />
        ))}
      </div>
      <h1>Clearance deals</h1>
      <div className="flex-container">
        {ForYouData.map((val) => (
          <Card
            img={val.img}
            description={val.description}
            price={val.price}
            onClick={() =>
              handleCardClick({
               
                description: val.description,
                price: val.price,
              })
            }
          />
        ))}
      </div>
      <Slider />
      <h1>Bestselling toys</h1>
      <div className="flex-container">
        {ForYouData.map((val) => (
          <Card
            img={val.img}
            description={val.description}
            price={val.price}
            onClick={() =>
              handleCardClick({
               
                description: val.description,
                price: val.price,
              })
            }
          />
        ))}
      </div>
      <h1>Bestsellers in home appliances</h1>
      <div className="flex-container">
        {ForYouData.map((val) => (
          <Card
            img={val.img}
            description={val.description}
            price={val.price}
            onClick={() =>
              handleCardClick({
               
                description: val.description,
                price: val.price,
              })
            }
          />
        ))}
      </div>
      <h1>Women's fashion</h1>
      <WomenFashion/>
      <h1>Men's fashion</h1>
      <MensFashion/>
      <h1>Kids' fashion</h1>
      <KidsFashion/>
      <h1>Home & kitchen favourites</h1>
      <HomeAndkitchen/>
      <img src="https://f.nooncdn.com/mpcms/EN0001/assets/8e4d7b89-40cf-4e18-a38d-c4f74927f5d4.jpg?format=avif" alt="" />
      <footer>
        <div className=" h-40">
          <ul className="flex font-bold gap-6 justify-center pt-10">
            <li>careers</li>
            <li>warrenty policy</li>
            <li>sell with us</li>
            <li>terms of use</li>
            <li>terms of sale</li>
            <li>privcy policy</li>
            <li>consumers right</li>
          </ul>

        </div>
      </footer>


     






    </>
  );
}

export default App;

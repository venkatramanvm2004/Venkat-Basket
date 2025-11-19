import { useState, useEffect } from "react";
import { AiOutlineAmazon } from "react-icons/ai";
import { SiShopify } from "react-icons/si";
import { Link } from "react-router-dom";

import basket from "../Components/basket.jpeg";
import bask2 from "../Components/bask2.jpeg";
import veg from "../Components/veg.jpeg";
import veg1 from "../Components/veg1.jpeg";

function Hero() {
  const phoneImages = [veg, veg1, bask2, basket];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % phoneImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [phoneImages.length]);

  return (
    <section className="flex flex-col md:flex-row px-5 py-32 bg-secondary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className="text-white text-5xl">
          <span className="text-black">Freshness and Quality Guaranteed</span>
        </h1>
        <p className="font-light text-white py-10">
          Delivering the freshest organic fruits straight to your home
        </p>
        <div className="flex py-10 items-center gap-5">
          <a href="#" className="hover:text-white">
            <AiOutlineAmazon size={50} />
          </a>
          <a href="#" className="hover:text-white">
            <SiShopify size={50} />
          </a>
        </div>
        <button className="bg-[#2c5c2c] text-white px-6 py-3 rounded-md w-30">
          <Link to="/Order">Order Now</Link>
        </button>
      </div>
      <img
        className="md:w-1/3 rounded-lg shadow-lg"
        src={phoneImages[index]}
        alt="Fresh fruits"
      />
    </section>
  );
}

export default Hero;

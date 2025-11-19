import avagoda from "../Components/avagoda.jpeg";
import grapes from "../Components/grapes.jpeg";
import cauliflower from "../Components/cauliflower.jpeg";
import meadwgs from "../Components/meadwgs.jpeg";
import nogu from "../Components/nogu.jpeg";
import potato from "../Components/potato.jpeg";
import blackberry from "../Components/blackberry.jpeg";
import dragon from "../Components/dragon.jpeg";
import carrot from "../Components/carrot.jpeg";
import mango from "../Components/mango.jpeg";
import cabage from "../Components/cabage (2).jpeg";
import apple  from "../Components/apple.jpeg";
import prome from "../Components/prome.jpeg";
import rambutan from "../Components/rambutan.jpeg";
import tomato from "../Components/tomato.jpeg";
import vagayam from "../Components/vagayam.jpeg";
import vegtablebask from "../Components/vegtablebask.jpeg";
import { useState, useEffect } from "react";
import strawberry from "../Components/strawberry.jpeg";
import ankur from "../Components/ankur.jpeg";
import palasola from "../Components/jackfruite.jpeg";
import pineapple from "../Components/pineapple.jpeg";
import ladyfinger from "../Components/ladyfinger.jpeg";
import papaya from "../Components/papaya.jpeg";
import guava from "../Components/guava.jpeg";
import basket from "../Components/basket.jpeg";
import { Link } from "react-router-dom";

export default function Order() {
  const phoneImages = [strawberry,carrot,mango,dragon];
  const [index, setIndex] = useState(0);
  
    // ✅ Image slider logic
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % phoneImages.length);
      }, 2000);
  
      return () => clearInterval(interval);
    }, [phoneImages.length]);
    return(
    <>
    <div className="w-full min-h-[500px] lg:h-[500px] bg-cover bg-center flex flex-col lg:flex-row items-center justify-between p-6 lg:p-20">
   
    <div className=" flex flex-col justify-center text-left   lg:mt-0 mt-10 lg:ms-0 ms-0 lg:w-1/2 w-full">
      <h1 className="text-5xl font-bold sm:text-4xl lg:text-5xl  leading-tight">Incredible Prices <br />On all Your <br />Favorite items</h1>
      <h3 className="text-lg sm:text-xl lg:text-2xl mt-4">Get More For Less On Price</h3>
      <button className="bg-blue-800 w-40  sm:w-40 h-10 sm:h-12 text-lg sm:text-2xl text-white rounded-4xl mt-6"><Link to="/view">Shop Now</Link></button>
    </div>
     <div className="mt-10 lg:mt-0 lg:w-1/2 w-full flex justify-center  hover:shadow-2xl shadow-black">
      <img src={phoneImages[index]} className="object-contain w-full max-w-[250px] sm:max-w-[300px] lg:max-w-[400px] h-auto" />
    </div>
     </div>
     <div className="flex  flex-col justify-center items-center mx-auto gap-6 mt-12 ">
      <h1 className="text-center text-3xl sm:text-3xl font-semibold">Deals of the day</h1>
      <div className="w-[200px] h-3 sm:w-[200px] bg-amber-400  "></div>
      </div>
    <div className="flex justify-center">
  <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-6">
  
    
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={strawberry} alt="straberry" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Strawberry</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={basket} alt="straberry" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">basket</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={ankur} alt="ankur" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">White radish</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={palasola} alt="palasola" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Jackfruit</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={pineapple} alt="pineapple" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">pineapple</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
       </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={ladyfinger} alt="vedaka" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">ladyfinger</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={apple} alt="apple" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Apple</h2>
      <p className="text-gray-500">40% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={avagoda} alt="avagoda" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Avacoda</h2>
      <p className="text-gray-500">10% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={blackberry} alt="blackberry" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Black berry</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
       </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={mango} alt=" Mango" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Mango</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={dragon} alt="dragon" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Dragon fruit</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={cabage} alt="cabage" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">White Cabbage</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
     </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={carrot} alt="carrot" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Carrot</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={grapes} alt="graphs" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Graphs</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={cauliflower} alt="Kabage" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Cauliflower</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={meadwgs} alt="meadwgs" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Cherries</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={nogu} alt="nogu" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Palm fruit</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={potato} alt="potato" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Potato</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={prome} alt="prome" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Pomegranate</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={rambutan} alt="rambutan" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Rambutan</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={tomato} alt="tomato" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Tomato</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={vagayam} alt="vagayam" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Onion</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={vegtablebask} alt="vegtablebask" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Vegtablebask</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={guava} alt="koyaka" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">Guava</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
        </button>
    </div>
    <div className="flex flex-col items-center text-center  hover:shadow-2xl shadow-black">
      <img src={papaya} alt="papaya" className="w-64 h-64 object-contain" />
      <h2 className="font-bold text-xl mt-4">papaya</h2>
      <p className="text-gray-500">30% off</p>
      <p>Grab your deal now!</p>
      <button className="bg-black text-white px-4 py-2 mt-2">
        <Link to="/view">Order Now</Link>
      </button>
    </div>
  </div>
</div>
<div className="grid grid-cols-3 justify-items-center items-center mt-16 gap-6">
</div>
</>
 )
}
  





  
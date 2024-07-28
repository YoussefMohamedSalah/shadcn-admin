import React from 'react';
import firstImage from '../assets/Cat_Health_QNETWP.webp'
import secondImage from '../assets/QNET_Product_Cat_Beauty.webp'
import thirdImage from '../assets/QNET_Product_Cat_Education.webp'
import fourthImage from '../assets/QNET_Product_Cat_Holidays.webp'
import fifthImage from '../assets/QNET_Product_Cat_Home_Living.webp'
import sixImage from '../assets/QNET_Product_Cat_Technology.webp'
import sevensImage from '../assets/QNET_Product_Cat_Watches_Jewellery_Large.webp'
import eightImage from '../assets/QNET_Product_Cat_Wellness.webp'

const products = [
  { bgColor: "#053386", name: 'Wellness', image: eightImage },
  { bgColor: "#2E2E2E", name: 'Watches & Jewellery', image: sevensImage },
  { bgColor: "#85B8E3", name: 'Home & Living', image: fifthImage },
  { bgColor: "#4BA524", name: 'Health', image: firstImage },
  { bgColor: "#C28C88", name: 'Personal Care & Beauty', image: secondImage },
  { bgColor: "#EFB500", name: 'Holidays', image: fourthImage },
  { bgColor: "#2669BE", name: 'Education', image: thirdImage },
  { bgColor: "#775884", name: 'Technology', image: sixImage },
];

const ProductCard = ({ name, image, bgColor }: { name: string, image: string, bgColor: string }) => (
  <div className="flex flex-col items-center p-2">
    <img src={image} alt={name} className="w-full h-80 object-cover rounded-t-lg shadow-2xl " />
    <div style={{ backgroundColor: `${bgColor}` }} className={` w-full flex items-center justify-center rounded-b-lg shadow-2xl  p-3`}>
      <p className=" text-xl font-semibold text-white">{name}</p>
    </div>
  </div>
);

const OurProducts = () => (
  <div className="py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">OUR <span className="text-[#ec6726]">PRODUCTS</span></h2>
      <h3 className="mt-4 text-center font-[500] text-[26px]">The Best Products in the Right Business</h3>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map(product => (
          <ProductCard key={product.name} name={product.name} image={product.image} bgColor={product.bgColor} />
        ))}
      </div>
    </div>
  </div>
);

export default OurProducts;

import React from 'react';
import image from '../assets/royal_logo.png';  // Image for the right section
import backgroundImage from '../assets/hero_image.jpg';  // Background image
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 flex flex-col lg:flex-row bg-black bg-opacity-50">
        {/* Image Section */}
        <div className="flex-1 flex items-center justify-center lg:order-last">
          <img src={image} alt="Hero" className="object-cover max-w-full max-h-full" />
        </div>

        {/* Text Section */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center lg:text-start max-w-[90%] lg:max-w-[30vw]">
            <p className="text-lg text-white mb-8">
              We’re thrilled to embark on this journey with you, championing your purpose, dreams and aspirations for a brighter, more sustainable future. Welcome to a year of growth, empowerment and collective success with Royale.
            </p>
            <h5 className="text-xl sm:text-xl font-[700] text-white mb-8">
              ROYAL: Championing You, In Every Way, Every Day.
            </h5>
            <Link
              to={ROUTES.LOGIN}
              className="bg-[#ec6726] text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-[#d65c1e] transition duration-300"
            >
              DISCOVER MORE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

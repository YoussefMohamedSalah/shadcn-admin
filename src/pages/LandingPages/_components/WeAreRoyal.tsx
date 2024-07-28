import first from '../assets/weAreRoyale/our-company-HP.webp';
import second from '../assets/weAreRoyale/opportunity-HP.webp';
import third from '../assets/weAreRoyale/CSR-HP.webp';
import fourth from '../assets/weAreRoyale/ManCityWebBanner23-1634x617-Homepage.webp';


const WeAreRoyalCard = ({ title, image, description }: any) => (
  <div className="flex flex-col items-center p-2">
    <img src={image} alt={title} className="w-full h-full object-cover rounded-lg shadow-lg" />
  </div>
);

const WeAreRoyal = () => (
  <div className="py-12 bg-[#f7f8f9] ">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-center">WE ARE <span className="text-[#ec6726]">Royal</span></h2>
      <p className="mt-4 text-lg text-center text-gray-600">A company that empowers entrepreneurs and promotes sustainable products.</p>
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-2 lg:grid-rows-[1fr_1fr] lg:grid-flow-col lg:auto-rows-min">
        <div className="lg:col-span-1 lg:row-span-2 flex flex-col h-full">
          <WeAreRoyalCard
            image={first}
          />
        </div>
        <div className="lg:col-span-1 flex flex-col">
          <WeAreRoyalCard
            image={second}
          />
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <WeAreRoyalCard
            image={third}
          />
        </div>
      </div>
      <WeAreRoyalCard
        image={fourth}
      />

    </div>
  </div>
);

export default WeAreRoyal;

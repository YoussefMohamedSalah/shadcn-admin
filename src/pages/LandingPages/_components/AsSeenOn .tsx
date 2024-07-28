import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CarouselBtns from './CarouselBtns';

const AsSeenOn = () => {
  const TOP_CATEGORIES_BREAKPOINTS: ResponsiveType = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1600 },
      items: 10,
      slidesToSlide: 1
    },
    desktop: {
      breakpoint: { max: 1600, min: 1200 },
      items: 8,
      slidesToSlide: 1
    },
    betweenDesktopAndTablet: {
      breakpoint: { max: 1200, min: 1024 },
      items: 8,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 850 },
      items: 6,
      slidesToSlide: 1
    },
    betweenTabletAndMobile: {
      breakpoint: { max: 850, min: 600 },
      items: 4,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 599, min: 0 },
      items: 2,
      slidesToSlide: 1
    }
  };
  return (
    <div className="as-seen-on bg-gray-100 py-2 px-2">
      <div className="px-2 flex ">
        <div className="hidden md:block">
          <h2 style={{ minWidth: "max-content" }} className="text-center font-bold text-[16px] my-4 text-[#00000066]">As seen on:</h2>
        </div>
        <div className="container mx-auto">
          <Carousel
            additionalTransfrom={0}
            autoPlay
            autoPlaySpeed={5000}
            ssr={false}
            arrows={false}
            centerMode={false}
            customButtonGroup={<CarouselBtns />}
            containerClass=""
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderDotsOutside={false}
            responsive={TOP_CATEGORIES_BREAKPOINTS}
            rewind={false}
            rewindWithAnimation={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
            rtl={true}
          >
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
            <img
              src="https://www.qnet.net/wp-content/uploads/2023/03/QNet-Feature-on-Direct-Selling-News.svg"
              alt="Partner Logo"
              className="h-10 object-contain ms-8 my-2 opacity-50 hover:opacity-100 pointer"
            />
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default AsSeenOn
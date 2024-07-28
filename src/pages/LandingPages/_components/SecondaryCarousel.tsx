import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const SecondaryCarousel = () => {
  const BREAKPOINTS: ResponsiveType = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 1,
      slidesToSlide: 1
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    return (
      <li
        onClick={() => onClick()}
        className={`w-[30px] h-[6px] ms-1 cursor-pointer ${active ? "bg-[#ea6726]" : "bg-[#cbcbcb]"
          }`}
      />
    );
  };

  return (
    <div className="relative container mx-auto z-10 lg:px-[130px] md:px-[0px]">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={6000}
        centerMode={false}
        className=""
        containerClass="z-10"
        customDot={<CustomDot />}
        dotListClass="swiper-pagination lg:left-[55%!important] md:left-[60%!important] left-[70%!important]"
        renderDotsOutside
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        responsive={BREAKPOINTS}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="w-[100%] md:h-[58vh] h-[30vh]  m-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="object-cover h-full w-full"
            alt="test"
          />
        </div>
        <div className="w-[100%] md:h-[58vh] h-[30vh]  m-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="object-cover h-full w-full"
            alt="test"
          />
        </div>
        <div className="w-[100%] md:h-[58vh] h-[30vh]  m-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="object-cover h-full w-full"
            alt="test"
          />
        </div>
        <div className="w-[100%] md:h-[58vh] h-[30vh]  m-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="object-cover h-full w-full"
            alt="test"
          />
        </div>
        <div className="w-[100%] md:h-[58vh] h-[30vh]  m-auto flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
            className="object-cover h-full w-full"
            alt="test"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default SecondaryCarousel
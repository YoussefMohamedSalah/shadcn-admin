const CarouselBtns = ({ next, previous, goToSlide, ...rest }: any) => {
  return (
    <>
      <div
        className={`top-slider-arrows position-absolute mx-2 end-0`}
        style={{ top: "-0px" }}
      >
        <div className="swiper-button-prev-outside" onClick={() => previous()} >
          <></>
        </div>
        <div className="swiper-button-next-outside hidden md:block" onClick={() => next()} >
          <button
            type="button"
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 text-[#00000066] z-10 hover:bg-transparent rounded-full p-2 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselBtns;
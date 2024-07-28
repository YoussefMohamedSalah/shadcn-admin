const SuccessStories = () => (
  <div className="py-12 bg-[#000000]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-bold text-center text-[#ec6726] text-[35px]">SUCCESS STORIES</h2>
      <p className="text-[23px] font-bold text-center text-white pt-2">SUCCESS STORIES PLAYLIST</p>
      <div className="mt-8 flex justify-center">
        <div >
          <iframe
            className="md:w-[853px] md:h-[480px]"
            // width="853"
            // height="480"
            src={`https://www.youtube.com/embed/s0t_4MSQEYQ?si=yEByOtlgIxYKQD1l`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
    </div>
  </div>
);

export default SuccessStories;



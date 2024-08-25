import playstore from "../assets/yellow.png";
export const HeroSection = () => {
  return (
    <section className="relative h-auto">
      <div className="max-w-screen-xl mx-auto px-4 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex relative z-10">
        <div className="flex-none space-y-5 w-1/2 max-w-xl mt-28">
          <a
            href="javascript:void(0)"
            className="inline-flex gap-x-6 items-center rounded-full p-1 pr-6 border border-[#202094] text-sm font-medium duration-150 bg-[#ecfbff] hover:bg-white"
          >
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              className="ml-2 text-blue-700"
              height="1em"
              width="1em"
            >
              <path d="M0 8a8 8 0 1016 0A8 8 0 000 8zm5.904 2.803a.5.5 0 11-.707-.707L9.293 6H6.525a.5.5 0 110-1H10.5a.5.5 0 01.5.5v3.975a.5.5 0 01-1 0V6.707l-4.096 4.096z" />
            </svg>
            <p className="flex items-center inter text-[#202094]">
              Join a growing community of Real Estate Enthusiast
            </p>
          </a>
          <h1 className="lg:text-6xl  text-[#202094] font-extrabold sm:text-5xl plus-jakarta-sans">
            Build your wealth{" "}
          </h1>
          <h1 className="lg:text-6xl sm:text-5xl plus-jakarta-sans text-yellow-400 mt-5">
            One PIE at a Time
          </h1>
          <p className="inter font-bold">
            Join thousands of Investers worldwide through Goa blooming real
            estate market with PIE - start building your wealth with just
            multiples of &#8377; 5000
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <img
              className="w-36"
              src="https://i.ibb.co/GtVb1bv/google-play-badge-logo-svgrepo-com.png"
              alt=""
            />
            <img
              className="w-36"
              src="https://i.ibb.co/zmLVSJK/download-on-the-app-store-apple-logo-svgrepo-com.png"
              alt=""
            />
          </div>
        </div>
        <div className="w-full relative flex items-center justify-center">
          <div className="h-[25rem] w-[25rem] rounded-full bg-blue-600"></div>
          <img
            alt="Product screenshot"
            src="https://i.ibb.co/drFZY7C/Untitled-2.png"
            className="w-20 absolute rounded-xl sm:w-[15rem] md:-ml-4  lg:-ml-4"
          />
        </div>
      </div>
    </section>
  );
};

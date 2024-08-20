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
              10.3% average investor returns in 2023
            </p>
          </a>
          <h1 className="lg:text-6xl text-gray-800 font-extrabold sm:text-5xl plus-jakarta-sans">
            Build your wealth through{" "}
            <span className="text-[#202094]">real estate</span>
          </h1>
          <p className="inter font-bold">
            Thousands of investors all over the world are using Stake to access
            income generating real estate deals in high growth markets, from
            only AED 500
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
        <div className="h-full relative bg-black w-1/2">
          <img
            src="https://i.ibb.co/BHD3TGg/I9-Ui-Ig-Knh-Ex95vgwbc-ENO1-Zssbf23.png"
            className="w-80 absolute translate-x-[100%] translate-y-[5%]  transform -rotate-[18deg] z-10"
          />
          <img
            src="https://i.ibb.co/BHD3TGg/I9-Ui-Ig-Knh-Ex95vgwbc-ENO1-Zssbf23.png"
            className="w-80 absolute translate-x-[-30%] translate-y-[-35%] object-cover transform -rotate-[18deg] z-10"
          />
          <img
            src="https://i.ibb.co/BHD3TGg/I9-Ui-Ig-Knh-Ex95vgwbc-ENO1-Zssbf23.png"
            className="w-80 absolute translate-x-[30%] translate-y-[57%] object-cover transform -rotate-[18deg] z-10"
          />
          {/* <img
          width={5200}
            src="https://i.ibb.co/86j90MY/788468-12566-NOCDET.png"
            className="absolute translate-x-[-0%] bottom-[-10%] "
          /> */}
        </div>
      </div>
    </section>
  );
};

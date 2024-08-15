import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Flag from 'react-world-flags'
export default function CountriesFeatures2(props) {
  return (
    <div className="overflow-hidden bg-white mt-10">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl backgroundshadow py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg text-left ml-14">
              <a
                href="javascript:void(0)"
                className="inline-flex  rounded-full p-3 pr-6 border border-[#0000002e] text-sm font-medium duration-150 hover:bg-white"
              >
                <Flag code="ind" className="w-7 h-7 mr-4"/>
                <p className="flex items-center inter">
                  India
                </p>
              </a>
              <p className=" text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl mt-3">
                Invest in the world’s best performing residential market
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Purchase shares in high yield properties in Dubai and start
                building a passive income stream today
              </p>
            </div>
            <div className="flex gap-x-3 sm:text-sm mt-5 ml-14">
              <a
                href="javascript:void(0)"
                className="block py-3 px-4 font-medium text-center text-white rounded-lg bg-[#121c30]"
              >
                Learn more
              </a>
             
            </div>
          </div>
          <div className="parent_screenshot w-full flex items-center justify-end">
            <img
              alt="Product screenshot"
              src="https://i.ibb.co/74yCrHk/a-Untitled-1.png"
              className="w-32  rounded-xl sm:w-[35rem] md:-ml-4  lg:-ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

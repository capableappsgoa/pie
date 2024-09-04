import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Flag from "react-world-flags";
export default function MobileFeatureTwo() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg text-left ml-20">
              <p className=" text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl mt-3">
                Long term capital <br />
                appreciation
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Watch your investment grow as property values appreciate and
                funds near maturity
              </p>
            </div>
            {/* <div className="flex gap-x-3 ml-20 sm:text-sm mt-5">
              <div className="h-auto flex  flex-col">
                <h1 className="text-3xl plus-jakarta-sans font-semibold">
                  200+
                </h1>
                <p className="text-base leading-8 inter text-gray-600">
                Properties Funded Since 2021
                </p>
              </div>
              <div className="ml-5 h-auto flex flex-col">
                <h1 className="text-3xl plus-jakarta-sans font-semibold text-left">
                  5.67<span className="text-blue-400">%</span>
                </h1>
                <p className="text-base leading-8 inter text-gray-600">
                Average Investor Appreciation in 2023
                </p>
              </div>
            </div> */}
          </div>
          <div className="w-full relative flex items-center justify-center">
            <div className="h-[30rem] w-[30rem] rounded-full bg-blue-600"></div>
            <img
              alt="Product screenshot"
              src="https://i.ibb.co/ZYPM08g/phone2.png"
              className="w-20 absolute rounded-xl sm:w-[22rem] md:-ml-4  lg:-ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

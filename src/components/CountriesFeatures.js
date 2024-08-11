import { MdOutlinePlayCircleOutline } from "react-icons/md";
import Flag from 'react-world-flags'
export default function CountriesFeatures() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl backgroundshadow py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 order-1 ">
            <div className="lg:max-w-lg text-left">
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
            <div className="flex gap-x-3 sm:text-sm mt-5">
              <a
                href="javascript:void(0)"
                className="block py-3 px-4 font-medium text-center text-white rounded-lg bg-[#121c30]"
              >
                Learn more
              </a>
              <button
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                className="text-black border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center"
                type="button"
              >
                <MdOutlinePlayCircleOutline className="w-5 h-5 text-green-600" />
                Watch how it works{" "}
                <svg
                  class="w-2.5 h-2.5 ms-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
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

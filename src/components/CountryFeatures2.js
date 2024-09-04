import { MdOutlinePlayCircleOutline } from "react-icons/md";
import {motion} from "framer-motion"
import Flag from 'react-world-flags'
export default function CountriesFeatures2(props) {
  return (
    <div className="overflow-hidden bg-white mt-10">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl md:backgroundshadow py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 flex flex-col justify-start">
            <div className="lg:max-w-lg text-left lg:ml-14">
              <a
                href="javascript:void(0)"
                className="inline-flex rounded-full p-3 pr-6 border border-[#0000002e] text-sm font-medium duration-150 hover:bg-white"
              >
                <Flag code="ind" className="w-7 h-7 mr-4" />
                <p className="flex items-center inter">
                  India
                </p>
              </a>
              <p className=" text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl mt-3">
                Access premium properties in Goa's booming market
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Invest in prime and commerical & resisdential properties like ,  Dona Paula , candolim , Porvorim & colva previusly reserved for high-net-worth investors
              </p>
            </div>
            <div className="flex gap-x-3 sm:text-sm mt-5 lg:ml-14">
              <a
                href="javascript:void(0)"
                className=" py-3 px-4 font-medium lg:text-center text-left text-white rounded-lg bg-[#121c30]"
              >
                Learn more
              </a>

            </div>
          </div>
          <motion.div whileHover={{ scale: [null, 1, 1.1] }}
                      transition={{ duration: 0.3 }} className="parent_screenshot w-full flex items-center justify-end">
            <img
              alt="Product screenshot"
              src="https://i.ibb.co/3NTjvjX/Untitled-5.png"
              className="w-full  rounded-xl lg:w-[full] md:-ml-4  lg:-ml-4"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

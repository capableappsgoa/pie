
import {motion} from "framer-motion"

export default function Works() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg lg:ml-12">
              <h1 className="text-2xl inter font-semibold text-blue-600">
                Browse
              </h1>
              <p className="mt-2 text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl">
                Access diverse real estate in Goa. Building, land & Hospitality
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Sign up in less than 3 minutes and browse our collection of clear & verified properties and funds, sourced by recognized & authorized valuaters & Market Experts
              </p>
            </div>
            <div
                       className="flex md:flex-row items-center md:gap-x-3 sm:text-sm lg:ml-12">
              <img
                className="w-28 lg:w-36"
                src="https://i.ibb.co/GtVb1bv/google-play-badge-logo-svgrepo-com.png"
                alt=""
              />
              <img
                className="ml-5 w-28 lg:w-36"
                src="https://i.ibb.co/zmLVSJK/download-on-the-app-store-apple-logo-svgrepo-com.png"
                alt=""
              />
            </div>
          </div>
          <motion.div
                      whileHover={{ scale: [null, 1, 1.1] }}
                      transition={{ duration: 0.3 }}
                       className="w-30 rounded-xl md:w-[full] md:-ml-4  lg:-ml-4">
          <img
            alt="Product screenshot"
            src="https://i.ibb.co/3NTjvjX/Untitled-5.png"
            className="w-30 rounded-xl md:w-[full] md:-ml-4  lg:-ml-4"
          />
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}



export default function MobileFeatureThree() {
  return (
    <div className="overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
        <div className="mx-auto grid grif max-w-2xl rounded-3xl py-10 grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 justify-center  items-center lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4 order-1 ">
            <div className="lg:max-w-lg text-left">
              <p className=" text-3xl plus-jakarta-sans tracking-tight text-gray-900 sm:text-4xl mt-3">
                Earn consistent <br />
                passive income
              </p>
              <p className="mt-6 text-lg leading-8 inter text-gray-600">
                Build new income streams with rental payments from income
                generating properties and funds
              </p>
            </div>
            <div className="flex gap-x-3 sm:text-sm mt-5">
              <div className="h-auto flex flex-col">
                <h1 className="text-3xl plus-jakarta-sans font-semibold">
                  AED 16.9M+
                </h1>
                <p className="text-base leading-8 inter text-gray-600">
                  Total Rental Income Paid
                </p>
              </div>
              <div className="ml-5 h-auto flex flex-col">
                <h1 className="text-3xl plus-jakarta-sans font-semibold">
                  5.37<span className="text-blue-400">%</span>
                </h1>
                <p className="text-base leading-8 inter text-gray-600">
                  Average Rental Yield in 2023
                </p>
              </div>
            </div>
          </div>
          <div className="w-full relative flex items-center justify-center">
            <div className="h-[30rem] w-[30rem] rounded-full bg-yellow-300"></div>
            <img
              alt="Product screenshot"
              src="https://i.ibb.co/XpJGsJj/8zon-GCUX2-TBRHC0s-V91-Wifbg-Q.png"
              className="w-20 absolute rounded-xl sm:w-[18rem] md:-ml-4  lg:-ml-4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { RiGovernmentFill } from "react-icons/ri";
import { HiShieldCheck } from "react-icons/hi2";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Flag from "react-world-flags";
export const ValueTrust = () => {
  return (
    <div className="bg-slate-800 flex flex-col justify-center mt-20 items-center">
      <p className="text-lg text-blue-100 font-bold pt-24">
        Safety never sleeps
      </p>
      <h1 className="lg:text-5xl text-xl text-white pt-6 font-bold text-center">
        We value your trust as <br /> much as your investments
      </h1>
      <div className="pt-10 lg:min-w-60 justify-center flex items-center">
        <div className="h-14 w-auto px-5 ml-9 bg-blue-100 flex items-center rounded-lg justify-center">
          <HiShieldCheck className="text-blue-700 lg:w-6 lg:h-6 w-4 h-4" />
          <p className="text-blue-600 text-sm font-bold ml-4">Dual regulated</p>
        </div>
        <div className="h-14 px-5 w-auto flex items-center rounded-lg ml-5 justify-center">
          <RiGovernmentFill className="text-white w-6 h-6" />
          <p className="font-bold text-white ml-4">Ownership protection</p>
        </div>
      </div>
      <div className="h-auto w-[100%] lg:w-[80%] mt-5 mb-10 flex rounded-3xl lg:flex-row flex-col border-grey-300 border-[1px] py-5 lg:py-9 px-2">
        <div className="h-full lg:w-1/2 w-[100%] mt-7 flex flex-col items-start text-left">
          <HiShieldCheck className="w-10 h-10 ml-5 text-blue-300" />
          <p className="font-bold text-3xl ml-5 text-white text-left mt-10">
            Dual regulated
          </p>
          <p className="text-lg ml-5 w-[100%] text-white lg:text-left mt-5">
            Invest with the assurance that we are dual <br /> regulated by the
            most prestigious regulators in Goa <br />
          </p>
          <div className="h-auto ml-5 bg-slate-400 mt-10 rounded-lg px-5 py-3">
            <p>Learn more</p>
          </div>
        </div>
        <div className="h-full w-full lg:mt-0 mt-5 lg:w-1/2 flex flex-col mr-5">
          <div className="h-auto rounded-2xl px-5 py-5 flex flex-col bg-slate-800 border-grey-300 border-[1px] justify-between">
            <div className="h-full w-full flex justify-between">
              <Flag code="ind" className="w-7 h-7 ml-5" />
              <BsArrowUpRightCircleFill className="text-white w-7 h-7 mr-5" />
            </div>
            <h1 className="text-white ml-5 mt-8 font-bold">Regulated In Goa</h1>
            <p className="text-gray-400 ml-5 mt-2">We are regulated in Goa by GAR.<br/> & By the finance authority.</p>
          </div>
          <div className="h-auto rounded-2xl px-5 py-5 flex mt-5 flex-col bg-slate-800 border-grey-300 border-[1px] justify-between">
            <div className="h-full w-full flex justify-start">
              <Flag code="ind" className="w-7 h-7 ml-5" />
            </div>
            <h1 className="text-white ml-5 mt-8 font-bold">Regulated In India</h1>
            <p className="text-gray-400 ml-5 mt-2">We are regulated in india by Financila Authority of India.<br/>By the finance bof so & so authority.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

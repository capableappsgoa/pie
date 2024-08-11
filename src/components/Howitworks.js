import React from "react";
import Works from "./Works";

export const Howitworks = () => {
  return (
    <>
      <div className="w-full mt-36 text-center plus-jakarta-sans flex justify-center items-center flex-col">
        <h1 className="text-green-600 plus-jakarta-sans text-2xl">How it works</h1>
        <div className="w-2/3">
          <h1 className="text-black mt-10 text-6xl plus-jakarta-sans">
            Build an income-generating real estate portfolio, easily
          </h1>
        </div>
      </div>
      <Works />
    </>
  );
};

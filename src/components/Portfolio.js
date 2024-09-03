import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { TfiStatsUp } from "react-icons/tfi";
import { GiHouse } from "react-icons/gi";
import { FaPeopleGroup } from "react-icons/fa6";


export const Portofio = () => {

    return (
        <div className="p-4  border-gray-200 rounded-lg dark:border-white mt-14">
            <h1 className='text-3xl text-gray-700 bold font-bold mt-5 mb-10'>Portfolio</h1>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div className="flex items-center justify-start px-5 py-20 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-1/2 h-auto items-start justify-start flex flex-col'>
                        <p className="text-2xl pt-2 px-3 text-gray-400 dark:text-gray-500 flex">Portfolio value <IoIosInformationCircleOutline className='ml-4' />
                        </p>
                        <p className="text-5xl py-3 font-semibold px-3 text-gray-400 dark:text-black">&#8377; 40000</p>
                    </div>
                </div>

            </div>
            <h1 className='text-xl text-gray-700 bold font-bold mt-10 mb-10'>Key Financial</h1>
            <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="flex items-center flex-col justify-center px-5 py-15 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-full flex justify-between'>
                        <RiMoneyRupeeCircleFill className='text-3xl text-blue-600' /> <h1 className='text-2xl'>&#8377; 0</h1>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className="text-lg pt-2 items-center justify-between text-gray-400 dark:text-gray-500 flex">Monthly income <IoIosInformationCircleOutline className='ml-4' /></p>
                        <p>Sept 2024 </p>
                    </div>

                </div>

                <div className="flex items-center flex-col justify-center px-5 py-15 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-full flex justify-between'>
                        <FaMoneyBillTrendUp className='text-3xl text-blue-600' /> <h1 className='text-2xl'>&#8377; 0</h1>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className="text-lg pt-2 items-center justify-between text-gray-400 dark:text-gray-500 flex">Total rental income <IoIosInformationCircleOutline className='ml-4' /></p>
                        <p>Sept 2024 </p>
                    </div>

                </div>

                <div className="flex items-center flex-col justify-center px-5 py-15 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-full flex justify-between'>
                        <TfiStatsUp className='text-3xl text-blue-600' /> <h1 className='text-2xl'>&#8377; 0</h1>
                    </div>
                    <div className='w-full flex items-center justify-between'>
                        <p className="text-lg pt-2 items-center justify-between text-gray-400 dark:text-gray-500 flex">Total appreciation<IoIosInformationCircleOutline className='ml-4' /></p>
                        <p>Sept 2024 </p>
                    </div>
                </div>
            </div>
            <h1 className='text-xl text-gray-700 bold font-bold mt-10 mb-8'>Quick Insights</h1>
            <div className="grid grid-cols-5 gap-4 mb-4">
                <div className="flex items-start justify-center px-5 py-20 h-24 flex-col rounded-xl bg-white shadow-md">
                    <h1 className='text-2xl mt-2'><GiHouse className='text-2xl text-blue-600' /></h1>
                    <h1 className='text-md font-light mt-2'>Number of <br /> properties</h1>
                    <h1 className='text-2xl mt-2'>0</h1>
                </div>
                <div className="flex items-start justify-center px-5 py-20 h-24 flex-col rounded-xl bg-white shadow-md">
                    <h1 className='text-2xl mt-2'><FaPeopleGroup className='text-2xl text-blue-600' /></h1>
                    <h1 className='text-md font-light mt-2'>Occupancy rate  &#9432;</h1>
                    <h1 className='text-2xl mt-2'>0</h1>
                </div>
                <div className="flex items-start justify-center px-5 py-20 h-24 flex-col rounded-xl bg-white shadow-md">
                    <h1 className='text-2xl mt-2'><TfiStatsUp className='text-2xl text-blue-600' /></h1>
                    <h1 className='text-md font-light mt-2'>Number of <br /> properties</h1>
                    <h1 className='text-2xl mt-2'>0</h1>
                </div>
                <div className="flex items-center col-span-2 justify-start px-5 flex-col rounded-xl bg-white shadow-md">
                    <p className='text-sm mt-5'>0% of limit used</p>
                    <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mt-5">
                        <div class="bg-blue-600 h-2.5  rounded-full dark:bg-blue-500" style={{ width: "45%" }}>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p className='text-sm mt-2'>Annual limit</p>
                            <p className='text-sm '>&#8377; 367,000</p>
                        </div>
                        <div className='flex items-center mt-1 justify-between'>
                            <p className='text-sm'>&bull; Invested in the last 12 months</p>
                            <p className='text-sm'>&#8377; 0</p>
                        </div>
                        <div className='flex items-center mt-1 justify-between'>
                            <p className='text-sm'>&bull; Invested in the last 12 months</p>
                            <p className='text-sm'>&#8377; 367,000</p>
                        </div>
                    </div>
                </div>

            </div>
            <h1 className='text-2xl text-gray-700 bold font-bold mt-10 mb-10 '>My Shares</h1>
            <div className="flex items-start justify-start h-48 mb-4 rounded flex-col bg-white shadow-md ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-lg text-gray-700 uppercas dark:text-gray-600">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Property
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Location
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Investment value
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Total rental Income
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>

                </table>
                <div className='border-b-2 h-1 w-full flex flex-col'></div>
                <div className='w-full h-full flex justify-center flex-col items-center'>
                    <CiClock2 className='text-4xl mb-3' />
                    <p>No Transactions</p>
                </div>
            </div>

        </div>
    )
}

import React from 'react'
import { CiStar } from "react-icons/ci";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { CiClock2 } from "react-icons/ci";
import { CiCreditCard2 } from "react-icons/ci";
import { CiBank } from "react-icons/ci";


export const Wallet = () => {
    return (
        <div className="p-4  border-gray-200 rounded-lg dark:border-white mt-14">
            <h1 className='text-3xl text-gray-700 bold font-bold mt-5 mb-10'>Wallet</h1>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center justify-center px-5 py-20 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-1/2 h-auto flex flex-col'>
                        <p className="text-2xl pt-2 px-3 text-gray-400 dark:text-gray-500">Cash balance</p>
                        <p className="text-5xl py-3 font-semibold px-3 text-gray-400 dark:text-black">&#8377; 40000</p>
                    </div>
                    <div className='w-1/2 h-auto flex flex-col justify-end items-end'>
                        <div className='w-fit rounded py-3 px-12 mt-5 bg-blue-600 transition ease-linear text-gray-200 hover:bg-blue-400 cu&#8377;or-pointer'>Deposit</div>
                        <div className='w-fit rounded py-3 px-10 mt-5 bg-blue-300 border border-blue-300 hover:border-blue-100 transition ease-linear cu&#8377;or-pointer hover:bg-black text-white'>Withdraw</div>
                    </div>
                </div>
                <div className="flex items-center justify-center px-5 py-20 h-24 rounded-xl bg-white shadow-md">
                    <div className='w-1/2 h-auto flex flex-col'>
                        <p className="text-2xl pt-2 px-3 text-gray-400 dark:text-gray-500 flex">Rewards Balance <IoIosInformationCircleOutline className='ml-4' />
                        </p>
                        <p className="text-5xl py-3 font-semibold px-3 text-gray-400 dark:text-black">&#8377; 40000</p>
                    </div>
                    <div className='w-1/2 h-auto flex flex-col justify-center items-end'>
                        <CiStar fontSize={80} stroke={40} className='text-blue-600 font-extrabold' />
                    </div>
                </div>
            </div>
            <h1 className='text-2xl text-gray-700 bold font-bold mt-10 mb-10 '>Transactions</h1>
            <div className="flex items-start justify-start h-48 mb-4 rounded flex-col bg-white shadow-md ">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-lg text-gray-700 uppercas dark:text-gray-600">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Type
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Wallet
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Amount
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

            <div className="grid grid-cols-2 gap-2">
                <div className="flex items-start justify-start flex-col">
                    <h1 className='text-xl text-gray-700 mt-5 mb-5 text-start bold font-bold'>Cards</h1>
                    <div className="flex items-center pt-4 w-auto px-10 justify-start flex-col h-auto rounded bg-white shadow-md">
                        <div className="flex items-center pt-4 justify-center rounded bg-white">
                            <CiCreditCard2 className='text-4xl text-blue-600 ' /> <p className='ml-5'>Add a card to enjoy instant deposits from anywhere in Goa</p>
                        </div>
                        <div className="flex items-center pt-3 pb-3 mb-5 mt-5 justify-center w-[95%] rounded bg-blue-600 text-white border-2">
                            <p className='text-4xl mr-4'>+</p><p className='text-lg'>Add a new card</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-start justify-start flex-col w-full">
                    <h1 className='text-xl text-gray-700 mt-5 mb-5 text-start bold font-bold'>Banks</h1>
                    <div className="flex items-center pt-4 w-full px-10 justify-start flex-col h-auto rounded bg-white shadow-md">
                        <div className="flex items-center pt-4 justify-center rounded bg-white">
                            <CiBank className='text-4xl' /> <p className='ml-5'>Add your bank account from anywhere in Goa</p>
                        </div>
                        <div className="flex items-center pt-3 pb-3 mb-5 mt-5 justify-center w-[95%] rounded bg-blue-600 text-white border-2">
                            <p className='text-4xl mr-4'>+</p><p className='text-lg'>Add a new bank account</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

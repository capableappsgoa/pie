import React from 'react'
import Link from 'next/link'
export const Properties = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="top object-cover">
                    <img className='w-full h-52 object-cover' src="https://th.bing.com/th/id/OIP.vTh0wsw7mQeRgB0Qdip_QgAAAA?rs=1&pid=ImgDetMain" alt="" />
                </div>
                <div className="bottom">
                    <h3>Home In Merrick Way</h3>
                    <p>
                        Enchanting three bedrooms, three bath home with spacious one
                        bedroom, one bath...
                    </p>
                    <div className="advants">
                        <div>
                            <span>Bedrooms</span>
                            <div><i className="fas fa-th-large"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Bathrooms</span>
                            <div><i className="fas fa-shower"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Area</span>
                            <div>
                                <i className="fas fa-vector-square"></i
                                ><span>4300<span>Sq Ft</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full justify-between'>
                        <div className="price">
                            <span>For Sale</span>
                            <span>$540,000</span>
                        </div>
                        <Link href="/payment">
                        <div className='flex mt-4 bg-blue-600 items-center justify-center hover:bg-sky-600 cursor-pointer text-white rounded py-3 px-7'>
                            <p>Invest</p>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="box">
                <div className="top object-cover">
                    <img className='w-full h-52 object-cover' src="https://travelandynews.com/wp-content/uploads/2021/09/Ama-stay-pic-1-768x499.jpeg" alt="" />
                </div>
                <div className="bottom">
                    <h3>Home In Merrick Way</h3>
                    <p>
                        Enchanting three bedrooms, three bath home with spacious one
                        bedroom, one bath...
                    </p>
                    <div className="advants">
                        <div>
                            <span>Bedrooms</span>
                            <div><i className="fas fa-th-large"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Bathrooms</span>
                            <div><i className="fas fa-shower"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Area</span>
                            <div>
                                <i className="fas fa-vector-square"></i
                                ><span>4300<span>Sq Ft</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full justify-between'>
                        <div className="price">
                            <span>For Sale</span>
                            <span>$540,000</span>
                        </div>
                        <Link href="/payment">
                        <div className='flex mt-4 bg-blue-600 items-center justify-center hover:bg-sky-600 cursor-pointer text-white rounded py-3 px-7'>
                            <p>Invest</p>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="box">
                <div className="top object-cover">
                    <img className='w-full h-52 object-cover' src="https://elledecor.in/wp-content/uploads/2022/11/H1_Nishita-Isprava.jpg" alt="" />
                </div>
                <div className="bottom">
                    <h3>Home In Merrick Way</h3>
                    <p>
                        Enchanting three bedrooms, three bath home with spacious one
                        bedroom, one bath...
                    </p>
                    <div className="advants">
                        <div>
                            <span>Bedrooms</span>
                            <div><i className="fas fa-th-large"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Bathrooms</span>
                            <div><i className="fas fa-shower"></i><span>3</span></div>
                        </div>
                        <div>
                            <span>Area</span>
                            <div>
                                <i className="fas fa-vector-square"></i
                                ><span>4300<span>Sq Ft</span></span>
                            </div>
                        </div>
                    </div>
                    <div className='w-full justify-between'>
                        <div className="price">
                            <span>For Sale</span>
                            <span>$540,000</span>
                        </div>
                        <Link href="/payment">
                        <div className='flex mt-4 bg-blue-600 items-center justify-center hover:bg-sky-600 cursor-pointer text-white rounded py-3 px-7'>
                            <p>Invest</p>
                        </div>
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

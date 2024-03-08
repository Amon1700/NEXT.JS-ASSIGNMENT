"use client"
import React, { useState } from 'react'
import { FaSignal } from "react-icons/fa";
import { FaWifi } from "react-icons/fa";
import { BiSolidBattery } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import { RiThumbDownFill } from "react-icons/ri";
import { RiThumbUpFill } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";

const Page = () => {

    const [yes_no, setYes_No] = useState<boolean>(true)
    const [safety, setSafety] = useState<number>(0)
    const [communication, setCommunication] = useState<number>(0)

    return (
        <div className='h-screen bg-slate-700 flex justify-center items-center text-black'>
            <div className='bg-slate-200 flex-col rounded-xl'>
                <div className='sm:m-8 m-6 grid sm:gap-10 gap-8'>
                    <div className='flex justify-between'>
                        <div>9:41</div>
                        <div className='flex gap-1'>
                            <div><FaSignal /></div>
                            <div><FaWifi /></div>
                            <div><BiSolidBattery /></div>
                        </div>
                    </div>
                    <div className='grid sm:gap-3 gap-2 sm:text-3xl text-2xl' >
                        <div><RxCross2 /></div>
                        <div>
                            <h1 className='font-bold '>
                                leave a review
                            </h1>
                        </div>
                    </div>
                    <div className='grid sm:gap-3 gap-2' >
                        <div>
                            <h2 className='sm:text-2xl text-xl font-semibold '>Safety</h2>
                        </div>
                        <div>
                            <h3 className='text-gray-500'>Lorem ipsum, dolor sit amet</h3>
                        </div>
                        <div >
                            <fieldset className='flex sm:text-3xl text-2xl'>
                                <label >
                                    <input className='hidden' onClick={() => setSafety(1)} type="radio" name="safety_rating" value="1" />
                                    <GoStarFill className={`${safety >= 1 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setSafety(2)} type="radio" name="safety_rating" value="2" />
                                    <GoStarFill className={`${safety >= 2 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setSafety(3)} type="radio" name="safety_rating" value="3" />
                                    <GoStarFill className={`${safety >= 3 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setSafety(4)} type="radio" name="safety_rating" value="4" />
                                    <GoStarFill className={`${safety >= 4 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setSafety(5)} type="radio" name="safety_rating" value="5" />
                                    <GoStarFill className={`${safety >= 5 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                            </fieldset>
                        </div>
                    </div>
                    <div className='grid sm:gap-3 gap-2' >
                        <div>
                            <h2 className='sm:text-2xl text-xl font-semibold '>Communication</h2>
                        </div>
                        <div>
                            <h3 className='text-gray-500'>Lorem ipsum, dolor sit amet</h3>
                        </div>
                        <div>
                            <fieldset className='flex sm:text-3xl text-2xl'>
                                <label >
                                    <input className='hidden' onClick={() => setCommunication(1)} type="radio" name="communication_rating" value="1" />
                                    <GoStarFill className={`${communication >= 1 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setCommunication(2)} type="radio" name="communication_rating" value="2" />
                                    <GoStarFill className={`${communication >= 2 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setCommunication(3)} type="radio" name="communication_rating" value="3" />
                                    <GoStarFill className={`${communication >= 3 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setCommunication(4)} type="radio" name="communication_rating" value="4" />
                                    <GoStarFill className={`${communication >= 4 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                                <label >
                                    <input className='hidden' onClick={() => setCommunication(5)} type="radio" name="communication_rating" value="5" />
                                    <GoStarFill className={`${communication >= 5 ? "text-yellow-600 " : "text-gray-400"}`} />
                                </label>
                            </fieldset>
                        </div>
                    </div>
                    <div className='grid sm:gap-3 gap-2' >
                        <div>
                            <h2 className='sm:text-2xl text-xl font-semibold '>Would you recommend trusti?</h2>
                        </div>
                        <div>
                            <h3 className='text-gray-500'>Lorem ipsum, dolor sit amet</h3>
                        </div>
                        <div>
                            <fieldset className='flex sm:text-3xl text-2xl sm:gap-20 gap-16'>
                                <label className='flex gap-4'>
                                    <input className='hidden' onClick={() => setYes_No(prev => !prev)} type="radio" name="yes_no" value="yes" />
                                    <RiThumbDownFill style={{ transform: 'scaleX(-1)' }}  className={`${yes_no ? "text-green-600 " : "text-gray-400"}`} />
                                    <span className='text-base'>No</span>
                                </label>
                                <label className='flex gap-4'>
                                    <input className='hidden' onClick={() => setYes_No(prev => !prev)} type="radio" name="yes_no" value="no" />
                                    <RiThumbUpFill className={`${yes_no ? "text-gray-400" : "text-green-600"}`} />
                                    <span className='text-base'>Yes</span>
                                </label>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page
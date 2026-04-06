import React, { use } from 'react';
import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/report-1.png"

const AvailablePlayers = ({ playersPromise }) => {
    const playersData = use(playersPromise)
    console.log(playersData)
    return (
        <div className='max-w-300 mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm p-4">
                <figure>
                    <img className='rounded-xl'
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex items-center'>
                        <img className='w-5 h-5' src={userImg} alt="" /> <h2 className="card-title ml-2 font-bold">Viral Kohli</h2>
                    </div>
                    <div className='flex items-center justify-between mt-2 pb-4 border-b border-gray-200'>
                        <div className='flex items-center'>
                            <img className='w-4 h-4 mr-2' src={flagImg} alt="" />
                            <span>Bangladesh</span>
                        </div>
                        <button className='btn btn-sm'>All-Rounder</button>
                    </div>

                    <div className='flex justify-between font-bold pt-3'>
                        <span>Rating</span>
                        <span>5</span>
                    </div>
                    <div className='flex justify-between  pt-2'>
                        <span className='font-semibold'>Left hand bat</span>
                        <span className='text-gray-500'>Right hand bat</span>
                    </div>
                    <div className="card-actions flex justify-between items-center mt-2">
                        <p className='font-semibold'>Price: $150000</p>
                        <button className="btn ">Choose Player</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;
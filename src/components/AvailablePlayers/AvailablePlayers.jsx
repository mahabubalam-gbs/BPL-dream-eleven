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
                        <img className='w-5 h-5' src={userImg} alt="" /> <h2 className="card-title ml-2">Viral Kohli</h2>
                    </div>
                    <div className='flex items-center justify-between mt-2 pb-4 border-b border-gray-200'>
                        <div className='flex items-center'>
                            <img className='w-4 h-4 mr-2' src={flagImg} alt="" />
                            <span>Bangladesh</span>
                        </div>
                        <button className='btn btn-sm'>All-Rounder</button>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary mt-4">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AvailablePlayers;
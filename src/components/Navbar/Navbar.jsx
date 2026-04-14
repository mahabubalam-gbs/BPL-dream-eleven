import React from 'react';
import navImg from "../../assets/logo.png"
import dollarImg from "../../assets/dollar-1.png"


const Navbar = ({ availableBalance }) => {
    return (
        <div>
            <div className="navbar max-w-300 mx-auto">
                <div className="flex-1">
                    <img className="w-15 h-15" src={navImg} alt="" />
                </div>
                <div className="flex items-center border border-gray-200 rounded-lg p-2 font-bold">
                    <span className='mr-1'>{availableBalance}</span>
                    <span className='mr-1'>Coin</span>
                    <img src={dollarImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
import React, { useState } from 'react';
import userImg from "../../assets/user-1.png"
import flagImg from "../../assets/report-1.png"
import { toast } from 'react-toastify';

const Players = ({ player, availableBalance, setAvailableBalance, purchasedPlayers, setPurchasedPlayers }) => {
    const [isSelected, setIsSelected] = useState(false)
    const { player_image, player_name, player_country, bating_style, bowling_style, playing_role, price, rating } = player;

    const handleSelected = (price) => {
        const playerPrice = parseInt(price.split("USD").join("").split(",").join(""))
        if (availableBalance < playerPrice) {
            toast("Not Enough Coins!!");
            return;
        }

        if (purchasedPlayers.length === 6) {
            toast("You have Purchased 6 Players Already!");
            return;
        }

        setIsSelected(true);
        setAvailableBalance(availableBalance - playerPrice);
        setPurchasedPlayers([...purchasedPlayers, player]);
        toast("Player Purchased Successfully!");
    }

    return (
        <div>
            < div className="card bg-base-100 shadow-sm p-4" >
                <figure>
                    <img className='rounded-xl w-full h-70 object-cover'
                        src={player_image}
                        alt="Shoes" />
                </figure>
                <div className="mt-4">
                    <div className='flex items-center'>
                        <img className='w-5 h-5' src={userImg} alt="" />
                        <h2 className="card-title ml-2 font-bold">{player_name}</h2>
                    </div>
                    <div className='flex items-center justify-between mt-2 pb-4 border-b border-gray-200'>
                        <div className='flex items-center'>
                            <img className='w-4 h-4 mr-2' src={flagImg} alt="" />
                            <span>{player_country}</span>
                        </div>
                        <button className='btn btn-sm'>{playing_role}</button>
                    </div>

                    <div className='flex justify-between font-bold pt-3'>
                        <span>Rating</span>
                        <span>{rating}</span>
                    </div>
                    <div className='flex justify-between  pt-2'>
                        <span className='font-semibold'>{bating_style}</span>
                        <span className='text-gray-500'>{bowling_style}</span>
                    </div>
                    <div className="card-actions flex justify-between items-center mt-2">
                        <p className='font-semibold'>Price: ${price}</p>
                        <button disabled={isSelected} onClick={() => {
                            handleSelected(price)
                        }} className="btn ">{isSelected ? "Selected" : "Choose Player"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Players;
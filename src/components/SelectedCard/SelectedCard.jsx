import React from 'react';
import deleteButton from "../../assets/delete.png"

const SelectedCard = ({ player }) => {
    const { player_name, player_image, playing_role } = player
    return (
        <div>
            <div className='border-2 border-gray-300 rounded-xl p-3 mt-5 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src={player_image} className='w-15 h-15 rounded-xl' alt="" />
                    <div className='ml-4'>
                        <h1>{player_name}</h1>
                        <p>{playing_role}</p>
                    </div>
                </div>
                <div>
                    <img src={deleteButton} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedCard;
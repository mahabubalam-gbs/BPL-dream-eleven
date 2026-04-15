import React from 'react';
import deleteButton from "../../assets/delete.png"

const SelectedPlayers = ({ purchasedPlayers }) => {

    return (
        <div className='max-w-300 mx-auto'>
            <div className='border-2 border-red-300 flex justify-between items-center'>
                <div className='flex items-center'>
                    <img src="https://i.ibb.co.com/G41bSTVJ/415496411-929231018566588-2597722085152956394-n.jpg" className='w-15 h-15 rounded-xl' alt="" />
                    <div className='ml-4'>
                        <h1>Tamim Iqbal</h1>
                        <p>Left-hand batsman</p>
                    </div>
                </div>
                <div>
                    <img src={deleteButton} alt="" />
                </div>
            </div>
        </div>
    );
};

export default SelectedPlayers;
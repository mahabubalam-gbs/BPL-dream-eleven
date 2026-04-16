import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers }) => {

    return (
        <div className='max-w-300 mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard key={player.id} player={player}></SelectedCard>)
            }

        </div>
    );
};

export default SelectedPlayers;
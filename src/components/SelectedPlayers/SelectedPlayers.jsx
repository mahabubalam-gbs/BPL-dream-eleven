import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';

const SelectedPlayers = ({ purchasedPlayers, removePlayer }) => {

    return (
        <div className='max-w-300 min-h-dvh mx-auto'>
            {
                purchasedPlayers.map(player => <SelectedCard
                    key={player.id}
                    player={player}
                    removePlayer={removePlayer}
                ></SelectedCard>)
            }

        </div>
    );
};

export default SelectedPlayers;
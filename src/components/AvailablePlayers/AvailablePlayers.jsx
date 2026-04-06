import React, { use } from 'react';

import Players from '../Players/Players';

const AvailablePlayers = ({ playersPromise }) => {

    const playersData = use(playersPromise)

    return (
        <div className='max-w-300 mx-auto'>
            {
                playersData.map(player => <Players key={player.id} player={player}></Players>
                )
            }

        </div >
    );
};

export default AvailablePlayers;
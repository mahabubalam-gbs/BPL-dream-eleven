import React, { use } from 'react';

import Players from '../Players/Players';

const AvailablePlayers = ({ playersPromise, setAvailableBalance }) => {

    const playersData = use(playersPromise)

    return (
        <div className='max-w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
                playersData.map(player => <Players setAvailableBalance={setAvailableBalance} key={player.id} player={player}></Players>
                )
            }

        </div >
    );
};

export default AvailablePlayers;
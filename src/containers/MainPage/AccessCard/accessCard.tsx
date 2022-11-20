import React from 'react';
import './style.css'
import worldMap from "../../../image/worldMap.png";

export const AccessCard = () => {
    return (
        <div className='block4'>
            <p className='block3-text1'>You can use our services anywhere in the world</p>
            <p className='block3-text2'>Withdraw and transfer money online through our application</p>
            <img className='world-map' src={worldMap}/>
        </div>
    );
};


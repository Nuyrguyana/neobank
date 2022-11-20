import React from 'react';
import './style.css'
import card1 from "../../../image/cardImage1.png";
import card2 from "../../../image/cardImage2.png";
import card3 from "../../../image/cardImage3.png";
import card4 from "../../../image/cardImage4.png";

export const ChooseCard = () => {
    return (
        <div className='block1'>
            <div className='block1-section'>
                <p className='block1-text'>Choose the design you like and apply for card right now</p>
                <button className='block1-btn'>Choose the card</button>
            </div>
            <div className='block1-section img'>
                <img className='block1-image-card' src={card1}/>
                <img className='block1-image-card' src={card2}/>
            </div>
            <div className='block1-section img'>
                <img className='block1-image-card' src={card3}/>
                <img className='block1-image-card' src={card4}/>
            </div>
        </div>
    );
};


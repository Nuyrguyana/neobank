import React from 'react';
import './style.css'
import '../../index.css'
import card1 from '../../image/cardImage1.png'
import card2 from '../../image/cardImage2.png'
import card3 from '../../image/cardImage3.png'
import card4 from '../../image/cardImage4.png'

export const MainPage = () => {
    return (
        <main className='main'>
            <div className='main-container'>
                <div className='bloc1'>
                    <div className='bloc1-section'>
                        <p>Choose the design you like and apply for card right now</p>
                        <button className='bloc1-btn'>Choose the card</button>
                    </div>
                    <div className='bloc1-section img'>
                        <img className='bloc1-image-card' src={card1}/>
                        <img className='bloc1-image-card' src={card2}/>
                    </div>
                    <div className='bloc1-section'>
                        <img className='bloc1-image-card' src={card3}/>
                        <img className='bloc1-image-card' src={card4}/>
                    </div>
                </div>
                <div className='bloc2'>

                </div>
                <div className='bloc3'>

                </div>
                <div className='bloc4'>

                </div>
                <div className='bloc5'>

                </div>
                <div className='bloc6'>

                </div>
            </div>

        </main>
    );
};


import React from 'react';
import cardImg from "../../../image/cardImage1.png";

export const PlatinumCard = () => {
    return (
        <div className='card-info'>
            <div>
                <p className='title-advertisement'>Platinum digital credit card</p>
                <p>Our best credit card. Suitable for everyday spending and shopping. <br/>
                    Cash withdrawals and transfers without commission and interest.</p>
                <div className='container-condition'>
                    <div className='condition1'>
                        <p className='title-condition'>Up to 160 days</p>
                        <p className='text-condition'>No percent</p>
                    </div>
                    <div className='condition1'>
                        <p className='title-condition'>Up to 600 000 ₽</p>
                        <p className='text-condition'>Credit limit</p>
                    </div>
                    <div className='condition1'>
                        <p className='title-condition'>0 ₽</p>
                        <p className='text-condition'>Card service is free</p>
                    </div>
                </div>
                <button className='btn-apply'>Apply for card</button>
            </div>
            <div>
                <img className='card-img' src={cardImg}/>
            </div>
        </div>
    );
};


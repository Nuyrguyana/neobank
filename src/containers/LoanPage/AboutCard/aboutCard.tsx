import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import moneyImg from '../../../image/money_duotone.svg'
import calendarImg from '../../../image/calendar_duotone.svg'
import clockImg from '../../../image/clock_duotone.svg'
import bagImg from '../../../image/bag_duotone.svg'
import cardImg from '../../../image/card_duotone.svg'

export const AboutCard = () => {
    return (
        <div className='block2'>
            <div className='container-link'>
                <Link className='link-block2' to='/AboutCardApi'>About card</Link>
                <Link className='link-block2' to='/RatesAndConditions'>Rates and conditions</Link>
                <Link className='link-block2' to='/Cashback'>Cashback</Link>
                <Link className='link-block2' to='/FAQ'>FAQ</Link>
            </div>
            <div className='container-about-card'>
                <div className='about-card'>
                    <img src={moneyImg}/>
                    <p className='title-about-card'>Up to 50 000 ₽</p>
                    <p>Cash and transfers without commission and percent</p>
                </div>
                <div className='about-card dark'>
                    <img src={calendarImg}/>
                    <p className='title-about-card'>Up to 160 days</p>
                    <p>Without percent on the loan</p>
                </div>
                <div className='about-card'>
                    <img src={clockImg}/>
                    <p className='title-about-card'>Free delivery</p>
                    <p>We will deliver your card by courier at a convenient place and time for you</p>
                </div>
            </div>
            <div className='container-about-card'>
                <div className='about-card lower dark'>
                    <img src={bagImg}/>
                    <p className='title-about-card'>Up to 12 months</p>
                    <p>No percent. For equipment, clothes and other purchases in installments</p>
                </div>
                <div className='about-card lower'>
                    <img src={cardImg}/>
                    <p className='title-about-card'>Convenient deposit and withdrawal</p>
                    <p>At any ATM. Top up your credit card for free with cash or transfer from other cards</p>
                </div>
            </div>
        </div>
    );
};


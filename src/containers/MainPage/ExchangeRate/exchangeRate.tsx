import React from 'react';
import './style.css'
import iconBank from "../../../image/iconBank.svg";

export const ExchangeRate = () => {
    return (
        <div className='block3'>
            <div className='block3-section'>
                <p className='block3-text1'>Exchange rate in internet bank</p>
                <p className='block3-text2'>Currency</p>
                <p>ТУТ БУДЕТ КУРС ВАЛЮТ</p>
                <button className='block3-btn'>All courses</button>
            </div>
            <div className='block3-section'>
                <p className='block3-text3'>Update every 15 minutes, MSC 09.08.2022</p>
                <img className='icon-bank' src={iconBank}/>
            </div>
        </div>
    );
};


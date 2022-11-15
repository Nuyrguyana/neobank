import React from 'react';
import './style.css'
import '../../index.css'
import card1 from '../../image/cardImage1.png'
import card2 from '../../image/cardImage2.png'
import card3 from '../../image/cardImage3.png'
import card4 from '../../image/cardImage4.png'
import Illustration from '../../image/Illustration2.png'
import check from '../../image/check.svg'
import iconBank from '../../image/iconBank.svg'
import worldMap from '../../image/worldMap.png'
import { ShowNews } from "./showNews";
import { cardNews } from "../../api/cardNews.api";
import btnArrow from '../../image/ButtonMedium.png'

export const MainPage = () => {

    const arrayBenefits = ['Powerfull online protection', 'Cashback without borders', 'Personal design', 'Work anywhere in the world']
    const newArrayBenefits = arrayBenefits.map((item) => {
        return (
            <div className='text-check'>
                <img className='img-check' src={check} alt='check'/>
                <div>{item}</div>
            </div>
        )
    })

    return (
        <main className='main'>
            <div className='main-container'>

                <div className='bloc1'>
                    <div className='bloc1-section'>
                        <p className='bloc1-text'>Choose the design you like and apply for card right now</p>
                        <button className='bloc1-btn'>Choose the card</button>
                    </div>
                    <div className='bloc1-section img'>
                        <img className='bloc1-image-card' src={card1}/>
                        <img className='bloc1-image-card' src={card2}/>
                    </div>
                    <div className='bloc1-section img'>
                        <img className='bloc1-image-card' src={card3}/>
                        <img className='bloc1-image-card' src={card4}/>
                    </div>
                </div>

                <div className='bloc2'>
                    <div className='bloc2-section'>
                        <img className='bloc2-img' src={Illustration}/>
                    </div>
                    <div className='bloc2-section'>
                        <p className='bloc2-text'>We Provide Many Features You Can Use</p>
                        <p className='bloc2-text2'>You can explore the features that we provide with fun and have their
                            own functions each feature
                        </p>
                        {newArrayBenefits}
                    </div>
                </div>

                <div className='bloc3'>
                    <div className='bloc3-section'>
                        <p className='bloc3-text1'>Exchange rate in internet bank</p>
                        <p className='bloc3-text2'>Currency</p>
                        <p>ТУТ БУДЕТ КУРС ВАЛЮТ</p>
                        <button className='bloc3-btn'>All courses</button>
                    </div>
                    <div className='bloc3-section'>
                        <p className='bloc3-text3'>Update every 15 minutes, MSC 09.08.2022</p>
                        <img className='icon-bank' src={iconBank}/>
                    </div>
                </div>

                <div className='bloc4'>
                    <p className='bloc3-text1'>You can use our services anywhere in the world</p>
                    <p className='bloc3-text2'>Withdraw and transfer money online through our application</p>
                    <img className='world-map' src={worldMap}/>
                </div>

                <div className='bloc5'>
                    <p className='bloc5-text1'>Current news from the world of finance</p>
                    <p className='bloc5-text2'>We update the news feed every 15 minutes. You can learn more by clicking
                        on the news you are interested in.</p>
                    <div className='container-card-new'>
                        {<ShowNews cardNews={cardNews}/>}
                        <div className='group-btn-arrow'>
                            <button><img src={btnArrow}/></button>
                            <button className='btn-arrow'><img src={btnArrow}/></button>
                        </div>
                    </div>
                </div>

                <div className='bloc6'>
                </div>
            </div>
        </main>
    );
};


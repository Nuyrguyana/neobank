import React from 'react';
import './style.css'
import { ShowNews } from "./showNews";
import { cardNews } from "../../../api/cardNews.api";
import btnArrow from "../../../image/buttonMedium.png";

export const FinanceNews = () => {
    return (
        <div className='block5'>
            <p className='block5-text1'>Current news from the world of finance</p>
            <p className='block5-text2'>We update the news feed every 15 minutes. You can learn more by clicking
                on the news you are interested in.</p>
            <div className='container-card-new'>
                {<ShowNews cardNews={cardNews}/>}
                <div className='group-btn-arrow'>
                    <button>
                        <img src={btnArrow}/>
                    </button>
                    <button className='btn-arrow'>
                        <img src={btnArrow}/>
                    </button>
                </div>
            </div>
        </div>
    );
};


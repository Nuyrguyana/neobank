import React from 'react';
import { ICardNew } from "../../model/model";
import { CardNew } from "./cardNew";

interface ShowNewsProps {
    cardNews: ICardNew[]
}

export const ShowNews = ({ cardNews }: ShowNewsProps) => {
    return (
        <div>
            <ul className='card-new-list'>
                {cardNews.map((item) => {
                    return (
                        <li className='card-new'>
                            <CardNew id={item.id} img={item.img} title={item.title} description={item.description}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};


import React from 'react';

interface CardNewProps {
    id: string,
    img: any,
    title: string,
    description: string
}

export const CardNew = ({ img, title, description }: CardNewProps) => {
    return (
        <div className='content-card-new'>
            <img src={img}/>
            <p className='card-new-title'>{title}</p>
            <p className='card-new-description'>{description}</p>
        </div>
    );
};


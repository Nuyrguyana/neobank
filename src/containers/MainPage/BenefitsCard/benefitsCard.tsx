import React from 'react';
import './style.css'
import Illustration from "../../../image/Illustration2.png";
import check from "../../../image/check.svg";

export const BenefitsCard = () => {
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
        <div className='block2'>
            <div className='block2-section'>
                <img className='block2-img' src={Illustration}/>
            </div>
            <div className='block2-section'>
                <p className='block2-text'>We Provide Many Features You Can Use</p>
                <p className='block2-text2'>You can explore the features that we provide with fun and have their
                    own functions each feature
                </p>
                {newArrayBenefits}
            </div>
        </div>
    );
};


import React from 'react';
import './style.css'
import email from "../../../image/email.svg";
import email2 from "../../../image/email2.svg";

export const Support = () => {
    return (
        <div className='block6'>
            <p className='title-support'>Support</p>
            <p className='text-support'>Subscribe Newsletter & get</p>
            <p className='text2-support'>Bank News</p>
            <div className='input-form'>
                <img src={email}/>
                <input className='input-support' placeholder='Your email'/>
                <img src={email2}/>
                <button className='btn-support'>Subscribe</button>
            </div>
        </div>
    );
};
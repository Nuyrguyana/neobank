import React from 'react';
import './style.css'
import star from '../../../image/redStar.svg'

export const CardReceiptForm = () => {
    return (
        <div className='block3'>
            <p className='title-block3'>How to get a card</p>
            <div className='step-container'>
                <p className='step-num'>1</p>
                <div className='decor-border1'></div>
                <p className='step-num'>2</p>
                <div className='decor-border2'></div>
                <p className='step-num'>3</p>
                <div className='decor-border3'></div>
            </div>
            <div className='step-container'>
                <p className='step-text'>Fill out an online application - you do not need to visit the bank</p>
                <p className='step-text'>Find out the bank's decision immediately after filling out the application</p>
                <p className='step-text'>The bank will deliver the card free of charge, wherever convenient, to your
                    city</p>
            </div>
            <div className='container-customize-card'>
                <div className='container-customize-card-1'>
                    <div className='cont-tit-st-cont-sel-am'>
                        <div className='container-title-step'>
                            <div>
                                <p className='title-customize-card'>Customize your card</p>
                            </div>
                            <div>
                                <p className='step-customize-card'>Step 1 of 5</p>
                            </div>
                        </div>
                        <div className='container-select-amount'>
                            <p>Select amount</p>
                            <p className='selected amount'>150 000</p>
                            <p>ТУТ ДОЛЖЕН БЫТЬ ПОЛЗУНОК</p>
                            <p className='min-max-amount'>150 000</p>
                            <p className='min-max-amount'>600 000</p>
                        </div>
                    </div>
                    <div className='selected-amount'>
                        <p className='text-selected-amount'>You have chosen the amount</p>
                        <p className='sum-selected-amount'>150 000 ₽</p>
                    </div>
                </div>
                <div>
                    <p className='tittle-contact-info'>Contact Information</p>
                    <form>
                        <div className='container-label-input'>
                            <div>
                                <label className='label-contact-info'>
                                    Your last name
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='For Example Doe'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Your first name
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='For Example Jhon'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Your patronymic
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='For Example Victorovich'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Select term
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='ТУТ ДОЛЖНА БЫТЬ ВЫПАДАШКА'/>
                            </div>
                        </div>
                        <div className='container-label-input'>
                            <div>
                                <label className='label-contact-info'>
                                    Your email
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='test@gmail.com'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Your date of birth
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='Select Date and Time'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Your passport series
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='0000'/>
                            </div>
                            <div>
                                <label className='label-contact-info'>
                                    Your passport number
                                    <img src={star}/>
                                </label>
                                <input className='input-contact-info' placeholder='000000'/>
                            </div>
                        </div>
                    </form>
                    <div>
                        <button className='button-form'>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


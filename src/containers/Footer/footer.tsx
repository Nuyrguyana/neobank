import React from 'react';
import logo1 from '../../image/logo1.png'
import './style.css'
import '../../index.css'
import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-container'>
                <div className='logo-info'>
                    <img className='logo1' src={logo1}/>
                    <div className='info'>
                        <div className='tel'>+7 (495) 984 25 13</div>
                        <div className='mail'>info@neoflex.ru</div>
                    </div>
                </div>
                <div className='nav-footer'>
                    <Link className='footer-link' to='/'>About bank</Link>
                    <Link className='footer-link' to='/'>Ask a Question</Link>
                    <Link className='footer-link' to='/'>Quality of service</Link>
                    <Link className='footer-link' to='/'>Requisites</Link>
                    <Link className='footer-link' to='/'>Press center</Link>
                    <Link className='footer-link' to='/'>Bank career</Link>
                    <Link className='footer-link' to='/'> Investors</Link>
                    <Link className='footer-link' to='/'>Analytics</Link>
                    <Link className='footer-link' to='/'>Business and processes</Link>
                    <Link className='footer-link' to='/'>Compliance and business ethics</Link>
                </div>
                <p className='cookies'>We use cookies to personalize our services and improve the user experience of our website. Cookies are small files containing information about previous visits to a website. If you do not want to use cookies, please change your browser settings</p>
            </div>
        </footer>
    );
};


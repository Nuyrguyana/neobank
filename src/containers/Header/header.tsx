import React from 'react';
import { Link } from "react-router-dom";
import './style.css'
import '../../index.css'

export const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <p className='brand'>NeoBank</p>
                <div className='nav-header'>
                    <Link className='header-link' to='/creditCard'>Credit cart</Link>
                    <Link className='header-link' to='/product'>Product</Link>
                    <Link className='header-link' to='account'>Account</Link>
                    <Link className='header-link' to='/resources'>Resources</Link>
                </div>
                <button className='header-btn'>Online Bank</button>
            </div>
        </header>
    );
};


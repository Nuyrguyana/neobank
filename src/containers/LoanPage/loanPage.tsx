import React from 'react';
import './style.css'
import { PlatinumCard } from "./PlatinumСard/platinumCard";
import { AboutCard } from "./AboutCard/aboutCard";
import { CardReceiptForm } from "./CardReceiptForm/cardReceiptForm";

export const LoanPage = () => {
    return (
        <div className='loan'>
            <div className='loan-container'>
                <PlatinumCard/>
                <AboutCard/>
                <CardReceiptForm/>
            </div>
        </div>
    );
};


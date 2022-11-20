import React from 'react';
import './style.css'
import '../../index.css'
import { AccessCard } from "./AccessCard/accessCard";
import { BenefitsCard } from "./BenefitsCard/benefitsCard";
import { ChooseCard } from "./ChooseCard/chooseCard";
import { ExchangeRate } from "./ExchangeRate/exchangeRate";
import { FinanceNews } from "./FinanceNews/financeNews";
import { Support } from "./Support/support";

export const MainPage = () => {
    return (
        <main className='main'>
            <div className='main-container'>
                <ChooseCard/>
                <BenefitsCard/>
                <ExchangeRate/>
                <AccessCard/>
                <FinanceNews/>
                <Support/>
            </div>
        </main>
    );
};


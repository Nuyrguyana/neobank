import React from 'react';
import { Header } from "./containers/Header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreditCard } from "./containers/CreditCard/creditCard";
import { Product } from "./containers/Product/product";
import { Account } from "./containers/Account/account";
import { Resources } from "./containers/Resources/resources";
import { Footer } from "./containers/Footer/footer";
import './index.css'

export const Main = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/creditCard' element={<CreditCard/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/account' element={<Account/>}/>
                <Route path='/resources' element={<Resources/>}/>
            </Routes>
            <div className='page'>

                <Header/>
                <Footer/>
            </div>

        </BrowserRouter>

    );
};


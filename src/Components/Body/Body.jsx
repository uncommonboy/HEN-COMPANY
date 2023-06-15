import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import Offer from '../Offer/Offer';
import Stand from '../Stand_for/Stand';
import Target from '../Targert-group/Target';

function Body( ) {
    return (
        <div>
            <Header/>
            <Hero/>
            <Target/>
            <Banner/>
            <Offer/>
            <Stand/>
            <Footer/>
        </div>
    );
}

export default Body;
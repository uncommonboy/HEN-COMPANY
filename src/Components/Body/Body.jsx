import React from 'react';
import Banner from '../Banner/Banner';
import Hero from '../Hero/Hero';
import Offer from '../Offer/Offer';
import Stand from '../Stand_for/Stand';
import Target from '../Targert-group/Target';

function Body( ) {
    return (
        <div>
            <Hero/>
            <Target/>
            <Banner/>
            <Offer/>
            <Stand/>
        </div>
    );
}

export default Body;
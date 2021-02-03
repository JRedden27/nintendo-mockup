import React from 'react';
import AdCard from './AdCard/AdCard';
import SwitchAd from './SwitchAd/SwitchAd';
import TrendingCarousel from './TrendingCarousel/TrendingCarousel';

function Advertising(props) {
    return (
        <div>
            <AdCard />
            <SwitchAd />
            <TrendingCarousel />
        </div>
    );
}

export default Advertising;
import React from 'react';
import FeaturedGame from './FeaturedGame/FeaturedGame';
import FeaturedCarousel from './FeaturedCarousel/FeaturedCarousel';

function Featured(props) {
    return (
        <div>
            <FeaturedGame />
            <FeaturedCarousel />
        </div>
    );
}

export default Featured;
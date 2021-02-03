import React from 'react';
import NewMain from './NewsMain/NewsMain';
import NewsSub from './NewsSub/NewsSub';
import NewReleaseCarousel from './NewReleaseCarousel/NewReleaseCarousel';

function News(props) {
    return (
        <div>
            <NewMain />
            <NewsSub />
            <NewReleaseCarousel />
        </div>
    );
}

export default News;
import React from 'react';
import './FeaturedGame.css';

//Image Imports
import FeaturedGame from '../../../assets/images/age-of-calamity.jpg';
import Rating from '../../../assets/images/t-for-teen.jpg';

function featuredGame(props) {
    return (
        <div>
            <div>
                <img src={FeaturedGame} alt="Zelda: Age of Calamity" />
            </div>
            <div className="gameDetails py-5">
                <span id="available" className="mx-3"><strong>Available now</strong></span>
                <button type="button" className="btn btn-danger mx-3 px-3 py-2 featuredButton">Visit site {'>'}</button>
                <img src={Rating} alt="Rated T for Teen" id="rating" className="ml-4" />
                <span id="ratingInfo" className="mr-1">Fantasy Violence</span>
            </div>
            <hr />
        </div>
    );
}

export default featuredGame;
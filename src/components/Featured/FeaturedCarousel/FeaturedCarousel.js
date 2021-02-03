import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './FeaturedCarousel.css';

//Image Imports
import Offer from '../../../assets/images/offer.jpg'
import BravelyDefault2 from "../../../assets/images/bravely-default-2.jpg";
import FitnessBoxing2 from "../../../assets/images/fitness-boxing-2.jpg";
import RingFit from "../../../assets/images/ring-fit-adventure.jpg";
import MonsterHunter from "../../../assets/images/monster-hunter-rise.jpg";
import AnimalCrossing from "../../../assets/images/animal-crossing.jpg";
import GameAndWatch from "../../../assets/images/game-and-watch.png";
import PokemonSnap from "../../../assets/images/pokemon-snap.jpg";
import Mario3dWorld from "../../../assets/images/mario-3d-world.jpg";
import Fortnite from "../../../assets/images/fortnite.jpg";
import AmongUs from "../../../assets/images/among-us.jpg";
import JustDance from "../../../assets/images/just-dance.jpg";
import MarioKartLive from "../../../assets/images/mario-kart-live.jpg";
import Hades from "../../../assets/images/hades.jpg";
import Mario35 from "../../../assets/images/mario-35.jpg";

function FeaturedCarousel(props) {
    return (
        <div>
            <Carousel className="py-5">
                <Carousel.Item>
                    <div className="row featuredRow">
                        <div className="col">
                            <img className="featuredImg" src={Offer} alt="Special Offer" />
                            <p className="availability mt-3"><strong>Pre-order now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={BravelyDefault2} alt="Bravely Default 2" />
                            <p className="availability mt-3"><strong>Pre-order now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={FitnessBoxing2} alt="Fitness Boxing 2" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={RingFit} alt="Ring Fit Adventure" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={MonsterHunter} alt="Monster Hunter Rise" />
                            <p className="availability mt-3"><strong>Pre-order now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row featuredRow">
                        <div className="col">
                            <img className="featuredImg" src={AnimalCrossing} alt="Animal Crossing: New Horizons" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={GameAndWatch} alt="Game & Watch" />
                            <span className="availability mt-3"><strong>Game & Watch: Super Mario Bros. - Available now</strong></span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={PokemonSnap} alt="Pokémon Snap" />
                            <p className="availability mt-3"><strong>Pre-order now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={Mario3dWorld} alt="Mario 3D World" />
                            <p className="availability mt-3"><strong>Pre-order now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={Fortnite} alt="Fortnite" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row featuredRow">
                        <div className="col">
                            <img className="featuredImg" src={AmongUs} alt="Among Us" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={JustDance} alt="Just Dance 2021" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={MarioKartLive} alt="Mario Kart Live" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={Hades} alt="Hades" />
                            <p className="availability mt-3"><strong>Available now</strong></p>
                            <span className="console">Nintendo Switch</span>
                        </div>
                        <div className="col">
                            <img className="featuredImg" src={Mario35} alt="Mario 35th Anniversary" />
                            <span className="availability mt-3"><strong>Super Mario Bros. 35th Anniversary - Visit site</strong></span>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <hr />
        </div>
    );
}

export default FeaturedCarousel;
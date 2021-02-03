import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './TrendingCarousel.css';

//Image Imports
import Mario3dWorld from "../../../assets/images/mario-3d-world.jpg";
import Fortnite from "../../../assets/images/fortnite.jpg";
import PokemonSnap from "../../../assets/images/pokemon-snap.jpg";
import Hitman3 from "../../../assets/images/hitman.jpg";
import AmongUs from "../../../assets/images/among-us.jpg";
import Mario35 from "../../../assets/images/mario-bros-35.jpg";
import ACWinter from "../../../assets/images/animal-crossing-winter.jpg";
import SuperMeatBoy from "../../../assets/images/super-meat-boy.jpg";


function TrendingCarousel(props) {
    return (
        <div>
            <p id="trendingTitle"><strong>Trending games</strong></p>
            <Carousel className="py-5">
                <Carousel.Item>
                    <div className="row trendingRow">
                        <div className="col">
                            <img className="trendingImg" src={Mario3dWorld} alt="Mario 3D World" />
                            <p className="releaseDate">Coming: 02/12/2021</p>
                            <p className="gameTitle"><strong>Super Mario™ 3D World + Bowser's Fury</strong></p>
                            <p className="gamePrice"><strong>$59.99</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={Fortnite} alt="Fortnite" />
                            <p className="releaseDate">Released: 06/12/2018</p>
                            <p className="gameTitle"><strong>Fortnite</strong></p>
                            <p className="gamePrice"><strong>$0.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={PokemonSnap} alt="Pokémon Snap" />
                            <p className="releaseDate">Coming: 04/30/2021</p>
                            <p className="gameTitle"><strong>New Pokémon Snap™</strong></p>
                            <p className="gamePrice"><strong>$59.99</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={Hitman3} alt="Hitman 3" />
                            <p className="releaseDate">Released: 01/20/2021</p>
                            <p className="gameTitle"><strong>HITMAN 3 - Cloud Version</strong></p>
                            <p className="gamePrice"><strong>$0.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={AmongUs} alt="Among Us" />
                            <p className="releaseDate">Released: 12/15/2020</p>
                            <p className="gameTitle"><strong>Among Us</strong></p>
                            <p className="gamePrice"><strong>$5.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="row trendingRow">
                        <div className="col">
                            <img className="trendingImg" src={Hitman3} alt="Hitman 3" />
                            <p className="releaseDate">Released: 01/20/2021</p>
                            <p className="gameTitle"><strong>HITMAN 3 - Cloud Version</strong></p>
                            <p className="gamePrice"><strong>$0.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={AmongUs} alt="Among Us" />
                            <p className="releaseDate">Released: 12/15/2020</p>
                            <p className="gameTitle"><strong>Among Us</strong></p>
                            <p className="gamePrice"><strong>$5.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={Mario35} alt="Super Mario Bros. 35" />
                            <p className="releaseDate">Released: 10/01/2020</p>
                            <p className="gameTitle"><strong>Super Mario Bros.™ 35</strong></p>
                            <p className="gamePrice"><strong>$0.00</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={ACWinter} alt="Animal Crossing: New Horizons" />
                            <p className="releaseDate">Released: 03/20/2020</p>
                            <p className="gameTitle"><strong>Animal Crossing™: New Horizons</strong></p>
                            <p className="gamePrice"><strong>$59.99</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <img className="trendingImg" src={SuperMeatBoy} alt="Super Meat Boy Forever" />
                            <p className="releaseDate">Released: 12/23/2020</p>
                            <p className="gameTitle"><strong>Super Meat Boy Forever</strong></p>
                            <p className="gamePrice"><strong>$19.99</strong></p>
                            <div className="row">
                                <div className="col">
                                    <span className="console">Nintendo Switch</span>
                                </div>
                                <div className="col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
            <hr />
        </div>
    );
}

export default TrendingCarousel;
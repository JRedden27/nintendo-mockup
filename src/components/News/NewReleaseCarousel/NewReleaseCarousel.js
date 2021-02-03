import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewReleaseCarousel.css';

//Image Imports
import Olija from "../../../assets/images/olija.jpg";
import CyberShadow from "../../../assets/images/cyber-shadow.jpg";
import Hitman3 from "../../../assets/images/hitman.jpg";
import ScottPilgrim from '../../../assets/images/scott-pilgrim.jpg';
import SuperMeatBoy from "../../../assets/images/super-meat-boy.jpg";
import AmongUs from "../../../assets/images/among-us.jpg";
import CollectionOfSaGa from "../../../assets/images/collection-of-saga.jpg";
import DoomEternal from "../../../assets/images/doom-eternal.jpg";
import PuyoPuyoTetris2 from "../../../assets/images/puyo-puyo-tetris-2.jpg";



function NewReleaseCarousel(props) {
    return (
        <div>
            <p id="newReleaseTitle"><strong>New video game releases</strong></p>
            <Carousel className="py-5">
                <Carousel.Item>
                    <div className="row newReleaseRow">
                        <div className="col">
                            <img className="newReleaseImg" src={Olija} alt="Mario 3D World" />
                            <p className="releaseDate">01/28/2021</p>
                            <p className="gameTitle"><strong>Olija</strong></p>
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
                            <img className="newReleaseImg" src={CyberShadow} alt="Fortnite" />
                            <p className="releaseDate">01/26/2021</p>
                            <p className="gameTitle"><strong>Cyber Shadow</strong></p>
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
                            <img className="newReleaseImg" src={Hitman3} alt="Pokémon Snap" />
                            <p className="releaseDate">01/20/2021</p>
                            <p className="gameTitle"><strong>HITMAN 3 - Cloud Version</strong></p>
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
                            <img className="newReleaseImg" src={ScottPilgrim} alt="Hitman 3" />
                            <p className="releaseDate">01/14/2021</p>
                            <p className="gameTitle"><strong>Scott Pilgrim vs. The World™: The Game - Complete Edition</strong></p>
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
                            <img className="newReleaseImg" src={SuperMeatBoy} alt="Among Us" />
                            <p className="releaseDate">12/23/2020</p>
                            <p className="gameTitle"><strong>Super Meat Boy Forever</strong></p>
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
                    <div className="row newReleaseRow">
                        <div className="col">
                            <img className="newReleaseImg" src={SuperMeatBoy} alt="Hitman 3" />
                            <p className="releaseDate">12/23/2020</p>
                            <p className="gameTitle"><strong>Super Meat Boy Forever</strong></p>
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
                            <img className="newReleaseImg" src={AmongUs} alt="Among Us" />
                            <p className="releaseDate">12/15/2020</p>
                            <p className="gameTitle"><strong>Among Us</strong></p>
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
                            <img className="newReleaseImg" src={CollectionOfSaGa} alt="Super Mario Bros. 35" />
                            <p className="releaseDate">12/15/2020</p>
                            <p className="gameTitle"><strong>COLLECTION of SaGa FINAL FANTASY LEGEND</strong></p>
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
                            <img className="newReleaseImg" src={DoomEternal} alt="Animal Crossing: New Horizons" />
                            <p className="releaseDate">12/08/2020</p>
                            <p className="gameTitle"><strong>DOOM® Eternal</strong></p>
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
                            <img className="newReleaseImg" src={PuyoPuyoTetris2} alt="Super Meat Boy Forever" />
                            <p className="releaseDate">12/08/2020</p>
                            <p className="gameTitle"><strong>Puyo Puyo™ Tetris® 2</strong></p>
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

export default NewReleaseCarousel;
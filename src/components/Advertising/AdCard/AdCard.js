import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './AdCard.css';

//Image Imports
import SwitchIcon from '../../../assets/images/switch-icon.png';

const AdCard = () => {
    return (
        <div>
            <div className="cardDiv row my-5">
                <div id="adCardContainer">
                    <Card.Img variant="top" src={SwitchIcon} className="switch" />
                        <Card.Body>
                            <Card.Text id="cardText">
                                Game Store: Buy, download, and play right away!
                            </Card.Text>
                        </Card.Body>
                    <button type="button" className="btn btn-danger adButton">Shop Games {'>'}</button>
                </div>
                <div className="adCard">
                </div>
            </div>
            <hr />
        </div>
    );
};

export default AdCard;
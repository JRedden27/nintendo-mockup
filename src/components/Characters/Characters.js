import React from 'react';
import { Card } from 'react-bootstrap';
import './Characters.css';

//Image Imports
import Mario from '../../assets/images/mario.png';
import LinkAndZelda from '../../assets/images/link-zelda.png';
import NookAndIsabelle from '../../assets/images/nook-isabelle.png';
import Kirby from '../../assets/images/kirby.png';

function Characters(props) {
    return (
        <div>
            <h2 className="charTitle">Characters</h2>
            <div className="d-flex flex-row py-5 charRow">
                <div className="col">
                    <Card className="charCard">
                            <Card.Img className="charImg" variant="top" src={Mario} alt="It's a me, Mario!"/>
                        <Card.Body>
                            <Card.Title>Mario™</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="charCard">
                        <Card.Img className="charImg" variant="top" src={LinkAndZelda} alt="Legend of Zelda"/>
                        <Card.Body>
                            <Card.Title>The Legend of Zelda™</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="charCard">
                        <Card.Img className="charImg" variant="top" src={NookAndIsabelle} alt="Animal Crossing"/>
                        <Card.Body>
                            <Card.Title>Animal Crossing™</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card className="charCard">
                        <Card.Img className="charImg" variant="top" src={Kirby} alt="Kirby"/>
                        <Card.Body>
                            <Card.Title>Kirby™</Card.Title>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <p className="small subtext">* MSRP: Manufacturer's Retail Price. Actual price may vary. See retailer for details.</p>
        </div>
    );
}

export default Characters;
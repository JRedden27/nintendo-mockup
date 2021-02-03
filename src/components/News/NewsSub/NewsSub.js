import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewsSub.css';

//Image Imports
import NintendoPower from '../../../assets/images/nintendo-power.jpg';
import MKCatTour from '../../../assets/images/mk-cat-tour.jpg';
import ACFestivale from '../../../assets/images/ac-festivale.jpg';
import MKOpen from '../../../assets/images/mk-open.jpg';

function NewsSub(props) {
    return (
        <div>
            <div className="row">
                <div className="col">
                    <Card style={{ width: '18rem' }} className="newsSubCard leftCard d-flex flex-row justify-content-center">
                        <Card.Body className="newsSubBody">
                            <Card.Img className="newsSubImg" variant="top" src={NintendoPower} />
                            <Card.Subtitle className="mb-2 text-muted newsSubDate">01/29/2021</Card.Subtitle>
                            <Card.Title className="newsSubTitle">Nintendo Power Podcast episode 35 available now!</Card.Title>
                            <Card.Link href="#" className="newsSubLink">Read more {'>'}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }} className="newsSubCard middleCard d-flex justify-content-between">
                        <Card.Body className="newsSubBody">
                            <Card.Img className="newsSubImg" variant="top" src={MKCatTour} />
                            <Card.Subtitle className="mb-2 text-muted newsSubDate">01/27/2021</Card.Subtitle>
                            <Card.Title className="newsSubTitle">Pounce to victory in the Cat Tour!</Card.Title>
                            <Card.Link href="#" className="newsSubLink">Read more {'>'}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }} className="newsSubCard middleCard d-flex justify-content-between">
                        <Card.Body className="newsSubBody">
                            <Card.Img className="newsSubImg" variant="top" src={ACFestivale} />
                            <Card.Subtitle className="mb-2 text-muted newsSubDate">01/26/2021</Card.Subtitle>
                            <Card.Title className="newsSubTitle">Experience the carnival spirit with this free update</Card.Title>
                            <Card.Link href="#" className="newsSubLink">Read more {'>'}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col">
                    <Card style={{ width: '18rem' }} className="newsSubCard middleCard d-flex justify-content-between">
                        <Card.Body className="newsSubBody">
                            <Card.Img className="newsSubImg" variant="top" src={MKOpen} />
                            <Card.Subtitle className="mb-2 text-muted newsSubDate">01/25/2021</Card.Subtitle>
                            <Card.Title className="newsSubTitle">Register now for the Mario Kart North American Open January 2021!</Card.Title>
                            <Card.Link href="#" className="newsSubLink">Read more {'>'}</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <div className="pb-5">
                <button type="button" className="btn btn-danger newsSubButton">
                    See all news {'>'}
                </button>
            </div>
            <hr />
        </div>
    );
}

export default NewsSub;
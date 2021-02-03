import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './NewsMain.css';

//Image Imports
import CoinPromotion from '../../../assets/images/coin-deal.jpg';
import DragaliaLostP5 from '../../../assets/images/dragalia-lost-p5.jpg';

function NewsMain(props) {
    return (
        <div className="row newsMain d-flex flex-row justify-content-center py-5">
            <div id="leftArticle" className="col-6">
                <Card style={{ width: '18rem' }} className="newsMainCard d-flex justify-content-between">
                    <Card.Body className="newsMainBody">
                        <Card.Img className="newsMainImg" variant="top" src={CoinPromotion} />
                        <Card.Subtitle className="mb-2 text-muted newsMainDate">02/01/2021</Card.Subtitle>
                        <Card.Title className="newsMainTitle">Earn double My Nintendo Gold Points on select digital Nintendo games!</Card.Title>
                        <Card.Text className="newsMainText">
                            Here's a golden opportunity you won't want to miss! From 1/31 at 9:00 p.m. PT to 2/28 at 11:59 p.m. PT, you can earn up to 600 My Nintendo Gold Points—twice the normal amount—when you purchase select digital games through Nintendo eShop or Nintendo.com (where available), or participating retailers, including Super Smash Bros.™ Ultimate, The Legend of Zelda™: Breath of the Wild, and more!
                        </Card.Text>
                        <Card.Link href="#" className="newsMainLink">Read more {'>'}</Card.Link>
                    </Card.Body>
                </Card>
            </div>
            <div id="rightArticle" className="col">
                <Card style={{ width: '18rem' }} className="newsMainCard">
                    <Card.Body className="newsMainBody">
                        <Card.Img className="newsMainImg" variant="top" src={DragaliaLostP5} />
                        <Card.Subtitle className="mb-2 text-muted newsMainDate">01/31/2021</Card.Subtitle>
                        <Card.Title className="newsMainTitle">Joker and the Phantom Thieves join for the Caged Desire crossover event!</Card.Title>
                        <Card.Text className="newsMainText">
                            Ladies and gentlemen... The Phantom Thieves of Hearts have arrived in the Dragalia Lost game! In the Caged Desire event, a sudden string of strange occurrences has rocked the continent of Grastaea.
                        </Card.Text>
                        <Card.Link href="#" className="newsMainLink">Read more {'>'}</Card.Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}

export default NewsMain;
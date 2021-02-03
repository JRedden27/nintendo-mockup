import React from 'react';
import './SwitchAd.css';

//Image Imports
import Switch from '../../../assets/images/explore-switch.jpg';

function SwitchAd(props) {
    return (
        <div className="switchAd py-5">
            <div>
                <h1 className="adTitle">Explore gaming systems</h1>
            </div>
            <div className="my-3">
                <img src={Switch} alt="Nintendo Switch" />
            </div>
            <div className="row mb-5">
                <div id="adSubtitle" className="col-7">
                    <h2>Nintendo Switch and Nintendo Switch Lite</h2>
                </div>
                <div className="col">
                    <button type="button" className="btn btn-danger switchAdButton">
                        Starting at $1.99.99 MSRP* {'>'}
                    </button>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default SwitchAd;
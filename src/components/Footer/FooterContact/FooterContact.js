import React from 'react';
import './FooterContact.css';

//Image Imports
import ESRB from '../../../assets/images/esrb.png';

function FooterContact(props) {
    return (
        <div id="contactArea">
            <div className="row py-3 contactLinkRow">
                <span><a href="https://jredden27.github.io/nintendo-mockup/" id="contactUs" className="contactLink">
                    Contact Us
                </a></span>
                <span><a href="https://jredden27.github.io/nintendo-mockup/" className="contactLink">
                    Website Feedback
                </a></span>
            </div>
            <div className="row socialMediaRow">
                <a href="https://jredden27.github.io/nintendo-mockup/" className="fa fa-facebook"></a>
                <a href="https://jredden27.github.io/nintendo-mockup/" className="fa fa-instagram"></a>
                <a href="https://jredden27.github.io/nintendo-mockup/" className="fa fa-twitter"></a>
                <a href="https://jredden27.github.io/nintendo-mockup/" className="fa fa-youtube"></a>
                <img id="esrb" src={ESRB} alt="ESRB Certification"/>
            </div>
            <div className="row small py-4 copyrightContainer">
                <p id="copyright">© 2021 Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington</p>
            </div>
        </div>
    );
}

export default FooterContact;
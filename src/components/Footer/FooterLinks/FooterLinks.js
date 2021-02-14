import React from 'react';
import './FooterLinks.css';

//Image Imports
import Flag from '../../../assets/images/flag.png';

function FooterLinks(props) {
    return (
        <div id="footerUpper">
            <div className="row py-3">
                <div className="col-1 firstCol">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">About Nintendo</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Company Info</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Careers</a></p>        
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">CSR Report</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Sitemap</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">Where To Buy</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Game Store</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Online Retailers</a></p>        
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Nintendo NY</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Nintendo Store</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">Support</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Health & Safety Precautions</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Updated Warranty</a></p>        
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Nintendo Switch Support</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Wii U Support</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Nintendo 3DS Support</a></p>        
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Repair Help</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Nintendo Product Recycling</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">Parents</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Info for Parents</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Parental Controls</a></p>        
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Online Safety Principles</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">Legal</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Documents and Policies</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Terms of Use</a></p>        
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://jredden27.github.io/nintendo-mockup/">Privacy</a></h3>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Privacy Policy</a></p>
                    <p><a href="https://jredden27.github.io/nintendo-mockup/" className="footerLink">Cookies and Interest-Based Ads</a></p>        
                </div>
            </div>
            <div className="row pb-4">
                <span><a href="https://jredden27.github.io/nintendo-mockup/" id="region">Change Region</a></span>
                <img src={Flag} id="flag" alt="American flag" />
            </div>
        </div>
    );
}

export default FooterLinks;
import React from 'react';
import './FooterLinks.css';

//Image Imports
import Flag from '../../../assets/images/flag.png';

function FooterLinks(props) {
    return (
        <div id="footerUpper">
            <div className="row py-3">
                <div className="col-1 firstCol">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">About Nintendo</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Company Info</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Careers</a></p>        
                    <p><a href="https://www.nintendo.com/" className="footerLink">CSR Report</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Sitemap</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">Where To Buy</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Game Store</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Online Retailers</a></p>        
                    <p><a href="https://www.nintendo.com/" className="footerLink">Nintendo NY</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Nintendo Store</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">Support</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Health & Safety Precautions</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Updated Warranty</a></p>        
                    <p><a href="https://www.nintendo.com/" className="footerLink">Nintendo Switch Support</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Wii U Support</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Nintendo 3DS Support</a></p>        
                    <p><a href="https://www.nintendo.com/" className="footerLink">Repair Help</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Nintendo Product Recycling</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">Parents</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Info for Parents</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Parental Controls</a></p>        
                    <p><a href="https://www.nintendo.com/" className="footerLink">Online Safety Principles</a></p>
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">Legal</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Documents and Policies</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Terms of Use</a></p>        
                </div>
                <div className="col-1">
                    <h3><a className="footerCategory" href="https://www.nintendo.com/">Privacy</a></h3>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Privacy Policy</a></p>
                    <p><a href="https://www.nintendo.com/" className="footerLink">Cookies and Interest-Based Ads</a></p>        
                </div>
            </div>
            <div className="row pb-4">
                <span><a href="https://www.nintendo.com/" id="region">Change Region</a></span>
                <img src={Flag} id="flag" alt="American flag" />
            </div>
        </div>
    );
}

export default FooterLinks;
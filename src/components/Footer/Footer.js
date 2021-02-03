import React from 'react';
import FooterLinks from './FooterLinks/FooterLinks';
import FooterContact from './FooterContact/FooterContact';

function Footer(props) {
    return (
        <div>
            <FooterLinks />
            <FooterContact />
        </div>
    );
}

export default Footer;
import React from 'react';
import { Navbar, Nav, FormControl} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css';
import nintendoLogo from '../../../assets/images/nintendo-logo.png';

function TopNavbar(props) {
    return (
        <div>
            <div>
                <Navbar id="navbar" bg="light" variant="light">
                    <div className="d-flex justify-content-start">
                        <Navbar.Brand id ="brand" href="#home"><img id="logo" src={nintendoLogo} alt="nitendo logo" /></Navbar.Brand>
                        <FormControl id="search" type="text" placeholder="Search games, systems, support, etc." className="mr-sm-2" />
                    </div>
                    <Nav className="row navLinkRow"> {/*Note: figure out why class / className glitch is happening*/}
                        <Nav.Link href="#support">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-square-dots-fill" viewBox="0 0 16 16">
                                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                            </svg>
                            <span className="navLink"> Support</span>
                        </Nav.Link>
                        <Nav.Link href="#wishlist">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            <span className="navLink"> Wish List</span>
                        </Nav.Link>
                        <Nav.Link href="#login">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
                                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                            </svg>
                            <span className="navLink"> Log in / Sign up</span>
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        </div>
    );
}

export default TopNavbar;
import { Link } from "react-scroll";
import React, { useState } from 'react';
import "./navbar.css";
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarToggler,
  MDBCollapse,
  MDBBtn,
  MDBNavbarNav,
  MDBIcon,
} from 'mdb-react-ui-kit';


export default function Navbar() {
  const [showNavNoTogglerThird, setShowNavNoTogglerThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' fixed='top' className='navbar'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo03'
            aria-controls='navbarTogglerDemo03'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoTogglerThird(!showNavNoTogglerThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <h4 className="poov" >Poovarasan</h4>
          <MDBCollapse navbar show={showNavNoTogglerThird}>
            <MDBNavbarNav className='navtitle gap-2'>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
            <MDBBtn outline id='navbtn'>
            <i className="fas fa-home me-2"></i>Home
            </MDBBtn>
            </Link>
            <Link to="about" spy={true} smooth={true} offset={-100} duration={100}>
              <MDBBtn outline id='navbtn'><i className="far fa-address-card me-2"></i>About</MDBBtn>
              </Link>
            <Link to="skills" spy={true} smooth={true} offset={-100} duration={100}>
              <MDBBtn outline id='navbtn'>
              <i className="far fa-star me-2"></i>Skills
                </MDBBtn>
                </Link>
                <Link to="projects" spy={true} smooth={true} offset={-100} duration={100}>
              <MDBBtn outline id='navbtn'>
              <i className="fa fa-code-branch me-2"></i>Projects
                </MDBBtn>
                </Link>
                <Link to="profile" spy={true} smooth={true} offset={-100} duration={100}>
              <MDBBtn outline id='navbtn'>
              <i className="far fa-id-badge me-2"></i>Profile
                </MDBBtn>
                </Link>
                <Link to="contact" spy={true} smooth={true} offset={-100} duration={100}>
              <MDBBtn outline id='navbtn'><i className="far fa-envelope me-2"></i>Contact</MDBBtn></Link>
              
              </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
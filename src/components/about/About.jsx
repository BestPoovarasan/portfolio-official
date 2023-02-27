import React from 'react';
import "./about.css";
import {MDBContainer,} from 'mdb-react-ui-kit';

export default function About() {
  return (
<MDBContainer id="about">
<div className="d-flex flex-wrap flex-column justify-content-evenly align-items-center gap-3 mt-3">
<h1 className='text-center mt-5 p-4 st'>About<span className="far fa-address-card ms-4"></span></h1>
<img
      src='./img/about.png'
      className='me rounded-circle img-fluid'
      alt=''
      style={{ maxWidth: '150px' }}
    />
     <figure className='text-center'>
        <p className='g-3'>I have completed  Bachelor of Engineering from Adhiparasakthi Engineering College, Melmaruvathur.</p>
        <p> & I have completed full stack developer course from Guvi Institute.</p>
        <p>I am a good full stack developer &  A lot of projects</p>
        <p>created and Publishing on my GitHub & Netlify profiles.</p>
    </figure>
    </div>
    </MDBContainer>
  );
}
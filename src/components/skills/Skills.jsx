import React from 'react';
import "./skills.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardImage,
  MDBContainer
} from 'mdb-react-ui-kit';

export default function Skills() {
  return (
    <MDBContainer>
    <h1 className='text-center mt-5 p-3 st' id="skills" data-spy="scroll" data-offset="100">Skills & Tools ‍💫</h1>
    <div className='totalcard'>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/javascript.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>JavaScript</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/html5.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>Html5</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/css3.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>Css3</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/bootstrap.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>Bootstrap</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage style={{ maxWidth: '150px', maxHeight: "70px" }} src='./img/mdb-react.png' className='skillimg p-2' alt='JS' />
        <MDBCardTitle>MDB</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/materialui.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>MUI</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/react.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>ReactJs</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/nodejs.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>NodeJs</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/express.webp' className='skillimg' alt='JS' />
        <MDBCardTitle>ExpressJs</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/mongodb.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>MongoDB</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/photoshop.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>Photoshop</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/illustrator.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>illustrator</MDBCardTitle>
    </MDBCard>
    <MDBCard id='mdcardskill'>
        <MDBCardImage src='./img/vscode.svg' className='skillimg' alt='JS' />
        <MDBCardTitle>VsCode</MDBCardTitle>
    </MDBCard>
    </div>
    </MDBContainer>
  );
}
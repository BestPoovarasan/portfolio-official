import React from "react";
import "./home.css";
import { MDBBtn, MDBCol, MDBRow, MDBIcon, MDBRipple, MDBContainer } from "mdb-react-ui-kit";

export default function Home() {
  return (
    <>
      <MDBContainer className="mt-5">
        <MDBRow id="home">
        <MDBCol sm='6'>
        <MDBRipple rippleColor='light'>
            <img
              id = "headerimg"
              alt="Reactjs"
              className="img-fluid"
              src="./img/reactheader.svg"
            />
        </MDBRipple>
        </MDBCol>
        <MDBCol sm='6' className="title">
          <h2 className="iam">
            Hello,👋 I'm Poovarasan R.
            <span id="verify" className="material-symbols-outlined">verified</span>
          </h2>
          <h6 className="tamil">
            I am a fullstack developer from Tamilnadu, India.
          </h6>
          <MDBBtn
            id="downloadcv"
            href="https://drive.google.com/file/d/17h5Zi8IHOWm4lYvsJFlCs2zFgyNzl2cR/view?usp=sharing"
            target="_blank"
          >
            <MDBIcon className="me-2" fas icon="download" />
            Download CV
          </MDBBtn>
        
        </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

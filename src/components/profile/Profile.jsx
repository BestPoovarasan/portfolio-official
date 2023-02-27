import React from "react";
import "./profile.css";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
} from "mdb-react-ui-kit";

export default function Profile() {
  return (
    <MDBContainer className="profile">
      <h1 className="text-center p-4 mt-5 st" id="projects">
        Profile<span className="far fa-id-badge ms-4"></span>
      </h1>
      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard id="profilecard" style={{ maxWidth: "300px" }}>
            <MDBRow>
              <MDBCardBody id="profilebtn">
                <MDBCardImage
                  id="profileimg"
                  src="./img/github.svg"
                  alt="github"
                  fluid
                />
                <MDBBtn
                  href="https://github.com/BestPoovarasan"
                  target="_blank"
                  outline
                  style={{ color: "#fff" }}
                >
                  Github
                </MDBBtn>
              </MDBCardBody>
            </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard id="profilecard" style={{ maxWidth: "300px" }}>
            <MDBRow>
              <MDBCardBody id="profilebtn">
                <MDBCardImage
                  id="profileimg"
                  src="./img/netlify.svg"
                  alt="github"
                  fluid
                />
                <MDBBtn
                  href="https://app.netlify.com/teams/bestpoovarasan/overview"
                  target="_blank"
                  outline
                  style={{ color: "#fff" }}
                >
                  Netlify
                </MDBBtn>
              </MDBCardBody>
            </MDBRow>
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard id="profilecard" style={{ maxWidth: "300px" }}>
            <MDBRow>
              <MDBCardBody id="profilebtn">
                <MDBCardImage
                  id="profileimg"
                  src="./img/linkedin.svg"
                  alt="github"
                  fluid
                />
                <MDBBtn
                  href="https://www.linkedin.com/in/best-poovarasan-3732a6169/"
                  target="_blank"
                  outline
                  style={{ color: "#fff" }}
                >
                  Linkedin
                </MDBBtn>
              </MDBCardBody>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <MDBFooter className='mt-5 bg-primary text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
        <a className='btn btn-outline-light btn-floating m-1' href="https://www.linkedin.com/in/best-poovarasan-3732a6169/" target="_blank" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>
          <a className='btn btn-outline-light btn-floating m-1' href="https://github.com/BestPoovarasan" target="_blank" role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>
      <div
        className="text-center text-white p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © {date} All Rights Reserved{" | "}
        <a className="text-white" href="https://mdbootstrap.com/">
          Poovarasan தமிழன்
        </a>
      </div>
    </MDBFooter>
  );
}

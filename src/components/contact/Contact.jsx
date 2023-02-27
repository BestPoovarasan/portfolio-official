import React from "react";
import "./contact.css";
import {
  MDBBtn,
  MDBInput,
  MDBTextArea,
  MDBContainer,
} from "mdb-react-ui-kit";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_serviceid,
        process.env.REACT_APP_templateid,
        form.current,
        process.env.REACT_APP_publickey
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("FAILED...", error);
        }
      );
  };
  return (
    <>
      <MDBContainer id="contact">
        <h1 className="text-center p-4 mt-5 st">
          Contact<span className="far fa-envelope ms-4"></span>
        </h1>
        <div className="d-flex flex-wrap justify-content-around align-items-center gap-3">
          <img
            src="./img/contact.svg"
            className=""
            alt=""
            style={{ maxWidth: "500px" }}
          />
          <form ref={form} onSubmit={sendEmail} className="contactform">
            <h3 className="formtitle text-center mb-3">Contact us</h3>
            <MDBInput
              className="forminput"
              id="form4Example1"
              wrapperClass="mb-4"
              name="name"
              label="Name"
            />
            <MDBInput
              className="forminput"
              type="email"
              id="form4Example2"
              wrapperClass="mb-4"
              name="user_email"
              label="Email address"
            />
            <MDBTextArea
              className="forminput"
              name="message"
              wrapperClass="mb-4"
              id='textAreaExample'
              rows={4}
              label="Message"
            />
            <MDBBtn type="submit" value="Send" className="send mb-4" block>
              Send
            </MDBBtn>
          </form>
        </div>
      </MDBContainer>
    </>
  );
}

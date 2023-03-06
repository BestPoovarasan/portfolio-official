import React from 'react';
import "./projects.css";
import {
  MDBCard, MDBCardImage,
  MDBCardBody, MDBNavbarLink,
  MDBBtn, MDBRow,
  MDBCol, MDBContainer,
  MDBAccordion, MDBAccordionItem, MDBRipple,
  MDBDropdown, MDBDropdownMenu, MDBDropdownToggle,
} from 'mdb-react-ui-kit';

export default function Projects() {
  return (
    <MDBContainer>
    <h1 className='text-center p-4 mt-5 st' id="projects">Projects<span className="fa fa-code-branch ms-4"></span></h1>
    <MDBRow className='row-cols-md-4 g-1'>
      <MDBCol>
        <MDBCard style={{ maxWidth: '350px' }} id='card'>
        <MDBRipple rippleColor='primary' color='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='./projectimg/ecomm.png'
            alt='ecomm'
            className="projectimg"
            position='top'
          />
          </MDBRipple>
          <MDBCardBody className='projectlink'>
          <MDBAccordion className='cardacc' borderless initialActive={0}>
      <MDBAccordionItem collapseId={1} headerTitle='About Ecomm'>
        In this project is full stack Ecommerce application.It is Client side made of Reactjs, MDbootstrap, react-router-dom, Redux, Axios, MUI icons etc.. AND server side Made of ExpressJs, MongoDB, NodeJs, Authentication Password hash, JWT,  Routes, cors, etc.. Finally Client side published in Github & Netlify.Next Server Side published in Github & Render.
      </MDBAccordionItem>
      </MDBAccordion>
      <div className="projectbtn">
      <MDBDropdown group>
      <MDBDropdownToggle size='sm' id="sourcecode"className='btn btn-primary'>
      Source Code
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/ecomm-ui"
                  target="_blank" link>Ecomm-Ui</MDBNavbarLink>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/ecomm-api"
                  target="_blank" link>Ecomm-Api</MDBNavbarLink>
      </MDBDropdownMenu>
    </MDBDropdown>
    <div>
      <MDBBtn size='sm' id="livepreview" href="https://curious-churros-90511c.netlify.app/"
                  target="_blank">Preview</MDBBtn>
                  </div>
                  
    </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>  
      <MDBCol>
        <MDBCard style={{ maxWidth: '350px' }} id='card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='./projectimg/weblog.png'
            alt='weblog'
            className="projectimg "
            position='top'
          />
          </MDBRipple>
          <MDBCardBody className='projectlink'>
          <MDBAccordion className='cardacc' borderless initialActive={0}>
      <MDBAccordionItem collapseId={1} headerTitle='About Weblog'>
      In this project is full stack Weblog write Story, Article application. It is Client side made of Reactjs, react-router-dom, Context api, Axios, MUI icons etc.. AND server side Made of ExpressJs, MongoDB, NodeJs, Authentication Password hash,  Routes, cors, etc.. Finally Client side published in Github & Netlify.Next Server Side published in Github & Render.
      </MDBAccordionItem>
      </MDBAccordion>
      <div className="projectbtn">
      <MDBDropdown>
      <MDBDropdownToggle size='sm' id="sourcecode"className='btn btn-primary'>
      Source Code
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/weblog-ui"
                  target="_blank" link>Weblog-UI</MDBNavbarLink>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/weblog-api"
                  target="_blank" link>Weblog-API</MDBNavbarLink>
      </MDBDropdownMenu>
    </MDBDropdown>
    <div>
      <MDBBtn size='sm' id="livepreview" href="https://admirable-daifuku-e2c385.netlify.app/"
                  target="_blank">Preview</MDBBtn>
                  </div>
    </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>  
      <MDBCol>
        <MDBCard style={{ maxWidth: '450px' }} id='card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='./projectimg/docs.png'
            alt='docs'
            className="projectimg"
            position='top'
          />
          </MDBRipple>
          <MDBCardBody className='projectlink'>
          <MDBAccordion className='cardacc' borderless initialActive={0}>
      <MDBAccordionItem collapseId={1} headerTitle='About DOCS'>
      In this project is full stack Online Document creating application with Login Process. It is Client side made of Reactjs, react-router-dom, Axios, Formik & with validation, Quilljs Text editor, MUI 5, etc.. AND server side Made of ExpressJs, MongoDB, NodeJs, Authentication Password hash, & JWT Token, Routes, cors, etc.. Finally Client side published in Github & Netlify.Next Server Side published in Github & Render.
      </MDBAccordionItem>
      </MDBAccordion>
      <div className="projectbtn">
      <MDBDropdown>
      <MDBDropdownToggle size='sm' id="sourcecode"className='btn btn-primary'>
      Source Code
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/Docs-ui"
                  target="_blank" link>Docs-Ui</MDBNavbarLink>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/Docs-api"
                  target="_blank" link>Docs-Api</MDBNavbarLink>
      </MDBDropdownMenu>
    </MDBDropdown>
    <div>
      <MDBBtn size='sm' id="livepreview" href="https://vermillion-brioche-605f81.netlify.app/"
                  target="_blank">Preview</MDBBtn>
                  </div>
                  
    </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>  
      <MDBCol>
        <MDBCard style={{ maxWidth: '450px' }} id='card'>
        <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='./projectimg/dashboard panel.png'
            alt='dashboard'
            className="projectimg"
            position='top'
          />
          </MDBRipple>
          <MDBCardBody className='projectlink'>
          <MDBAccordion className='cardacc' borderless initialActive={0}>
      <MDBAccordionItem collapseId={1} headerTitle='About Dashboard'>
      In this project is full stack Dashboard application with CRUD Operations. It is Client side made of Reactjs, recharts, react-circular-progressbar, react-router-dom, Axios, Formik & with validation, MDBootstrap React 5, etc.. AND server side Made of ExpressJs, MongoDB, NodeJs, Routes, cors, etc.. Finally Client side published in Github & Netlify.Next Server Side published in Github & Render.
      </MDBAccordionItem>
      </MDBAccordion>
      <div className="projectbtn">
      <MDBDropdown>
      <MDBDropdownToggle size='sm' id="sourcecode"className='btn btn-primary'>
      Source Code
      </MDBDropdownToggle>
      <MDBDropdownMenu>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/dashboard-ui"
                  target="_blank" link>Dashboard-Ui</MDBNavbarLink>
        <MDBNavbarLink href="https://github.com/BestPoovarasan/dashboard-api"
                  target="_blank" link>Dashboard-Api</MDBNavbarLink>
      </MDBDropdownMenu>
    </MDBDropdown>
    <div>
      <MDBBtn size='sm' id="livepreview" href="https://jolly-froyo-2b16dc.netlify.app/"
                  target="_blank">Preview</MDBBtn>
                  </div>
    </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>  
    </MDBRow>
    </MDBContainer>
  );
}
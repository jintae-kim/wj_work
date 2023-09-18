import React from "react";
import { Stack, Row, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import "../../assets/gnb.css"

const Gnb = () => {
  return (
    <>
      <Stack direction="horizontal" className="gnb-headline">

        <h1><img src={`${process.env.PUBLIC_URL}/assets/img-tkg-logo.png`} width="66" alt="TKG - Taekwang" /></h1>

        <div className="ms-auto d-flex align-items-center">

          <div className="gnb-language position-relative">

            <div className="gl-box">
              <img src={`${process.env.PUBLIC_URL}/assets/lang-korea.png`} alt="korea" />

              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                <path d="M5.5293 6.66675L8.86263 10.1667L12.196 6.66675" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            
            <div className="gl-hover">
              <div className="gl-lang active">
                <img src={`${process.env.PUBLIC_URL}/assets/lang-korea.png`} alt="korea" />
              </div>
              <div className="gl-lang">
                <img src={`${process.env.PUBLIC_URL}/assets/lang-korea.png`} alt="korea" />
              </div>
            </div>
            
          </div>

          <div className="gnb-user">
            <img src={`${process.env.PUBLIC_URL}/assets/user-icon.png`} alt="user-icon" className="user-icon" />
            <p className="user-name">홍길동</p>
          </div>
          
          <div className="gnb-button">
            <img src={`${process.env.PUBLIC_URL}/assets/gnb-btn.png`} alt="gnb-btn" width="36" />
          </div>
        </div>
      </Stack>

      <Stack direction="horizontal" className="main-navigation position-relative">
        <Nav
          activeKey="/site"
        >
          <Nav.Item>
            <NavLink to="/site/company" className="nav-link">SITE</NavLink>
            <div className="sub-depth-nav">
              <div className="sub-depth2">
                <h5 className="sd-tit">
                  Menu 1
                </h5>

                <NavLink to="#" className="sub-link">GoLink 1</NavLink>
                <NavLink to="#" className="sub-link">GoLink 2</NavLink>
                <NavLink to="#" className="sub-link">GoLink 3</NavLink>
              </div>
            </div>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/model" className="nav-link">Model</NavLink>
            <div className="sub-depth-nav">
              <div className="sub-depth2">
                <h5 className="sd-tit">
                  Menu 2
                </h5>

                <NavLink to="#" className="sub-link">GoLink 1</NavLink>
                <NavLink to="#" className="sub-link">GoLink 2</NavLink>
                <NavLink to="#" className="sub-link">GoLink 3</NavLink>
              </div>
            </div>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/reference" className="nav-link">Reference</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/time" className="nav-link">Time</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/partner" className="nav-link">Partner</NavLink>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/governance" className="nav-link">Governance</NavLink>
          </Nav.Item>
        </Nav>
      </Stack>
    </>
  )
}

export { Gnb }
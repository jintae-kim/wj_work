import React from "react";
import { Stack, Row, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import "../../assets/gnb.css"

const Gnb = () => {
  return (
    <>
      <Stack direction="horizontal" className="gnb-headline">
        <h1><img src={`${process.env.PUBLIC_URL}/assets/img-tkg-logo.png`} width="66" alt="TKG - Taekwang" /></h1>
        <div className="ms-auto">
          홍길동
        </div>
      </Stack>
      <Stack direction="horizontal" className="main-navigation">
        <Nav
          activeKey="/site"
        >
          <Nav.Item>
            <NavLink to="/site/company" className="nav-link">SITE</NavLink>
            <div className="sub-depth-nav d-none">
              2depth
            </div>
          </Nav.Item>
          <Nav.Item>
            <NavLink to="/model" className="nav-link">Model</NavLink>
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
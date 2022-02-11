import React, { useContext } from 'react'
import {Button, Container, Nav, Navbar} from 'react-bootstrap'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

const Layout = () => {
  const navigate = useNavigate();

  const renderUIPhoto = () => {
    return (
      <div>
           <Nav className="justify-content-center" activeKey="/home">
              Logo / Photo Here
           </Nav>
      </div>
    );
  };

  const renderUILinks = () => {
      return(
        <div>
           <Nav className="justify-content-center" activeKey="/home" onSelect={handleSelect}>
              <Nav.Item>
                <Nav.Link href="/home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/photos">Photos</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/contact">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/about">About</Nav.Link>
              </Nav.Item>
           </Nav>
        </div>
      );
  };

  const handleSelect = (eventKey) => {
    navigate(eventKey)
  };

  return(
    <>
          <Container>
                {renderUIPhoto()}
                {renderUILinks()}
          </Container>
      <Outlet />
    </>
  );
};

export default Layout;
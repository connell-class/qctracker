import React from "react";
import Nav from "react-bootstrap/esm/Nav";

export const NavBar: React.FC = () => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home" className="navBg">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/judgement">Judgment</Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

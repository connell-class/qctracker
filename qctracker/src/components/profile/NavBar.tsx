import React from "react";
import Nav from "react-bootstrap/esm/Nav";
import "./ProfilePage.css";
import { SearchBar } from "./SearchBar";

interface IProps{
  searchFunction:(input:string) => void
}

export const NavBar: React.FC<IProps> = (props:IProps) => {
  
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home" className="navBg">
        <Nav.Item>
          <Nav.Link href="/home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/judgement">Judgement</Nav.Link>
        </Nav.Item>
        <SearchBar search={props.searchFunction} />
      </Nav>
    </>
  );
};

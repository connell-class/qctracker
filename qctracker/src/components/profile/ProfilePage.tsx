import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "./NavBar";
import "./ProfilePage.css";
import { ReactionTable } from "./ReactionTable";
import UserInfo from "./UserInfo";

export const ProfilePage: React.FC = () => {
    return(
        <>
            <NavBar/>
            <Container>
                <Row>
                    <Col className="profileBg fill">
                        <div className="margin-50">
                        <UserInfo username="User" />
                        </div>
                        <ReactionTable email="email1"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
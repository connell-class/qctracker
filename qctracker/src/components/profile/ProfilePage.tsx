import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { NavBar } from "./NavBar";
import "./ProfilePage.css";
import { ReactionTable } from "./ReactionTable";
import UserInfo from "./UserInfo";
import {IUser} from "../model/IUser";
import Axios from "axios";
import { axiosInstance } from "../../util/axiosConfig";

export const ProfilePage:React.FC<IUser> = (props:IUser) => {

    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchedUser, setSearchedUser] = React.useState(props);

    const search = async (input:string) => {
        setSearchQuery(input);

        const pid = "/user?firstName=" + input;       //email instead maybe??? posts & user have no username
        // const {id, name, type} =
        const response = await axiosInstance.get("" + pid);

        const matchingUser = await Axios(
            {
                method:'get',
                url:'/post?username=' + input,
            }
        );
        // change the searchedUsers into a list of all users that match the input...
    }

    return(
        <>
            <NavBar searchFunction={search}/>
            <Container>
            {searchQuery == "" ?
                <Row>
                    <Col className="profileBg fill">
                        <div className="margin-50">
                        <UserInfo firstName={props.firstName} lastName={props.lastName} />
                   
                        
                        
                        </div>
                        <ReactionTable email={props.email}/>
                    </Col>
                </Row>
                : <></>}
            </Container>
                
        </>
    );
}
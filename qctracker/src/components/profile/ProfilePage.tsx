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
    const [userToShow, setUSerToShow] = React.useState(props);

    const search = async (input:string) => {
        setSearchQuery(input);

        const pid = "/user?firstName=" + input;
        const response = await axiosInstance.get("" + pid);

        console.log(response.data);

        // const matchingUser = await Axios(
        //     {
        //         method:'get',
        //         url:'/post?username=' + input,
        //     }
        // );
        // change the userToShow into the user that matches the input...
    }

    return(
        <>
            <NavBar searchFunction={search}/>
            <Container>
            {searchQuery == "" ?
                <Row>
                    <Col className="profileBg fill">
                        <div className="margin-50">
                        <UserInfo firstName={userToShow.firstName} lastName={userToShow.lastName} />
                   
                        
                        
                        </div>
                        <ReactionTable email={userToShow.email}/>

                    </Col>
                </Row>
                : <></>}
            </Container>
                
        </>
    );
}
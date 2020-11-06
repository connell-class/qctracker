import axios from 'axios';
import React, { SyntheticEvent, useState } from 'react';
import {Button, DropdownMenu, Form, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

export const JudgementModal: React.FC = () =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    const handleSubmit = async (event:SyntheticEvent<HTMLFormElement>) => {
  
        event.preventDefault();
        const fScore = event.currentTarget["scoreSelector"].value;
        const fComment = event.currentTarget["judgeComment"].value;
        const fEmail = event.currentTarget["emailForm"].value;
    
        console.log("you should see dis bruh");

          axios.post("http://localhost:3004/post", {
              id: null,
              likes: 0,
              comment: fComment,
              week: fScore,
              userEmail: fEmail
          })
        
      }

    return(
        <div>
            <Button color="blue" onClick={toggle}>Enter Judgement</Button>
            <Modal style={{textAlign:'center'}} isOpen={modal} toggle={toggle} >
                <ModalHeader></ModalHeader>
                <ModalBody>
                <Form onSubmit={handleSubmit} className="landingPageForms" method="POST">
                        <div>
                            <span>Score </span><Input type="select" name="scoreSelector">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                            </Input>
                            <br />
                        <Input type="textarea" placeHolder="Enter comments" maxLength={500} rows={6} cols={50} style={{resize:"none"}} name="judgeComment"/>
                        <Input type="text" placeHolder="Email" style={{resize:"none"}} name="emailForm"/>
                        </div>
                        <Input type="submit"/>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
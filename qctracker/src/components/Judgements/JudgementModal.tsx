import React, { useState } from 'react';
import {Button, DropdownMenu, Form, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

export const JudgementModal: React.FC = () =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    return(
        <div>
            <Button color="blue" onClick={toggle}>Enter Judgement</Button>
            <Modal style={{textAlign:'center'}} isOpen={modal} toggle={toggle} >
                <ModalHeader></ModalHeader>
                <ModalBody>
                    <Form>
                        <div>
                            <span>Score </span><Input type="select" name="select" id="scoreSelector">
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
                        <Input type="textarea" placeHolder="Enter comments" maxLength={500} rows={6} cols={50} style={{resize:"none"}} id="judgeComment"/>
                        </div>
                        <Input type="submit"/>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
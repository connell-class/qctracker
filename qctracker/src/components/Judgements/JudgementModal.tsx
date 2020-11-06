import React, { useState } from 'react';
import {Button, Form, Input, Modal, ModalBody, ModalHeader} from 'reactstrap';

export const JudgementModal: React.FC = () =>{

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal)

    return(
        <div>
            <Button color="blue" onClick={toggle}>cool button</Button>
            <Modal style={{textAlign:'center'}} isOpen={modal} toggle={toggle} >
                <ModalHeader>Judgement Header</ModalHeader>
                <ModalBody>
                    <Form>
                        <div>
                        <Input type="number"></Input>    
                        <Input type="textarea" maxLength={500} rows={6} cols={50} style={{resize:"none"}}/>
                        </div>
                        <Input type="submit"/>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    )
}
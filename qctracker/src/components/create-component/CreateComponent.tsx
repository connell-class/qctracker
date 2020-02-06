import React from 'react';
import { Label, FormGroup, Form } from 'reactstrap';

export class Create extends React.Component{


    render() {
        return(
        <>
            <h1>Create a Review</h1>
            <Form>
                <FormGroup row>
                    <Label>Enter the title for your review!: </Label>
                    <input type ="text" name = "title" placeholder="Enter a title for the review"/>
                </FormGroup>
                <FormGroup row>
                    <Label>Enter the name of who you want to review!: </Label>
                    <input type ="text" name = "peer" placeholder="Enter full name"/>
                </FormGroup>
                <FormGroup row>
                    <Label>Enter your feedback!: </Label>
                    <input type = "textarea" name = "review" placeholder = "Enter your review here"/>
                </FormGroup>
                <FormGroup row>
                    <Label>Select the grade for this review!</Label>
                    <input type ="select" name="grade"/>
                </FormGroup>
                <FormGroup>
                    <input type = 'submit' value ='Submit!'/>
                </FormGroup>
            </Form>
        </>
        )
    }
}
import React from "react";
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";

interface IReviewInfo {
  title: string;
  review: string;
  author: string;
  grade: number;
}

export class PeerReviewDisplayComponent extends React.PureComponent<IReviewInfo> {
  render() {
    return (
      <>
        <Card>
          <CardBody>
            <CardTitle>{this.props.title}</CardTitle>
            <CardSubtitle>{this.props.author}</CardSubtitle>
            <CardText>{this.props.review}</CardText>
            <CardSubtitle>{`Grade: ${this.props.grade}`}</CardSubtitle>
          </CardBody>
        </Card>
      </>
    );
  }
}
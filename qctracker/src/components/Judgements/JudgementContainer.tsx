import React, { useEffect } from "react";
import Judgement from "./Judgement";
import JudgementModal from "./Judgement";
import {Container, Row} from 'reactstrap';
import axios from 'axios';

interface Judgement {
  score: number;
  content: string;
  email: string;
  upvotes: number;
  id: number;
  week:number;
}

interface IState {
  judgements: Judgement[];
}

export const JudgementContainer: React.FC<any> = (props: any) => {

  const [judgementArray, setJudgementArray] = React.useState([]);

  const getJudgements = () => {
      const res = await axios.get('url');
      setJudgementArray(res);
  }

  useEffect(()=> {
    getJudgement
  },[])

  return (
    <Container>
      <Row>
        <Col>
        <h1>Judgements</h1>
        </Col>
        <Col>
        <JudgementModal/>
        </Col>
      </Row>
      <Row>
        <Container>

          {judgementArray.map(e => (
            <Row>
              <Judgement values={e} />
            </Row>
          ))}
        </Container>
      </Row>
    <Container/>
  );
};

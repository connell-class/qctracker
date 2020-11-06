import React, { useEffect } from "react";
import {Container, Row, Col} from 'reactstrap';
import { Judgement } from "./Judgement";
import { JudgementModal } from "./JudgementModal";

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

  
  useEffect(()=> {
    const getJudgements = async () => {
        const res = await fetch('url');
        const data = await res.json();
        setJudgementArray(data);
    }
    getJudgements();
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
    </Container>
  );
};

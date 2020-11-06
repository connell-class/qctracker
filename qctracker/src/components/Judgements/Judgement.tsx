import React from 'react';
import {Button} from 'reactstrap';

interface JudgeProps{
    email: string;
    username: string;
    score: number;
    content: string;
    vote: number;
    week: number;
}

export const Judgement: React.FC<any> = (props: any) => {

    return(
        <div className="judgement">
            <div className="judgement-header">
                <span className="judged-name">
                    {`${props.username} ${props.week}`}
                </span>
            </div>
            <div className="judgement-body">
                <p>
                   {`Anonymous message: ${props.content}`}
                </p>
            </div>
            <div className="judgement-footer">
                <span>
                    {props.vote}
                    <Button outline color="success" className="upvote"> Agree </Button>
                    <Button outline color="danger" className="upvote"> Disagree </Button>
                </span>
            </div>
        </div>
    )
}

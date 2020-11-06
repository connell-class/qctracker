import React, { SyntheticEvent, useEffect, useState } from "react";
import { Table } from "reactstrap";
import { axiosInstance } from "../../util/axiosConfig";
import { ReactionRow } from "./ReactionRow";
import {Judgement} from "../model/Judgement";


interface IProps {
  email: string;
}

export const ReactionTable: React.FC<IProps> = (props: IProps) => {
  const [reactions, setReactions] = useState<Judgement[]>([]);


  const email = props.email;

  const showTable =  async () => {
    const pid = "/post?userEmail=" + email;
    // const {id, name, type} =
    const response = await axiosInstance.get("" + pid);
    for (const r of response.data) {
      console.log(r.data);
      const id: number = r.id;
      const email: string = r.userEmail;
      const upvotes: number = r.likes;
     // const score: number = r.score;
      const content: string = r.comment;
      const week: number = r.week;
      const score: number = Math.random();
      setReactions([
        ...reactions,
        {
          email,
          id,
          upvotes,
          score,
         content,
          week,
        },
      ]);
    }
  };

  useEffect(() => {
    showTable();
  },[]);
  

  return (
    <div>
      <Table className="tableBg">
        <thead>
          <tr>
            <th>Week</th>
            <th>Likes</th>
            <th>Score</th>
            <th>Comment</th>
          </tr>
        </thead>
        <tbody>
          {reactions.map((p, i) => (
            <ReactionRow key={i} reaction={p} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

import React, { SyntheticEvent, useEffect, useState } from "react";
import { Table } from "reactstrap";
import { axiosInstance } from "../../util/axiosConfig";
import { ReactionRow } from "../ReactionRow";

export interface IPost {
  email: string;
  id: number;
  likes: number;
  score: number;
  comment: string;
  week: number;
}
interface IProps {
  email: string;
}

export const ReactionTable: React.FC<IPost> = (props: IProps) => {
  const [reactions, setReactions] = useState<IPost[]>([]);

  const email = props.email;

  useEffect(() => { async () => {
    const pid = "/posts?userEmail=" + email;
    // const {id, name, type} =
    const response = await axiosInstance.get("" + pid);
    for (const r of response.data) {
      console.log(r.data);
      const id: number = r.id;
      const email: string = r.email;
      const likes: number = r.likes;
      const score: number = r.score;
      const comment: string = r.comment;
      const week: number = r.week;
      setReactions([
        ...reactions,
        {
          email,
          id,
          likes,
          score,
          comment,
          week,
        },
      ]);
    }
  }});

  return (
    <div>
      <Table>
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

import React, { SyntheticEvent, useState } from "react";
import { Table } from "reactstrap";
import { axiosInstance } from "../../util/axiosConfig";
import { ReactionRow } from "../ReactionRow";

export interface IPost {
    email:"",
    id:0,
  likes: 0,
  score:0,
  comment: "",
  week: 0
}

export const ReactionTable: React.FC<IPost> = (props: IPost) => {

    const [reactions, setReactions] = useState([]);
    const [reaction, setReaction] = useState();

    const addPoke = async (eve: SyntheticEvent<HTMLFormElement>) => {
      eve.preventDefault();
      const pid = +eve.currentTarget["pId"].value;
      // const {id, name, type} =
      const response = await axiosInstance.get("" + pid);
      for(const r of response.data){

          console.log(r.data);
          const id : number = r.data.id;
          const email : string = r.data.email;
          const likes : number = r.data.likes;
          const score : number = r.data.score;
          const comment : string = r.data.comment;
          const week : number = r.data.week;
          setReactions([
              ...reactions,
              {
                  email,
                  id,
              }
              
            ])
        //   const { id, name } = response.data;
        //   const type = response.data.types[0].type.name;
        //   const sprite = response.data.sprites.front_default;
        //   setReactions([
        //     ...reactions,
        //   ]);
      }
    };
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

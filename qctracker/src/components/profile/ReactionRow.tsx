import React from 'react'
import {Judgement} from "../model/Judgement";




interface Iprops {
  reaction:Judgement
}

export const ReactionRow: React.FC<Iprops> = (props: Iprops) => {


    return (
        <tr>
            <td>{props.reaction.week}</td>
            <td>{props.reaction.upvotes}</td>
            <td>{props.reaction.score}</td>
            <td>{props.reaction.content}</td>
        </tr>
    )
}
{/* <th>Week</th>
<th>Likes</th>
<th>Score</th>
<th>Comment</th> */}
import React from 'react'
import { IPost } from './profile/ReactionTable'




interface Iprops {
  reaction:IPost
}

export const ReactionRow: React.FC<Iprops> = (props: Iprops) => {


    return (
        <tr>
            <td>{props.reaction.week}</td>
            <td>{props.reaction.likes}</td>
            <td>{/*props.reaction.score*/}</td>
            <td>{props.reaction.comment}</td>
        </tr>
    )
}
{/* <th>Week</th>
<th>Likes</th>
<th>Score</th>
<th>Comment</th> */}
import React from 'react'
import { IPost } from './profile/ReactionTable'




interface Iprops {
  reaction:IPost
}

export const ReactionRow: React.FC<Iprops> = (props: Iprops) => {

    const postList = Object.entries(props).map(([key, value])=>{
        <td key={key}>{value.toString()}</td>
    })
    return (
        <tr>
            {postList}
        </tr>
    )
}
import React from 'react';
import '../../App.css';
interface IProps {
    username: string
}

const UserInfo:React.FC<IProps> = (props: IProps) => {
    return (
        <div className="nameContainer">
            {props.username}
        </div>
    );
}

export default UserInfo;
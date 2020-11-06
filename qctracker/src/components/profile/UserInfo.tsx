import React from 'react';
import '../../App.css';
interface IProps {
    firstName: string;
    lastName: string;
}

const UserInfo:React.FC<IProps> = (props: IProps) => {
    return (
        <div className="nameContainer">
            {props.firstName} {props.lastName}
        </div>
    );
}

export default UserInfo;
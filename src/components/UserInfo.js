import { useState } from "react";

const UserInfo = (props) => {
    const {name, email, location} = props;
    const [count1] = useState(1);
    const [count2] = useState(2);
    return (
        <div className="user-info">
            <h2>Count1 - {count1}</h2>
            <h2>Count2 - {count2}</h2>
            <h2>Name - {name}</h2>
            <h3>Location - {location}</h3>
            <h3>Email - {email}</h3>

        </div>
    )
}

export default UserInfo;
const UserInfo = (props) => {
    const {name, email, location} = props;
    return (
        <div className="user-info">
            <h2>Name - {name}</h2>
            <h3>Location - {location}</h3>
            <h3>Email - {email}</h3>

        </div>
    )
}

export default UserInfo;
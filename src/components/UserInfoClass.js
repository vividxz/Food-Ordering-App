import React from "react";

class UserInfoClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            count : 0,
            count2 : 2
        }
    }

    render(){
        const {name, email, location} = this.props;
        const {count} = this.state;
        return(
            <div className="user-info">
                <h2>Count - {count}</h2>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count + 1
                    })
                }}>Increase Count</button>
                {/* <h2>Count2 - {count2}</h2> */}
                <h2>Name - {name}</h2>
                <h3>Location - {location}</h3>
                <h3>Email - {email}</h3>
            </div>
        )
    }
}

export default UserInfoClass;

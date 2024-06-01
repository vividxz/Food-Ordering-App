import React from "react";

class UserInfoClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            info:{
                name : "Default Name",
                location : "Default Location",
                email : "Default Email"
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/vividxz");
        const json = await data.json();
        this.setState({info:json})
    }

    render(){
        const {name, location, company, avatar_url}= this.state.info;
        return(
            <div className="git-user-info">
                <div className="text-container">
                    <h2>Name - {name}</h2>
                    <h3>Location - {location}</h3>
                    <h3>College - {company}</h3>
                </div>
                <div>
                    <img className="git-avatar" src={avatar_url}></img>
                </div>
            </div>
        )
    }
}

export default UserInfoClass;

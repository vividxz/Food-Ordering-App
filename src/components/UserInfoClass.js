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
        const userUrl = this.props.url;
        const data = await fetch(userUrl);
        const json = await data.json();
        this.setState({info:json})
    }

    render(){
        const {name, location, company, avatar_url}= this.state.info;
        return(
            <div className="flex m-4 mx-6 p-4 mb-8 justify-between bg-pink-50 rounded-xl shadow-lg shadow-pink-200">
                <div className=" pt-9">
                    <h2 className=" text-2xl">Name - {name}</h2>
                    <h3 className=" text-2xl">Location - {location}</h3>
                    <h3 className=" text-2xl">College - {company}</h3>
                </div>
                <div>
                    <img className=" w-40 rounded-full" src={avatar_url}></img>
                </div>
            </div>
        )
    }
}

export default UserInfoClass;

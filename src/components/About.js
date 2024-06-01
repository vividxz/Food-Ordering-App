import React from "react";
import UserInfo from "./UserInfo"
import UserInfoClass from "./UserInfoClass"

class About extends React.Component{

    constructor(props){
        super(props)
        
    }

    componentDidMount(){
        
    }

    render(){
        
        return (
            <div>
                <h1 className=" font-bold mx-7 my-8 text-4xl">About</h1>
                <UserInfoClass url={"https://api.github.com/users/vividxz"}/>
                <UserInfoClass url={"https://api.github.com/users/skjha1"}/>
            </div>
        )
    }
}




export default About
    

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
                <h1>About</h1>
                <UserInfoClass/>
            </div>
        )
    }
}




export default About
    

import React from "react";
import UserInfo from "./UserInfo"
import UserInfoClass from "./UserInfoClass"

class About extends React.Component{

    constructor(props){
        super(props)
        console.log("Parent Constructor");
    }

    componentDidMount(){
        console.log("Parent Mounted");
    }

    render(){
        console.log("Parent Render");
        return (
            <div>
                <h1>About</h1>
                {/* <UserInfo  name="Aditya" location="Patna" email="adityasingh94314@gmail.com" /> */}
                <UserInfoClass  name="ADITYA" location= "Chennai" email="aa5454@srmist.edu.in" />
            </div>
        )
    }
}




export default About
    

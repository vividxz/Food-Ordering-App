import React from "react";  
import ReactDOM from 'react-dom/client';


const FuctionalComponent = ()=>(
    <div>   
        <h1>Functional component 🚀</h1>
    </div>
)
const Title = ()=>(
    <div>   
        <h1>Namaste Reacat 🚀</h1>
    </div>
)


const HeadingComponent = () => (
    <div>
        {FuctionalComponent()}
        <Title/>
        <h1>
            Namaster React from Component
        </h1>
    </div>)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
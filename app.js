import React from "react";  
import ReactDOM from 'react-dom/client';

const Title = ()=><h1>Namaste Reacat 🚀</h1>;

const HeadingComponent = () => (
     <div>
        <Title/>
        <h1>
            Namaster React from Component
        </h1>
    </div>)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent/>);
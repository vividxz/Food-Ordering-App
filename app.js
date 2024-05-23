
const heading1 = React.createElement(
    "h1",
    {id : "heading", xyz : "123"},
    "Namaste React"
);
const heading2 = React.createElement(
    "h2",
     {id : "heading", xyz : "123"},
     "Namaste React"
     
    );
const heading3 = React.createElement(
    "h3",
    {id : "heading", xyz : "123"},
    "Namaste React"
    
);
const container = React.createElement(
    "div",
    {id : "container"},
    [heading1,heading2,heading3]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
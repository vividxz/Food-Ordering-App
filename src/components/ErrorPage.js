import {useRouteError} from "react-router-dom"


const ErrorPage = ()=>{
    const err = useRouteError();
    const status = err.status;
    const text = err.statusText;
    return (
        <div>
            <h1>Oops...</h1>
            <h2>Page not found</h2>
            <h3>{status}  : {text}</h3>
        </div>
    )
}

export default ErrorPage
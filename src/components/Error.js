import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError();
    console.log(error)
    return (
        <div>
            <h1>OOPS!!!!!</h1>
            <h2>Something Went Wrong.</h2>
            <h1>{error.status}: {error.statusText}</h1>
        </div>
    )
}
export default Error
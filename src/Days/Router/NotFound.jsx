
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <>
            <h2>404</h2>
            <h3>Page Not Found</h3>

            <Link to="/">Go Home</Link>
        </>
    )
}
export default NotFound;
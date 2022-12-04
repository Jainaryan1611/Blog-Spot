import { Link } from "react-router-dom";
const NotFound = () => {
    return ( 
        <div>
            <h2>404 ERROR!</h2>
            <p>Page Not Found</p>
            <Link to="/">Go back to Home Page</Link>
        </div>
     );
}
 
export default NotFound;
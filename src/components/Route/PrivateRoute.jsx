import { useAuth } from "../../contexts/AuthContext";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const { user } = useAuth();

    return (
        <Route 
            {...rest}
            render={ ({ location }) => user ? (children) : (<Redirect to={{ pathname: "/login", state: { from: location }}} />)}
        />
    )
}

export default PrivateRoute;
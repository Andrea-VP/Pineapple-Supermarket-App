import { Redirect, Route } from "react-router";
import decode from "jwt-decode";

const getToken = localStorage.getItem('token')
const decoded = decode(getToken);

let auth;
auth = decoded.roles.admin;

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest}> {auth? <Component/> : <Redirect to="/home" />} </Route>;
}

export default PrivateRoute;
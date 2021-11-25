import { Redirect, Route } from "react-router";
import decode from "jwt-decode";

const getToken = localStorage.getItem('token')

let auth;

if(!getToken){
    auth= null

}else {
    const decoded = decode(getToken);

    auth = decoded.roles.admin;
}

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route {...rest}> {auth? <Component/> : <Redirect to="/home" />} </Route>;
}

export default PrivateRoute;
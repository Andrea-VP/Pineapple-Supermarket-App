import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AccountRegister from './view-controller/AccountRegister/AccountRegister';
import LogIn from './view-controller/Login/LogIn'
import ProductsV from './view-controller/ProductsViewer/ProductsViewer';
import ProductsA from './view-controller/ProductsAdmin/ProductsAdmin';
import Home from './view-controller/Home/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/account" component={AccountRegister}></Route>
        <Route exact path="/productsv"component={ProductsV}></Route>
        <Route exact path="/productsa"component={ProductsA}></Route>
        <Route exact path="/home"component={Home}></Route>
        <Route exact path="/login"component={LogIn}></Route>
      </Switch>
    </Router>
  );
}

export default App;

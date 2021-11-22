import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AccountRegister from './view-controller/AccountRegister';
import LogIn from './view-controller/LogIn'
import ProductsV from './view-controller/ProductsViewer';
import ProductsA from './view-controller/ProductsAdmin';
import Home from './view-controller/Home';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/account" component={AccountRegister}></Route>
        <Route exact path="/productsv"component={ProductsV}></Route>
        <Route exact path="/productsa"component={ProductsA}></Route>
        <Route exact path="/home"component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
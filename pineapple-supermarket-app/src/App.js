import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AccountRegister from './view-controller/AccountRegister';
import LogIn from './view-controller/LogIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}/>
        <Route exact path="/account" component={AccountRegister}/>
      </Switch>
    </Router>
  );
}

export default App;

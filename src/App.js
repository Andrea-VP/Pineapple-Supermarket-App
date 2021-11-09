import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogIn from './view-controller/LogIn'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn}/>
      </Switch>
    </Router>
  );
}

export default App;

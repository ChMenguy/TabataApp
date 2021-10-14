import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SettingTabata from './screens/SettingTabata';
import Home from './screens/Home';
import Workout from './screens/Workout';
import Timer from './screens/Timer'

import { Store } from './store/Store';

function App() {
  return (
    <Store>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/settings' exact component={SettingTabata} />
          <Route path='/timer' exact component={Timer} />
          <Route path='/workout' exact component={Workout} />
        </Switch>      
      </Router>
    </Store>
    
    
  );
}

export default App;

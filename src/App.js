import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SettingTabata from './screens/SettingTabata';
import Layout from './layout/Layout';

import { Store } from './store/Store';

function App() {
  return (
    <Store>
      <Router>
        <Switch>
        <Route path='/' exact component={SettingTabata} />
          <Route path='/settings' exact component={SettingTabata} />
        </Switch>      
      </Router>
    </Store>
    
    
  );
}

export default App;

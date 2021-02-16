
import SearchComponent from './components/SearchComponent'
import TestComponent from './components/testcomponent';
import './scss/styles.scss';
import React from 'react'
import TheSidebar from './components/navbar/TheSidebar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TheLayout from './components/navbar/TheLayout'
import Login from './components/auth/Login'
import Register from './components/auth/Register';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" name="Home" component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/dashboard' name="login" component={TheLayout} />
      </Switch>

    </Router>

  );
}

export default App;

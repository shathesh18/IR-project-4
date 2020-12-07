import logo from './logo.svg';
import './App.css';
import React from 'react'
import TitleBar from './components/titleBar'
import { BrowserRouter as Router,Switch, Link,Route, Redirect } from 'react-router-dom'
import Analytics from './components/Analytics'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import SearchPage from './components/Temp'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

function App() {

  return (
    <div className="App">
      <Router>
        <TitleBar/>
        <Switch>
          <Route path="/home" component={SearchPage} />
          <Route path="/analytics" component={Analytics} />
          <Redirect from='*' to='/home' />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

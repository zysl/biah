import React, { lazy, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.scss';
import Main from './routes/index';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={ Main }/>
          <Redirect to="/"/>
        </Switch>
      </div>
    );
  }
}

export default App;

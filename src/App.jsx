import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widget from './views/Widget';
import Home from './views/Home';
import 'rsuite/dist/styles/rsuite-default.css';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Widget />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

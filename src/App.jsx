import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Widget from './views/Widget';
import Home from './views/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Widget />
          </Route>
          <Route path="/notification" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SignUp from './SignUp';
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

const Controller = () => (
  <Switch>
    <Route exact path={`/`} component={App} />
    <Route path={`/signup` }component={SignUp} />
  </Switch>
);


ReactDOM.render(<BrowserRouter>
<Controller></Controller>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

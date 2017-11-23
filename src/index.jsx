import React from 'react';
import ReactDOM from 'react-dom';
//import {Router, Route, hashHistory} from 'react-router';
import { HashRouter, Route } from 'react-router-dom';
import App from './components/App';
import Voting from './components/Voting';

const pair = ['Trainspotting', '28 Days Later'];

const routes = <App>
  <Route exact path = "/" component={Voting} />
</App>;

ReactDOM.render(
    <HashRouter>{routes}</HashRouter>,
    document.getElementById('app')
);

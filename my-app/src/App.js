import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Checkout from './checkout';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Checkout}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

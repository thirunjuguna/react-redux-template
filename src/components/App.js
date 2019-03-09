import React, { Component} from 'react';
import Example from './Example/Example';
import {
Switch, Route, 
} from 'react-router';

class App extends Component {
  render() {
    return (
      <Switch>
      <Route exact path="/" component={Example} />
    </Switch>
    );
  }
}

export default App;

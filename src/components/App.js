import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import Example from './Example/Example';

class App extends Component {
  componentWillMount() {}

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Example} />
      </Switch>
    );
  }
}

export default App;

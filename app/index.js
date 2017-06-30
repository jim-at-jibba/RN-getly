import React, { Component } from 'react';

import Root from './config/router';
import { AlertProvider } from './components/alert';

class App extends Component {
  render() {
    return (
      <AlertProvider>
        <Root />
      </AlertProvider>
    );
  }
}

export default App;

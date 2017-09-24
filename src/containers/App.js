import React, { Component } from 'react';
import once from 'lodash.once'
import injectTapEventPlugin from 'react-tap-event-plugin'
import AppBar from '../components/AppBar'
import RootRouter from '../router'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'
import { connect } from 'react-redux'
import 'typeface-roboto'


class App extends Component {
  tapInitOnce = once(() => injectTapEventPlugin());
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <AppBar title="Quick proof-of-concept" />
          <RootRouter />
        </div>
      </ConnectedRouter >
    )
  }
}


export default connect()(App)

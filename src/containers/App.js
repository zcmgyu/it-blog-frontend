import React, { Component } from 'react';
import once from 'lodash.once'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavigationBar from '../components/NavigationBar'
import RootRouter from '../router'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'
import PushNotification from '../components/PushNotification';

// import 'typeface-roboto'


class App extends Component {
    tapInitOnce = once(() => injectTapEventPlugin());
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <NavigationBar title="LTP - IT Blog" />
                    <RootRouter />
                    <PushNotification />
                </div>
            </ConnectedRouter >
        )
    }
}

export default App

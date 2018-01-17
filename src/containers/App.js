import React, { Component } from 'react'
import once from 'lodash.once'
import injectTapEventPlugin from 'react-tap-event-plugin'
import NavigationBar from '../components/NavigationBar'
import RootRouter from '../router'
import ReactGA from 'react-ga'
import { ConnectedRouter } from 'react-router-redux'
import history from '../store/history'
import PushNotification from '../components/PushNotification'

// import 'typeface-roboto'


class App extends Component {
    constructor(props) {
        super(props)
        this.initReactGA()
    }
    

    initReactGA = () => {
        ReactGA.initialize('UA-111506394-2')
        // Send initial test view
        // ReactGA.pageview(window.location.pathname + window.location.search)
    }

    tapInitOnce = once(() => injectTapEventPlugin())
    render() {
        return (
            <ConnectedRouter history={history}>
                <div>
                    <NavigationBar title="IT Blog" />
                    <RootRouter />
                    <PushNotification />
                </div>
            </ConnectedRouter >
        )
    }
}

export default App

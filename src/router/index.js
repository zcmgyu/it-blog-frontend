import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { requireAuth } from '../components/AuthenticatedComponent'

// Containers
import LoginPage from '../containers/LoginPage'
import HomePage from '../containers/HomePage'
import MyPage from '../containers/MyPage'
import NotFound from '../components/NotFound'


const RootRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/mypage" component={requireAuth(MyPage)} />
            <Route path="/login" component={LoginPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default RootRouter
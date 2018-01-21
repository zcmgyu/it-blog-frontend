import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { requireAuth } from '../components/AuthenticatedComponent'

// Containers
import SignInPage from '../containers/SignInPage'
import SignUpPage from '../containers/SignUpPage'
import ForgotPasswordPage from '../containers/ForgotPasswordPage'
import HomePage from '../containers/HomePage'
import MyPage from '../containers/MyPage'
import PostPage from '../containers/PostPage'
import TagPage from '../containers/TagPage'
import SearchPage from '../containers/SearchPage'
import Logout from '../components/Logout'
import NotFound from '../components/NotFound'

const RootRouter = () => {
    return (
        <Switch>
            <Redirect exact from='/' to='/home/trend' />
            <Redirect exact from='/home' to='/home/trend' />
            <Route exact path='/home/:type' component={HomePage} />
            <Route path='/my-page' component={requireAuth(MyPage)} />
            <Route path='/sign-in' component={SignInPage} />
            <Route path='/sign-up' component={SignUpPage} />
            <Route path='/forgot-password' component={ForgotPasswordPage} />
            <Route path='/tag' component={TagPage} />
            <Route path='/search' component={SearchPage} />
            <Route path='/posts' component={PostPage} />
            <Route path='/logout' component={requireAuth(Logout)} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default RootRouter
import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { requireAuth } from '../components/AuthenticatedComponent'

// Containers
import LoginPage from '../containers/LoginPage'
import HomePage from '../containers/HomePage'
import MyPage from '../containers/MyPage'
import PostPage from '../containers/PostPage'
import TagPage from '../containers/TagPage'
import SearchPage from '../containers/SearchPage'
import NotFound from '../components/NotFound'


const RootRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Redirect from="logout" to="/" />
            <Route path="/mypage" component={requireAuth(MyPage)} />
            <Route path="/login" component={LoginPage} />
            <Route path="/tag" component={TagPage} />
            <Route path="/search" component={SearchPage} />
            <Route path="/post" component={PostPage} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default RootRouter
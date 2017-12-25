import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { requireAuth } from '../components/AuthenticatedComponent'

// Containers
import LoginPage from '../containers/LoginPage'
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
            <Route exact path="/" component={HomePage} />
            <Route path="/mypage" component={requireAuth(MyPage)} />
            <Route path="/login" component={LoginPage} />
            <Route path="/tag" component={TagPage} />
            <Route path="/search" component={SearchPage} />
            <Route exact path="/posts" component={() => <PostPage read_only={false} />} />
            <Route path="/posts/:post_path" component={() => <PostPage read_only={true} />} />
            <Route path='/logout' component={Logout} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default RootRouter
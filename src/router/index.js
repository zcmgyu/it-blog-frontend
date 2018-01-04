import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { requireAuth } from '../components/AuthenticatedComponent'

// Containers
import SignInPage from '../containers/SignInPage'
import SignUpPage from '../containers/SignUpPage'
import HomePage from '../containers/HomePage'
import MyPage from '../containers/MyPage'
import PostPage from '../containers/PostPage'
import TagPage from '../containers/TagPage'
import SearchPage from '../containers/SearchPage'
import Logout from '../components/Logout'
import NotFound from '../components/NotFound'

const PostDetailPage = () => (<PostPage read_only={true} />)

const PostEditorPage = () => (<PostPage read_only={false} />)

const EditPostPage = () => (<PostPage read_only={true} />)

const RootRouter = () => {
    return (
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/mypage" component={requireAuth(MyPage)} />
            <Route path="/sign-in" component={SignInPage} />
            <Route path="/sign-up" component={SignUpPage} />
            <Route path="/tag" component={TagPage} />
            <Route path="/search" component={SearchPage} />
            <Route exact path="/posts" component={requireAuth(PostEditorPage)} />
            <Route path="/posts/:post_path" component={PostDetailPage} />
            <Route path="/posts/:post_path/edit" component={requireAuth(EditPostPage)} />
            <Route path='/logout' component={requireAuth(Logout)} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default RootRouter
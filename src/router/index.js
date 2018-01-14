import React from 'react'
import { Route, Switch } from 'react-router-dom'
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

// const ReadOnLyPostPage = () => (<PostPage readOnly={true} />)
// const EditablePostPage = () => (<PostPage readOnly={false} />)


const RootRouter = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/mypage' component={requireAuth(MyPage)} />
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

// <Route exact path='/posts' component={requireAuth(EditablePostPage)} />
// <Route path='/posts/:postId/:transliterated' component={withTracker(ReadOnLyPostPage)} />
// <Route exact path='/posts/:postId/:transliterated/edit' component={requireAuth(EditablePostPage)} />

export default RootRouter
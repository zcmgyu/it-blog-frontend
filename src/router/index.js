import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {
  userIsAuthenticatedRedir,
  userIsNotAuthenticatedRedir
} from "../HOCs/auth";

// Containers
import SignInPage from "../containers/SignInPage";
import SignUpPage from "../containers/SignUpPage";
import ForgotPasswordPage from "../containers/ForgotPasswordPage";
import HomePage from "../containers/HomePage";
import MyPage from "../containers/MyPage";
import PostPage from "../containers/PostPage";
import TagPage from "../containers/TagPage";
import SearchPage from "../containers/SearchPage";
import Logout from "../components/Logout";
import NotFound from "../components/NotFound";

// Need to apply the hocs here to avoid applying them inside the render method
// const Home = userIsNotAuthenticatedRedir(HomePage);
const SignIn = userIsNotAuthenticatedRedir(SignInPage);
const MyPageAuth = userIsAuthenticatedRedir(MyPage);
const LogoutAuth = userIsAuthenticatedRedir(Logout);

const RootRouter = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Redirect exact from="/home" to="/home/trend" />
      <Route exact path="/home/:type" component={HomePage} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/sign-up" component={SignUpPage} />
      <Route path="/forgot-password" component={ForgotPasswordPage} />
      <Route path="/my-page" component={MyPageAuth} />
      <Route path="/tag" component={TagPage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/posts" component={PostPage} />
      <Route path="/logout" component={LogoutAuth} />
      <Route component={NotFound} />
    </Switch>
  );
};



export default RootRouter;

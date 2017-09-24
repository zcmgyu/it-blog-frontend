import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { push } from 'react-router-redux'

export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth(this.props);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth({isAuthenticated, location, dispatch}) {
            if (!isAuthenticated) {
                let redirectAfterLogin = location.pathname;
                dispatch(push({pathname: "/login", search:`?redirect=${redirectAfterLogin}`}))
                // this.props.dispatch(push({pathname: "/login"}))
            }
        }

        render() {
            return (
                <div>
                    {this.props.isAuthenticated === true
                        ? <Component {...this.props} />
                        : <Redirect to={{ path: "/login" }} />
                    }
                </div>
            )

        }
    }

    const mapStateToProps = (state) => ({
        // token: state.auth.token,
        // userName: state.auth.userName,
        isAuthenticated: state.authReducer.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
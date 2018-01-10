import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'

// ACTIONS
// import { toggleLoginDialog } from '../actions/dialog'

export function requireAuth(Component) {

    class AuthenticatedComponent extends React.Component {

        componentWillMount() {
            this.checkAuth(this.props);
        }

        componentWillReceiveProps(nextProps) {
            this.checkAuth(nextProps);
        }

        checkAuth({isAuthenticated, dispatch}) {
            if (!isAuthenticated) {
                // dispatch(toggleLoginDialog())
                dispatch(push('/sign-in'))
            }
        }

        render() {
            if(this.props.isAuthenticated === true) {
                return (
                    <Component {...this.props} />
                )
            } else {
                return null
            }
        }
    }

    const mapStateToProps = (state) => ({
        isAuthenticated: state.auth.isAuthenticated
    });

    return connect(mapStateToProps)(AuthenticatedComponent);

}
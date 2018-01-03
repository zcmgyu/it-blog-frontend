import React, { Component } from 'react';
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { remove_auth } from "../actions/authenticate"
import { removeAuth } from '../utils/localStorage'

class Logout extends Component {
    componentDidMount() {
        removeAuth()
        this.props.dispatch(remove_auth.request())
        this.props.dispatch(push('/'))
    }
    render() {
        return (
            <h3>
                Logging out...
          </h3>
        );
    }
}

export default connect()(Logout)
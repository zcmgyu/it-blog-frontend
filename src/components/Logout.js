import React, { Component } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { remove_auth } from "../actions/authenticate"
import { getCurrentUser } from '../actions/user'
import { removeAuth } from '../utils/localStorage'

class Logout extends Component {
    componentDidMount() {
        removeAuth()
        const { dispatch } = this.props
        dispatch(getCurrentUser.failure())
        dispatch(remove_auth.request())
        dispatch(push('/'))
    }
    render() {
        return (
            <h3>
                Logging out...
          </h3>
        )
    }
}

export default connect()(Logout)
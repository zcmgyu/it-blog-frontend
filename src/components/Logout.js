import React, { Component } from 'react';
import { connect } from 'react-redux'
import {push} from 'react-router-redux'
import { logoutUserRequest } from "../actions/authentication"

class Logout extends Component {
      componentDidMount(){
        localStorage.removeItem('state')
        this.props.dispatch(push('/'))
        this.props.dispatch(logoutUserRequest())
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
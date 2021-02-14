import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox } from 'antd';

import * as actions from '../store/actions/auth';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

function Logout (props){
    props.onAuth()
    props.history.push('/')
  return (0)
};

const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: () => dispatch(actions.logout()) 
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Logout);
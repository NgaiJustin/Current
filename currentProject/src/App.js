//react built-int components
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
//authentication handling
import * as actions from './store/actions/auth';
//libraries
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
//components
import BaseRouter from './BaseRouter';
import CustomLayout from './containers/CustomLayout';

//developer mode (set to false when building)
const development_mode = false;

class App extends Component {

    componentDidMount() {
        this.props.onTryAutoSignin();
    }

    render() {
        return (
            <div>
                <Router>
                    <CustomLayout {...this.props}>
                        <BaseRouter />
                    </CustomLayout>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    if (development_mode){
        return {
            isAuthenticated: true
        }
    }
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTryAutoSignin: () => dispatch(actions.authCheckState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

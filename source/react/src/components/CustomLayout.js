import React from 'react';
import { Layout } from 'antd';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';
import NavBar from './NavBar/NavBar'


const { Header, Content, Footer } = Layout;

class CustomLayout extends React.Component {

    state = {
        current: 'feed',
      };
    
    handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
    };


    render() {
        return (
            <Layout className="layout">
                <Header style={{backgroundColor: "white"}}>
                    <NavBar {...this.props}></NavBar>
                </Header>
                <Content style={{ padding: '50px 50px'}}>
                    <div style={{ background: 'white', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                  Current ©2021 Created by TeamName
                </Footer>
            </Layout>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(null, mapDispatchToProps)(CustomLayout));
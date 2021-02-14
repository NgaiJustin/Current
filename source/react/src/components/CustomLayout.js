import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { LoginOutlined ,LogoutOutlined,HomeOutlined,UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Link} from 'react-router-dom';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const { Header, Content, Footer, Sider } = Layout;

class CustomLayout extends React.Component {

    render() {
        return (
            <Layout style={{minHeight: 765}}>
                <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                >
                <div className="logo">Current 🌊</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                    {this.props.isAuthenticated ?
                    [
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                        </Menu.Item>,
                        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                            <Link to="/vidcall">Join a Room</Link>
                        </Menu.Item>,
                        <Menu.Item key="3" icon={<UserOutlined />}>
                            <Link to="">{this.props.username}</Link>
                        </Menu.Item>,
                        <Menu.Item key="4" icon={<LogoutOutlined />}>
                            <Link to="/logout">Logout</Link>
                        </Menu.Item>,
                    ]
                        :
                    [
                        <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                        </Menu.Item>,
                        <Menu.Item key="5" icon={<LoginOutlined />}>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                    ]
                    }
                </Menu>
                </Sider>
                <Layout>
                <Content style={{ margin: '70px 70px 0' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        {this.props.children}
                    </div>
                </Content>

                <Footer style={{ textAlign: 'center' }}>
                    Current ©2021 Created by TreehacksTeam

                </Footer>
                <section>
                        <div class="wave"></div>
                </section>

                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        username: state.username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout()) 
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomLayout));
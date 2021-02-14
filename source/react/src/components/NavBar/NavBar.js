import React from 'react';
import { Menu } from 'antd';
import { Link} from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';

import { connect } from "react-redux";

const { SubMenu } = Menu;

class NavBar extends React.Component {
    state = {
        current: 'home',
        username: localStorage.getItem("username")
      };

    handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
    };
    
    render() {
        const { current } = this.state;
        return (
            <Menu
                onClick={this.handleClick} 
                selectedKeys={current} 
                mode="horizontal"
            >
                <Menu.Item key="home">
                    <Link to="/">Home</Link>
                </Menu.Item>
                {this.props.isAuthenticated ?
                    [
                        <Menu.Item key="vidcall">
                            <Link to="/vidcall">Join a Room</Link>
                        </Menu.Item>,
                        <SubMenu  key="user"  title={this.props.username}>
                            <Menu.ItemGroup>
                                <Menu.Item key="profile">Profile</Menu.Item>
                                <Menu.Item key="logout">
                                    <Link to="/logout">Logout</Link>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>,

                    ]
                :
                    <Menu.Item key="login">
                        <Link to="/login">Login</Link>
                    </Menu.Item>
                }
            </Menu>

        );
    }

}

const mapStateToProps = state => {
    return {
        username: state.username
    };
};

export default connect(mapStateToProps)(NavBar);
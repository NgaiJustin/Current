import React from 'react';
import { Menu } from 'antd';
import { Link} from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

class NavBar extends React.Component {
    state = {
        current: 'feed',
      };

    handleClick = e => {
    console.log('click ', e);
    this.setState({ current: e.key });
    };

    render() {
        const { current } = this.state;
        return (
            <Menu
                defaultSelectedKeys={['feed']}
                onClick={this.handleClick} 
                selectedKeys={[current]} 
                mode="horizontal"
            >
                <Menu.Item key="feed">
                    <Link to="/">Feed</Link>
                </Menu.Item>
                {this.props.isAuthenticated ?
                    [
                        <Menu.Item key="create">
                            <Link to="/upload">Create</Link>
                        </Menu.Item>,
                        <Menu.Item key="videochat">
                            <Link to="/join">Join a Room</Link>
                        </Menu.Item>,
                        <SubMenu  key="user"  title="Username">
                            <Menu.ItemGroup>
                                <Menu.Item key="profile">Profile</Menu.Item>
                                <Menu.Item key="myvideos">My Videos</Menu.Item>
                            </Menu.ItemGroup>
                            <Menu.ItemGroup title="Account">
                                <Menu.Item key="settings" icon={<SettingOutlined />}>Settings</Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>,
                        <Menu.Item key="logout" onClick={this.props.logout}>
                            Logout
                        </Menu.Item>
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

export default NavBar;
import { Link } from 'react-router-dom';
import gadjianLogo from './../assets/images/gadjian-logo.png'

import { Menu, Dropdown, Avatar } from 'antd';
import { MenuOutlined, UserOutlined } from '@ant-design/icons';

const HeaderTemplate = () => {
    return (
        <header className="header-custom ant-layout-header">
            <Link to="/"><img src={gadjianLogo} className="logo-style" /></Link>
            <div className="menu-nonresponsive">
                Hallo,<a>Gadjian User</a>
                <Avatar size={35} icon={<UserOutlined />} />
            </div>

            <div className="menu-responsive">
                <Dropdown overlay={
                    <Menu>
                        <Menu.Item>
                            <a rel="noopener noreferrer" href="/">Home</a>
                        </Menu.Item>
                    </Menu>
                }>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}><MenuOutlined /></a>
                </Dropdown>
                <div style={{ position: 'fixed', right: 0, margin: '15px', top: '-15px' }}>
                    <Avatar size={35} icon={<UserOutlined />} />
                </div>
            </div>
        </header>
    )
}

export default HeaderTemplate
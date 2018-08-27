import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import navBarConfig from './navbarConfig';
import './navbar.css';
const { Sider}  = Layout;
const NavBar = function () {
    return (
      <Sider style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, background: '#fff' }}>
     
      <Menu mode="inline" defaultSelectedKeys={['4']}>
        {navBarConfig.map( (param, index) => (
           <Menu.Item key={index}>
           <Icon type={param.type} />
           <span className={param.className}>nav {index}</span>
         </Menu.Item>
        ))}
      </Menu>
     
</Sider>
    )
}

export default NavBar;
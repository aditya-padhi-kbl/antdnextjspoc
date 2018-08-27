import React from 'react';
import {Layout} from 'antd';
import './header.css';
const { Header } = Layout;
const HEADER = () => (
    <Header className="headerFixed">
        <div className="logo" />
    </Header>
);

export default HEADER;
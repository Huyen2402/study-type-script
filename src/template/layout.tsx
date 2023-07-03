import React, { useState } from 'react';
import 'antd/dist/antd';
import './index.css';
import { HashRouter as Router, Route, Link, Routes } from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, MenuProps  } from 'antd';
import Employee from '../employee/employee';
import Deparment from '../deparmemt/deparment';
const { Header, Sider, Content } = Layout;

const Demo: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openKeys, setOpenKeys] = React.useState(1);
  const items= [
    {
      key: '1',
      icon: <UserOutlined />,
      label: 'QUẢN LÝ NHÂN SỰ',
    },
    {
      key: '2',
      icon: <VideoCameraOutlined />,
      label: 'QUẢN LÝ PHÒNG BAN',
    },
    {
      key: '3',
      icon: <UploadOutlined />,
      label: 'KHÁC',
    },
  ];
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e.key);
    setOpenKeys(Number(e.key));
    
  };
  
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
        onClick={(onClick)}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
        
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
         <b> QUẢN LÝ NHÂN SỰ</b>
          
        </Header>
        
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {React.createElement(openKeys === 1 ? Deparment : Employee)}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Demo;
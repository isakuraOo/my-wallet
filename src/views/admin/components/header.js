import React from 'react'
import { Layout, Icon } from 'antd'
const {Header} = Layout

const Index = ({
    collapsed,
    handleToggle
}) => (
    <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={handleToggle}
        />
    </Header>
)

export default Index
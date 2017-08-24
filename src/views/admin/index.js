import React, { Component } from 'react'
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { Layout } from 'antd';
import Menu from './components/menu'
import Header from './components/header'
import { loginByTokenAction } from '../../actions/user'
import { adminContent, userAvatar } from './index.scss'
import cookie from 'js-cookie'

const { Sider, Content } = Layout;

class Index extends Component {
    state = {
        collapsed: false,
    }

    componentWillMount() {
        const { login, dispatch } = this.props

        if (!login) dispatch(loginByTokenAction())
    }

    componentWillReceiveProps(nextProps) {
        const { login, errorMsg, dispatch } = nextProps

        if (!login && errorMsg) {
            dispatch(push('/login'))
        }
    }


    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        const { collapsed } = this.state

        console.log('token', cookie.get('x-auth-token') );

        return (
            <Layout className={adminContent}>

                {/*侧边栏导航*/}
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                >
                    <div className={userAvatar}>LOGO</div>
                    <Menu />
                </Sider>


                <Layout>

                    <Header handleToggle={this.toggle} collapsed={collapsed} />
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>

                    </Content>
                </Layout>

            </Layout>
        );
    }
}

const mapStateToProps = ({ user }) => {

    const { userInfo, login, errorMsg } = user

    return {
        userInfo,
        login,
        errorMsg
    }

}

export default connect(mapStateToProps)(Index)
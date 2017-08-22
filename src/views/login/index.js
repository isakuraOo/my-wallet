import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { loginAction, clearUser } from '../../actions/user'

import {
    Input,
    Button,
    Row,
    Form,
    Icon,
    Checkbox
} from 'antd'

import {
    login,
    loginForm,
    loginFormForgot,
    loginFormButton,
    submitBox
} from './index.scss'

const FormItem = Form.Item;

class Index extends Component {
    
    componentWillMount() {
        this.props.dispatch(clearUser())
    }

    componentWillReceiveProps(nextProps) {
        const {userInfo, dispatch} = nextProps

        if(userInfo !== this.props.userInfo && userInfo){
            dispatch(push('/admin'))
        }
    }
    
    handleSubmit = (e) => {

        const { form, dispatch } = this.props

        e.preventDefault();

        form.validateFields((err, values) => {

            if (!err) {
                dispatch(loginAction(values))
            }
        });

    }

    render() {
        const { props, handleSubmit } = this

        const { form } = props

        const { getFieldDecorator } = form;

        return (
            <Row className={login} type="flex" justify="center" align="middle">
                <Form onSubmit={handleSubmit} className={loginForm}>
                    <h2>用户登录</h2>
                    <FormItem>
                        {
                            getFieldDecorator('account', {
                                initialValue: 'MG',
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入账号'
                                    }
                                ]
                            }
                            )(<Input
                                prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                                placeholder="账号" />)
                        }
                    </FormItem>

                    <FormItem>
                        {
                            getFieldDecorator('password', {
                                initialValue: 0,
                                rules: [
                                    {
                                        required: true,
                                        message: '请输入密码'
                                    }
                                ]
                            })(<Input
                                prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                                type="password"
                                placeholder="密码" />)
                        }
                    </FormItem>

                    <FormItem className={submitBox}>
                        {
                            getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: false
                            })(<Checkbox>记住我</Checkbox>)
                        }
                        <a className={loginFormForgot} href="">忘记密码</a>
                        <Button type="primary" htmlType="submit" className={loginFormButton}>登 录</Button>
                        还没注册？请先
                        <Link to="./register">注册</Link>
                    </FormItem>

                </Form>
            </Row>
        )
    }
}

const mapStateToProps = ({ user }) => ({
    userInfo: user.userInfo,
})

export default connect(mapStateToProps)(Form.create()(Index))
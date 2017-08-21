import React from 'react'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { loginAction } from '../../actions/user'

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

const Login = (props) => {
    
    const {form} = props
    
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {

        e.preventDefault();

        form.validateFields((err, values) => {
            
            if (!err) {
                console.log('Received values of form: ', values);

                props.actions.loginAction(values)
            }
        });

    }

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


const mapStateToProps = ({user}) => ({
    user,
})

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({
        loginAction
    }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login))
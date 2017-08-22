import React from 'react'
import {Link} from 'react-router-dom'
import {
    Input,
    Button,
    Row,
    Form,
    Icon,
} from 'antd'
import {
    register, 
    registerForm, 
    loginFormButton,
    submitBox
} from './index.scss'
import { connect } from 'react-redux';
import {registerAction} from '../../actions/user'

const FormItem = Form.Item;

const Register = ({ form, dispatch }) => {
    
    const { getFieldDecorator } = form;

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                dispatch(registerAction(values))
            }
        });
    }

    return (
        <Row className={register} type="flex" justify="center" align="middle">
            <Form onSubmit={handleSubmit} className={registerForm}>
                <h2>用户注册</h2>
                <FormItem>
                    {
                        getFieldDecorator('account', {
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
                <div className={submitBox}>
                    <Button type="primary" htmlType="submit" className={loginFormButton}>注 册</Button>
                    已经注册？请
                    <Link to="/login">登录</Link>
                </div>
            </Form>
        </Row>
    )
}

const mapStateToProps = ({user}) => ({
    register: user.register
})

export default connect(mapStateToProps)(Form.create()(Register))
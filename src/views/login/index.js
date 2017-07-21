import React from 'react'
import {
    Input,
    Button,
    Row,
    Form,
    Icon,
    Checkbox
} from 'antd'
import styles from './index.scss'

const FormItem = Form.Item;

const Login = ({ form }) => {
    const { getFieldDecorator } = form;

    const { login, loginForm, loginFormForgot, loginFormButton } = styles

    const handleSubmit = (e) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                if(values.userName == 'zhou' && values.password == '0'){
                    console.log('success');
                }
            }
        });
    }

    return (
        <Row className={login} type="flex" justify="center" align="middle">
            <Form onSubmit={handleSubmit} className={loginForm}>
                <FormItem>
                    {
                        getFieldDecorator('userName', {
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
                <FormItem>
                    {
                        getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: false
                        })(<Checkbox>记住我</Checkbox>)
                    }
                    <a className={loginFormForgot} href="">忘记密码</a>
                    <Button type="primary" htmlType="submit" className={loginFormButton}>登 录</Button>
                    还没注册？请先
                    <a href="">注册</a>
                </FormItem>
            </Form>
        </Row>
    )
}

export default Form.create()(Login)
import React, { Component } from 'react';
import { Button, InputItem, WhiteSpace} from 'antd-mobile';


export default class Login extends Component {
    handleClick () {
        console.log('login')
    }
    render () {
        return <>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <InputItem placeholder="输入英文或数字" maxLength={8} pattern="[0-9a-z]*">账号</InputItem>
            <InputItem placeholder="输入英文或数字" type="password" maxLength={8}>密码</InputItem>
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <WhiteSpace size="xl" />
            <Button type="primary" onClick={this.handleClick}>登录</Button>
        </>
    }
}



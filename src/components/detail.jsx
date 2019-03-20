import React, { Component } from 'react';
import { TextareaItem, NavBar, Icon } from 'antd-mobile';

export default class Detail extends Component {
    constructor () {
        super();
        this.state = {
            userId: '12',
            key : 'name',
            value: 'nickname'
        }
    }
    componentDidMount() {
        this.autoFocusInst.focus();
    }
    render () {
        return <>
            <NavBar
                mode="dark"
                icon={<Icon type="left" />}
                onLeftClick={() => console.log('onLeftClick')}
                rightContent={[
                    <Icon key="0" type="check" />,
                ]}>更改信息</NavBar>

            <TextareaItem
                data-seed="logId"
                ref={el => this.autoFocusInst = el}
                autoHeight
                // value = {this.state.value}
            />
        </>
    }
} 
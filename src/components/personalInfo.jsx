import React, { Component } from 'react';
import Avatar from './avatar';
import { List, Button } from 'antd-mobile';
import styled from 'styled-components';

const Item = List.Item;
const AvatarContainer = styled.div`
    text-align: center;
    height: 30vh;
    padding: 10vh;
`;

export default class PersonalInfo extends Component{
    constructor (props) {
        super();
        this.state = {
            isMe : false,
            info : {
                account: '账号222',
                nikename: 'nickname',
                age: 12,
                sex: '女',
                emaill: '285669588@qq.com',
                introduction: '自我介绍绥芬河市东方地方规划法规对方的回复的',
            }
        }
    }
    render () {
        const infoList = Object.keys(this.state.info).map((item, index) => (
            <Item key={index} 
            arrow={this.state.isMe? "horizontal" : "empty"} 
            wrap
            onClick={() => { console.log(0)}}
            >
            {item} : {this.state.info[item]}
            {/* <Brief>subtitle</Brief> */}
            </Item>
        ))
        return <div>
            <AvatarContainer><Avatar size="lg"/></AvatarContainer>
            <List>{infoList}</List>
            <Button>{发消息}</Button> 
        </div>
    }
}
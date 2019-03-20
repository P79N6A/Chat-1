import React, { Component } from 'react';
import { Card, WingBlank, WhiteSpace, Flex } from 'antd-mobile';
import AvatarContanier from '$components/avatar';
import styled from 'styled-components';

const CharRoom = styled.div`
    padding: 10px;
`;
export default class CharRoomContanier extends Component {
    constructor () {
        super();
        this.state = {
            messageList :[{
                msgId: 1,
                msgContent: '消息1',
                msgTime: Date.now(),
                sendId: 1,
                receive: 2,
            },{
                msgId: 1,
                msgContent: 'xi消息ao xi',
                msgTime: Date.now(),
                sendId: 1,
                receive: 2,
            },{
                msgId: 1,
                msgContent: '消息3',
                msgTime: Date.now(),
                sendId: 1,
                receive: 2,
            },{
                msgId: 1,
                msgContent: 'sdshfgdffdk',
                msgTime: Date.now(),
                sendId: 1,
                receive: 2,
            },{
                msgId: 1,
                msgContent: 'sdshfgdffdk',
                msgTime: Date.now(),
                sendId: 1,
                receive: 2,
            }]
        }
    }
    render () {
        const msgList = this.state.messageList.map((msg) => (
            <Flex>
                <Flex.Item ><AvatarContanier/></Flex.Item>
                <Flex.Item style={{flex: 7}}>
            <WingBlank size="lg" >
            <WhiteSpace size="xl" />
            <Card>
                <Card.Body>{msg.msgContent}</Card.Body>
                <Card.Footer extra={msg.msgTime} />
            </Card>
            </WingBlank></Flex.Item>
            </Flex>
        ))
        return <CharRoom>{msgList}</CharRoom>
        
    }
}
import React, { Component } from 'react';
import { List,  Badge } from 'antd-mobile';
import signal from '$icons/signal.svg';

// TODO: SwipeAction 右滑删除会话
const Item = List.Item;
const Brief = Item.Brief;
export default class FriendList extends Component {
    constructor(props){
        super(props);
        this.state = {
            friendsInfo:[{
                friendId: 1,
                nickName: '好友1',
            },{
                friendId: 2,
                nickName: '好友2',
            },{
                friendId: 3,
                nickName: '好友3',
            },{
                friendId: 4,
                nickName: '好友4',
            },{
                friendId: 5,
                nickName: '好友5',
            },{
                friendId: 6,
                nickName: '好友6',
            }]
        }
    }
    render () {
        const friendList = this.state.friendsInfo.map((friend) => 
        <Item arrow="horizontal" extra={'发消息'} key={friend.friendId} 
        extra={<Badge text={77} overflowCount={55} />}
        thumb={signal}>
        {/* <Avatar /> */}
        {friend.nickName}
        <Brief>subtitle</Brief>
        {/* <Brief>sdssdd</Brief> */}
        </Item>)
        return <List renderHeader={() => '好友列表'}>
            {friendList}
        </List>
    }
}

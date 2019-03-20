import React, { Component } from 'react';
import { col } from '$components/testcompo';
import Login from '$components/login';
// import FriendList from '$containers/friendList';
import FriendList from '$components/friendList';
import CharRoomContanier from '$components/charRoom';
import PersonalInfo from '$components/personalInfo';
import { TabBar } from 'antd-mobile';
import styled from 'styled-components';
import group from '$icons/group.svg';
import group_hover from '$icons/group_hover.svg';
import message from '$icons/message.svg';
import message_hover from '$icons/message_hover.svg';
import user from '$icons/user.svg';
import user_hover from '$icons/user_hover.svg';
import Detail from '$components/detail';
import '$css/base.less'
const BarContainer = styled.div`
    height: 100vh;
`;

const IconContainer = styled.div`
    height: 22px;
    width: 22px;
    background:  url(${props =>  props.bgSrc || group});
    background-size: 22px;
    background-position: center;
`;

export default class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedTab: 'charRoom'
        }
    }
    createTabBar ({ container, key, bgSrc = []}) {
        return<TabBar.Item title={key} key={key} selected={this.state.selectedTab === key} 
           onPress={() => {
            this.setState({
              selectedTab: key,
            });
          }}
          icon={<IconContainer bgSrc={bgSrc[0]}/>} 
          selectedIcon={<IconContainer bgSrc={bgSrc[1]}/>} >
          {container}
        </TabBar.Item>
    }
    render () {
        col(2);
        return <div>
            <BarContainer>
            <TabBar tintColor={'#ffbb12'}>
                {this.createTabBar({ container : <Login />, key: 'login'})}
                {this.createTabBar({ container : <FriendList />, key: 'friendList', bgSrc: [group, group_hover]})}
                {this.createTabBar({ container : <CharRoomContanier />, key: 'charRoom'})}
                {this.createTabBar({ container : <PersonalInfo />, key: 'personalInfo', bgSrc: [user, user_hover]})}
                {this.createTabBar({ container : <Detail />, key: 'Detail', bgSrc: [message, message_hover]})}
            </TabBar>
            </BarContainer>
        </div>
    }
}
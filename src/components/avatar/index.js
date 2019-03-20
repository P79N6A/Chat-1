import React, { Component } from 'react';
import styled from 'styled-components';
import signal from '$icons/signal.svg';

const Avatar= styled.span`
    width: ${props =>  props.size === 'lg'? 80 : 40}px;
    height: ${props =>  props.size === 'lg'? 80 : 40}px;
    background-color: white;
    border-radius: ${props =>  props.size === 'lg'? 12 : 6}px;
    display: inline-block;
    text-align: center;
    line-height: ${props =>  props.size === 'lg'? 80 : 40}px;
    background-image: url(${props =>  props.bgSrc});
    background-size: ${props =>  props.size === 'lg'? 80 : 40}px;
`;

Avatar.defaultProps = {
    bgSrc: signal
}

export default class AvatarContanier extends Component {
    render () {
        return <>
          {this.props.size === "lg" ? <Avatar size="lg"/> : <Avatar /> }
        </>
    }
}
import React, { Component } from 'react';

import {WhiteSpace} from 'antd-mobile';

import styled from 'styled-components';

const Wrapper = styled.div`
    flex: 1;
    text-align: center;
`;

const Input = styled.input`
    width: 80%;
    height: 3em;
    padding: 0.5em;
    margin: 0.5em;
    color: palevioletred;
    background: #F9BAAD;
    border: none;
    border-radius: 15px;
`;

export default class Topup extends Component {
  render() {
    return (
      <Wrapper>
        <WhiteSpace />
        <Input placeholder='Enter amount' type='text' />
        <WhiteSpace />
        <Input placeholder='card number'  type='text'/>
      </Wrapper>
    )
  }
};

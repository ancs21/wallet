import React, { Component } from 'react';

import styled from 'styled-components';
import { ListGroup, ListGroupItem, ListGroupItemText } from 'reactstrap';

const WrapperBalance = styled.div`
    z-index: -9999;
    background: #F9BAAD;
    height: 220px;
    text-align: center;
    margin: -20px auto;
    padding: 38px;
`;

const Bonus = styled.div`
    background: white;
    border-radius: 3px;
    padding: 12px;
    margin: 0.2em 3em ;
    position: absolute;
    top: 150px;
    z-index: 1;
`;

const WrapperBottom = styled.div`
    padding: 10px;
`;

const Card = styled.div`
    text-align: center;
    width: 40%;
    height: max-content;
    background: mediumseagreen;
    padding: 10px;
`;

const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 10px;
`;

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <WrapperBalance>
                    <h1 style={{
                        fontSize: 50,
                        color: 'white',
                        textShadow: '2px 2px 4px #d4d4d4',
                        margintTop: 20,
                        marginBottom: 0,
                    }}>$ 0</h1>
                    <span style={{
                        fontSize: 20,
                        color: 'white',
                    }}>Balanced</span>
                </WrapperBalance>

                <p style={{
                    fontSize: 16,
                    color: '#444',
                    margin: '46px 20px 10px'
                }}>Last Activity</p>
                <ListGroup style={{
                    padding: 10
                }} >
                    <ListGroupItem style={{
                        fontSize: 16
                    }}>
                        You send <strong>$10</strong> to <strong>Opi Tea & Coffeee</strong>
                    </ListGroupItem>
                    <ListGroupItem style={{
                        fontSize: 16
                    }}>
                        You send <strong>$10</strong> to <strong>Opi Tea & Coffeee</strong>
                    </ListGroupItem>
                    <ListGroupItem style={{
                        fontSize: 16
                    }}>
                        You send <strong>$10</strong> to <strong>Opi Tea & Coffeee</strong>
                    </ListGroupItem>
                </ListGroup>
            </div>
        )
    }
};

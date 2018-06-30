import React, { Component } from 'react';
import './App.css';
import { TabBar } from "antd-mobile";
import Ionicon from 'react-ionicons'
import { NavBar, Icon } from 'antd-mobile';

import Dashboard from './screens/dashboard';
import Topup from "./screens/topup";
import History from "./screens/history";
import Profile from "./screens/profile";
import SignIn from './screens/SignIn'
import WebcamFace from './screens/WebcamFace'

function SigninRender({state}) {
  switch(state){
    case 'phone':
      return <SignIn />
    case 'image':
      return <WebcamFace />
    case 'sucess':
      return <Dashboard />
    default:
      return <SignIn />;
  }
}

class App extends Component {
  state = {
    selectedTab: null,

    signin: null,
    phone: '',
    image: '',
    profile: null
  }
  renderContent = (pageText) => (<h1>{pageText}</h1>)
  render() {

    return (
      <div>
      <SigninRender state={this.state.signin} />
      {/* <div style={{position: 'fixed', width: '100%', height: '100%', top: 0}}>
      <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            title="Dashboard"
            key="Dashboard"
            icon={<Ionicon icon='ios-apps-outline' fontSize='25px' color='grey' />}
            selectedIcon={<Ionicon icon='md-apps' fontSize='25px' color='pink' />}
            selected={this.state.selectedTab === 'blueTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blueTab',
              });
            }}
            data-seed="logId"
          >
          <NavBar style={{
            backgroundColor: '#F9BAAD',
            height: 60,
            boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)'
          }}>Opipay</NavBar>
              <Dashboard />
          </TabBar.Item>
          
          <TabBar.Item
            icon={<Ionicon icon="ios-briefcase-outline" fontSize="25px" color="grey"/>}
            selectedIcon={<Ionicon icon="md-briefcase" fontSize="25px" color="pink"/>}
            title="Topup"
            key="Topup"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
              class="NavBar"
            >Topup</NavBar>
                <Topup />

          </TabBar.Item>
          <TabBar.Item
            icon={<Ionicon icon='ios-time-outline' fontSize='25px' color='gray'/>}
            selectedIcon={<Ionicon icon='md-time' fontSize='25px' color='pink' />}
            title="History"
            key="History"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
              class="NavBar"
            >History</NavBar>
              <History />
              
            </TabBar.Item>
          <TabBar.Item
            icon={<Ionicon icon='ios-settings-outline' fontSize='25px' color='gray' />}
            selectedIcon={<Ionicon icon='md-settings' fontSize='25px' color='pink' />}
            title="Profile"
            key="Profile"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
            <NavBar
              mode="dark"
              icon={<Icon type="left" />}
              onLeftClick={() => console.log('onLeftClick')}
              rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                <Icon key="1" type="ellipsis" />,
              ]}
              class="NavBar"
            >Profile</NavBar>
              <Profile />
            </TabBar.Item>
        </TabBar>
      </div> */}
      </div>
    );
  }
}

function LoadingIndicator({ isLoading }) {
  if (isLoading) {
      return (
          <div>
              <p>Loading...</p>
          </div>
      );
  } else {
      return null;
  }
}


export default App;

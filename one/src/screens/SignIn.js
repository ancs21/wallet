// Import FirebaseAuth and firebase.
import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from '../utils/phone_auth';
import './SignIn.css'
import { NavBar, Icon } from 'antd-mobile';
import logo from '../img/logo.png'
class SignIn extends React.Component {

  // The component's Local state.
  state = {
    isSignedIn: false // Local signed-in state.
  };

  // Configure FirebaseUI.
  uiConfig = {
    // Popup signin flow rather than redirect flow.
    // signInFlow: 'popup',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      
      {
        provider: firebase.auth.PhoneAuthProvider.PROVIDER_ID,
        // Invisible reCAPTCHA with image challenge and bottom left badge.
        recaptchaParameters: {
          type: 'image',
          size: 'invisible',
          badge: 'bottomleft'
        },
        defaultCountry: 'VN',
        // defaultNationalNumber: '1234567890',
        // loginHint: '+84123456789',
      },
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    
    callbacks: {
      // Avoid redirects after sign-in.
      signInSuccessWithAuthResult: () => false
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
  }
  
  // Make sure we un-register Firebase observers when the component unmounts.
  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    if (!this.state.isSignedIn) {
      return (
        <div >
        <NavBar style={{
            backgroundColor: '#F9BAAD',
            height: 220,
            marginBottom: 30,
            boxShadow: '0px 3px 6px 0px rgba(0,0,0,0.16)'
          }}>
            <img src={logo} alt="logo"/>
          </NavBar>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      );
    }
    return (
      <div>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </div>
    );
  }
}
export default SignIn;
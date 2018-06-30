import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDtmB5iw7ZX_DwywvAjqshuzLgxY0RUAvY",
    authDomain: "opipay-61cf2.firebaseapp.com",
    databaseURL: "https://opipay-61cf2.firebaseio.com",
    projectId: "opipay-61cf2",
    storageBucket: "opipay-61cf2.appspot.com",
    messagingSenderId: "493175193960"
};
firebase.initializeApp(config)

export default firebase
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDf1YTcispRrkcf9wus-uIiXOTIW3_MHTM",
    authDomain: "goalcoach-5a078.firebaseapp.com",
    databaseURL: "https://goalcoach-5a078.firebaseio.com",
    projectId: "goalcoach-5a078",
    storageBucket: "",
    messagingSenderId: "947850127307"
};

  export const firebaseApp = firebase.initializeApp(config);
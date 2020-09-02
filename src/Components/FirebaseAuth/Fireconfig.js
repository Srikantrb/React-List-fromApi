import firebase from 'firebase'


const firebaseConfig = {
  //Your fire base config 
    apiKey: "AIzaSyBGoznrRbAupSuE489FCzHbaMjX7syG0qM",
    authDomain: "slot-booking-2c594.firebaseapp.com",
    databaseURL: "https://slot-booking-2c594.firebaseio.com",
    projectId: "slot-booking-2c594",
    storageBucket: "slot-booking-2c594.appspot.com",
    messagingSenderId: "583285963978",
    appId: "1:583285963978:web:592fd416d41eb5ee0f4833",
    measurementId: "G-EGG7F8NY6E"
    
  };

const fire = firebase.initializeApp(firebaseConfig)
// const db = fire.database();
// export default db;
export default fire;


 
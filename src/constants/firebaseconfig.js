
// Import the functions you need from the SDKs you need
import firebase from '@react-native-firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCS9sn6Szm5MZHeKTjwN52mxSTYhNKmRmU",
    authDomain: "musu-food.firebaseapp.com",
    projectId: "musu-food",
    storageBucket: "musu-food.appspot.com",
    messagingSenderId: "937547096615",
    appId: "1:937547096615:web:273a41c160c31d5f0c2402",
    measurementId: "G-XSYGYDSK5L"
};

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// var db = firebase.firstore();

firebase.initializeApp(firebaseConfig);
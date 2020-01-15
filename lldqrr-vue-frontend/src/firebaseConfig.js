import * as firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "AIzaSyAA5zOd-D2mZHJKN_sc1Idkxnyvw7ncc-8",
    authDomain: "lldqrr-a0018.firebaseapp.com",
    databaseURL: "https://lldqrr-a0018.firebaseio.com",
    projectId: "lldqrr-a0018",
    storageBucket: "lldqrr-a0018.appspot.com",
    messagingSenderId: "670701740300",
    appId: "1:670701740300:web:9bb1a28ae8e64afa1c6929",
    measurementId: "G-MY7CG46XM9"
});

export const db = app.database();
export const lldqrrdb = db.ref('LLDQRRDB');


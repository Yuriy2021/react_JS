import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDyq1lZbHylCsuO8shvOfahC2HWlP91Ut0",
    authDomain: "gb-st-project.firebaseapp.com",
    databaseURL: "https://gb-st-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gb-st-project",
    storageBucket: "gb-st-project.appspot.com",
    messagingSenderId: "807718873883",
    appId: "1:807718873883:web:190be3dab490fc45b7c1be"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

export const rootRef = db.ref("root");
export const chatsRef = rootRef.child("chats");
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getAuth,onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyDgKCb386b0PTWOVDdagru5LLygbD0x2dw",
    authDomain: "smit-attendance-app.firebaseapp.com",
    projectId: "smit-attendance-app",
    storageBucket: "smit-attendance-app.appspot.com",
    messagingSenderId: "387004728218",
    appId: "1:387004728218:web:bad6b9e124ba4a7e5fb023",
    measurementId: "G-PNH6TJJLSP"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// const analytics = getAnalytics(app);






onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("Signed in")
        // ...
    } else {
        console.log("Signed out")
        // ...
    }
});

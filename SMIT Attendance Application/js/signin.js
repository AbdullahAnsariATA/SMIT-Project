import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth } from "./firebaseconfig";


let emailInput = document.querySelector("#floatingInput")
let passwordInput = document.querySelector("#floatingPassword")
let signIn = document.querySelector("#signin-btn")
signIn.addEventListener("click",logIn)


async function logIn() {
    try {
        let user = await signInWithEmailAndPassword(auth,emailInput.value,passwordInput.value)
        console.log(user)
        window.location.replace("/addclass.html")
        }
    catch(error) {
        console.log(error.message);
        if (error.message === "Firebase: Error (auth/user-not-found).") {
            swal("Email not found.")
        }
        else if(error.message === "Firebase: Error (auth/wrong-password)."){
            swal("Incorrect password")
        }
        
    }
}


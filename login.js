import {signInWithEmailAndPassword }from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";
import { auth } from "./config.js";




const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("form")


submit.addEventListener("submit" , (e)=>{
  e.preventDefault()
  
  signInWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = "index.html"

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
email.value = ""
password.value = ""
})

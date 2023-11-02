
import {createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

import {auth} from "./config.js"





const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("form")


submit.addEventListener('submit' , (event)=>{
  event.preventDefault()

  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
    window.location = "login.html"
    
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  })
  email.value = ""
  password.value = ""
})

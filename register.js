
import {  createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { auth } from "./config.js";
console.log(auth);



// const firebaseConfig = {
//     apiKey: "AIzaSyBo4oMq5PQN7IzHu51HU4u10YlxR7MC1MA",
//     authDomain: "fir-register-and-login-498f7.firebaseapp.com",
//     databaseURL: "https://fir-register-and-login-498f7-default-rtdb.firebaseio.com",
//     projectId: "fir-register-and-login-498f7",
//     storageBucket: "fir-register-and-login-498f7.appspot.com",
//     messagingSenderId: "62239051174",
//     appId: "1:62239051174:web:a4d86da11686a28e159367",
//     measurementId: "G-RS76WBGH22"
//   };



const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("form")


submit.addEventListener('click' , ()=>{
    console.log(email.value);
    console.log(password.value);

  createUserWithEmailAndPassword(auth, email.value , password.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
    // ...
  });
})


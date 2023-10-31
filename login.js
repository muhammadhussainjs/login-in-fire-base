import { signInWithCustomToken } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { auth } from "./config.js";
console.log(auth);




const email = document.getElementById("email")
const password = document.getElementById("password")
const submit = document.getElementById("submit")


submit.addEventListener("click" , ()=>{
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
  });
})

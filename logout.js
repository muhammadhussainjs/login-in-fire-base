
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import {auth} from "./config.js"


onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = "index.html"
        
    }
});

const logout = document.getElementById('logout')








logout.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
        console.log('logoutsuccessfully');
    }).catch((error) => {
      alert("error")
    });
})
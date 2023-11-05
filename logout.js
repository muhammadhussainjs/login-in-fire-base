
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import {auth , db} from "./config.js"
import { collection, addDoc , getDocs} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"; 



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
  



  const title = document.getElementById('title')
  const description = document.getElementById('description')
  const form = document.getElementById('form')
  const maindiv = document.getElementById('container')
  




  let array = []
  async function getdata(){
    const querySnapshot = await getDocs(collection(db, "post"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data())
       array.map((item) =>{
           maindiv.innerHTML += `<div class="card"><p><span class="h4">Title: </span>${item.title}</p>
           <p><span class="h4">Description: </span>${item.description}</p>
           <p><span class="h4">Uid: </span>${item.uid}</p></div>`
        
         })
      });
      console.log(array);

}
getdata()













form.addEventListener("submit" , async (event)=>{
    event.preventDefault()
    console.log(title.value);
    console.log(description.value);
   console.log(auth);
   maindiv.innerHTML = ""
   try {
     const docRef = await addDoc(collection(db, "post"), {
      title: title.value,
      description: description.value,
      uid: auth.currentUser.uid
    });
    console.log("Document written with ID: ", docRef.id);
    getdata()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
})













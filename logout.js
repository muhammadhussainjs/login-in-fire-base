
import { onAuthStateChanged , signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js"
import {auth , db} from "./config.js"
import { collection, addDoc , getDocs , Timestamp ,  query , orderBy} from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js"; 




const title = document.getElementById('title')
const description = document.getElementById('description')
const form = document.getElementById('form')
const maindiv = document.getElementById('container')
const logout = document.getElementById('logout')




//login or logout function

onAuthStateChanged(auth, (user) => {
  if (user) {
        const uid = user.uid;
        console.log(uid);
      } else {
        window.location = "index.html"
        
      }
});








//logout fnction


logout.addEventListener("click" , ()=>{
    signOut(auth).then(() => {
      console.log('logoutsuccessfully');
    }).catch((error) => {
        alert("error")
    });
  })
  


  
  

//get data function

  let array = []
  async function getdata(){
    array = []
    console.log(array);
    const q = query(collection(db, "post"), orderBy("postdate" , "desc"));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      array.push(doc.data())
    })
       array.map((item) =>{
           maindiv.innerHTML += `<div class="card"><p><span class="h4">Title: </span>${item.title}</p>
           <p><span class="h4">Description: </span>${item.description}</p>
           <button type="button" id="delete" class="btn btn-danger">Delete</button>
           <button type="button" id="update" class="btn btn-info">Edit</button>`
        
      });
      const del = document.querySelectorAll('#delete');
      const edit = document.querySelectorAll('#update');

      del.forEach((btn , i) => {
        btn.addEventListener('click', () => {
            console.log('delete called' , array[i]);
           array.splice(i , 1)
           //console.log(newarray);
        })
    })
    // edit.forEach((btn , index) => {
    //     btn.addEventListener('click', () => {
    //         console.log('update called' , arr[index]);
    //     })
    // })
      
}
getdata()













///add data function

form.addEventListener("submit" , async (event)=>{
  event.preventDefault()
   maindiv.innerHTML = ""
   try {
     const docRef = await addDoc(collection(db, "post"), {
      title: title.value,
      description: description.value,
      uid: auth.currentUser.uid,
      postdate: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
    getdata()
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  title.value = ""
  description.value = ""
})













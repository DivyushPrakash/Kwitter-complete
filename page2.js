// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyARiCGuwYJ-xuOS5ory8Tr2lWQFqnOflVA",
      authDomain: "social-media-app-e7bd6.firebaseapp.com",
      databaseURL: "https://social-media-app-e7bd6-default-rtdb.firebaseio.com",
      projectId: "social-media-app-e7bd6",
      storageBucket: "social-media-app-e7bd6.appspot.com",
      messagingSenderId: "38906931476",
      appId: "1:38906931476:web:9a0fd2959c871dc1093a01"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_namekey");
document.getElementById("user_name").innerHTML="WELCOME "+user_name;


function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      subfolder:"creating subfolder with room name"
      });
      localStorage.setItem("room_namekey",room_name);
      window.location="page3.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       var room_div='<div class="room_name" id="" onclick="gotoroom(this.id)">'+Room_names+'</div><br>';

       document.getElementById("output").innerHTML+=room_div;
      
      //End code
      });});}
getData();


function gotoroom(div_id){
console.lod(div_id);
localStorage.setItem("roomdivkey",div_id);
window.location="page3.html";
}

function logout(){
      localStorage.removeItem("roomdivkey");
      localStorage.removeItem("user_namekey");
      localStorage.removeItem("room_namekey");
      window.location="page1.html";
}
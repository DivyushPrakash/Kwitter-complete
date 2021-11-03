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

//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("user_namekey");
var room_name=localStorage.getItem("room_namekey");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
 console.log(firebase_message_id);
 console.log(message_data);
 namefb=message_data['name'];
 messagefb=meessage_data['message'];
 likefb=message_data['like'];

 nametag='<h4>'+namefb+'</h4>';
 messagetag='<h4 class="message_h4">'+messagefb+'</h4>';
 likebutton='<button id="'+firebase_message_id+'" class="btn btn-danger" value="'+likefb+'" onclick="increaselike(this.id)>Likes: '+likefb+' </button>';
 
 row=nametag+messagetag+likebutton;

 document.getElementById("output").innerHTML+=row;

 //End code

      } });  }); }
getData();

function send(){
      var msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      namekey:user_name,
      messagekey:msg,
      likekey:0
      });
document.getElementById("msg").value="";
}

function logout(){
      localStorage.removeItem("roomdivkey");
      localStorage.removeItem("user_namekey");
      localStorage.removeItem("room_namekey");
      window.location="page1.html";
}

function increaselike(message_id){
button_id=message_id;
likes=document.getElementById(button_id).value;
increasedlikes=Number(likes)+1;

firebase.database().ref(room_name).child(message_id).update({
      likekey:increasedlikes
});
}
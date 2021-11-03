function login1(){
    var user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_namekey",user_name);
    window.location="page2.html";
}
localStorage.setItem("username","admin");
localStorage.setItem("password","admin");
var loggedin = false;
var logoutbtn = document.getElementById("logoutbtn");
var loginbtn = document.getElementById("loginbtn");
function login(){
    var uname = document.getElementById("uname").value;
    var pass = document.getElementById("pass").value;

    var username = localStorage.getItem("username");
    var password = localStorage.getItem("password");

    if(uname==username && password==pass){
        alert("successfully loggedin");

        loggedin= true;
    }
    else{
        alert("invalid credentials");
    }

    if(loggedin==true){
        logoutbtn.style.display = "inline";
        loginbtn.style.display = "none";
       payn.style.disabled="false"
    }
}
function logout(){
    logoutbtn.style.display  ="none";
    loginbtn.style.display = "inline";
} 


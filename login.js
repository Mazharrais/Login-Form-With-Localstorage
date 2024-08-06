

function login(){
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password")

    var users = localStorage.getItem("users");

    if(users){
        users = JSON.parse(users);
    }
    else {
        users = [];
    }

   var user = {
    email : email.value,
    password : password.value
   }

   

}
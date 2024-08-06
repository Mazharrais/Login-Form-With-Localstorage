

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

  var isValid = false;
  for (var i=0; i < users.length; i ++){
     if(email.value === users[i].email && password.value === users[i].password){
         isValid = true;
         break;

     };
  } if(isValid){
    alert("Login Successfully");
  } else {
    alert("invalid email or password");
  }


}
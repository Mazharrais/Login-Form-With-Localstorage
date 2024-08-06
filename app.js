
function register(){
    var name = document.getElementById("r-name");
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");

    var users = localStorage.getItem("users");

 if(users){
    users = JSON.parse(users);
 }else{
    users = [];
 }

    var user = {
        name : name.value,
        email : email.value,
        password : password.value
    }

    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));

}
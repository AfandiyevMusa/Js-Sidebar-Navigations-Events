"use strict";

let email = document.querySelector(".email")
let password = document.querySelector(".password")
let body = document.querySelector("body")

email.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        document.querySelector("button").click();
    }
});

body.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        document.querySelector("button").click();
    }
});

password.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        document.querySelector("button").click();
    }
});

let emailError = document.querySelector(".foremail")
let passwordError = document.querySelector(".forpassword")


document.querySelector("button").addEventListener("click", function(e){
    if(email.value == ""){
        emailError.classList.remove("d-none")
    }else if(!emailError.classList.contains("d-none")){
        emailError.classList.add("d-none")
    }

    if(password.value == ""){
        passwordError.classList.remove("d-none")    
    }else if(!password.classList.contains("d-none")){
        passwordError.classList.add("d-none")    
    }

    if(email.value != "" && password.value != ""){
        alert("You successfully logined!!!");
        email.value = "";
        password.value = "";
    }
})
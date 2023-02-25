"use strict";

// function containsOnlyNumbers(str) {
//     return /^\d+$/.test(str);
// }

// let create = document.querySelector(".container button");
// let inputPlace = document.querySelector(".container input");
// let list = document.querySelector(".container .list-group");
// create.addEventListener("click", function(){
//     list.innerHTML = "";
//     if(containsOnlyNumbers(inputPlace.value)){
//         let inputValue = inputPlace.value
//         let count = 0;
//         for(let i = 0; i < inputValue; i++){
//             var li = document.createElement("li");
//             li.className = "list-group-item my-1 eachli"
//             li.innerText = ++count;
//             list.append(li)
//             inputPlace.value = "";
//         }
//     }else{
//         alert("reqem daxil edilmelidir");
//         inputPlace.value=""
//         return;
//     }
// })



// let sidebar = document.querySelector(".sidebar")
// let closeButton = document.querySelector(".close")
// let openButton = document.querySelector(".open")

// openButton.addEventListener("click", function(){
//     sidebar.classList.remove("hide");
//     openButton.classList.add("d-none");
//     closeButton.classList.remove("d-none")
// })

// closeButton.addEventListener("click", function(){
//     sidebar.classList.add("hide");
//     closeButton.classList.add("d-none");
//     openButton.classList.remove("d-none")
// })

// let email = document.querySelector(".email")
// let password = document.querySelector(".password")
// let body = document.querySelector("body")

// email.addEventListener("keyup",function(e){
//     if(e.keyCode == 13){
//         document.querySelector("button").click();
//     }
// });

// body.addEventListener("keyup",(e){
//     if(e.keyCode == 13){
//         document.querySelector("button").click();
//     }
// });

// password.addEventListener("keyup",function(e){
//     if(e.keyCode == 13){
//         document.querySelector("button").click();
//     }
// });

// document.querySelector("button").addEventListener("click", function(e){
//     if(email.value == "" || password.value == ""){
//         alert("email bos ola bilmez")
//      }
//      else if(password.value == ""){
//         alert("password bos ola bilmez")
//     }
// })

// let elem1 = document.querySelector(".salam5");
// console.log(elem1.parentNode.parentNode.parentNode.parentNode.lastElementChild.innerHTML);
// console.log(elem1.closest(".heads").lastElementChild.innerHTML);

// let elem2 = document.querySelector(".salam1")
// console.log(elem2.closest(".heads").firstElementChild.firstElementChild.firstElementChild.firstElementChild.innerHTML)

// let elemInput = document.querySelector("input");
// function inputEvent(){
//     console.log("input event");
// }
// elemInput.addEventListener("change", inputEvent);
// elemInput.addEventListener("blur", inputEvent);

// document.getElementById("test").addEventListener("change", function(e){
//     if(e.target.value = "1"){
//         elemInput.value = ""
//         elemInput.value = "Html"
//     }
// })






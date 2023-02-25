"use strict";

let sidebar = document.querySelector(".sidebar")
let closeButton = document.querySelector(".close")
let openButton = document.querySelector(".open")

openButton.addEventListener("click", function(){
    sidebar.classList.remove("hide");
    openButton.classList.add("d-none");
    closeButton.classList.remove("d-none");
    sidebar.classList.add("active-body");
})

closeButton.addEventListener("click", function(){
    sidebar.classList.add("hide");
    closeButton.classList.add("d-none");
    openButton.classList.remove("d-none")
    sidebar.classList.remove("active-body")
})
"use strict";

window.addEventListener("DOMContentLoaded", start); 

function start(){
    document.querySelector(".window1").addEventListener("click", changeColor); 
}

function changeColor(){
    document.querySelector(".window1").classList.add("window_kf"); 

    document.querySelector(".window2").addEventListener("click", changeColorAgain);

    document.querySelector(".window1").style.fill = "yellow";
}

function changeColorAgain(){

    document.querySelector(".window2").classList.add("window_kf");
    
    document.querySelector(".window2").style.fill = "yellow";
}
//HAMBURGER TOGGLE

let hamburger = document.querySelector(".hamburger");
let box = document.querySelector(".list__iconMenu");

hamburger.onclick = function(){
    hamburger.classList.toggle("active");
    box.classList.toggle("active");
}

document.onclick = function(e){
    if (!hamburger.contains(e.target) && !box.contains(e.target)) {
        hamburger.classList.remove("active");
        box.classList.remove("active");
    }
}


//DROPDOWN UP3

let dropdown_up3 = document.querySelector(".dropdown-UP3");
let list_up3 = document.querySelector(".list_UP3");

dropdown_up3.onclick = function(){
    dropdown_up3.classList.toggle("active");
    list_up3.classList.toggle("active");
}

document.onclick = function(e){
    if (!dropdown_up3.contains(e.target) && !list_up3.contains(e.target)) {
        dropdown_up3.classList.remove("active");
        list_up3.classList.remove("active");
    }
}


//DROPDOWN ULP

let dropdown_ulp = document.querySelector(".dropdown-ULP");
let list_ulp = document.querySelector(".list_ULP");

dropdown_ulp.onclick = function(){
    dropdown_ulp.classList.toggle("active");
    list_ulp.classList.toggle("active");
}

document.onclick = function(e){
    if (!dropdown_ulp.contains(e.target) && !list_ulp.contains(e.target)) {
        dropdown_ulp.classList.remove("active");
        list_ulp.classList.remove("active");
    }
}


import {a as b} from "./main"
let a = 10
console.log(b);

// noImplicitAny 
function add(a, b){
    return a + b
}
// noImplicitThis
function f2(this:Window){
    console.log(this);
}

// strictNullChecks
let box = document.getElementById("box");
box?.addEventListener("click",(e)=>{
    console.log(e);
})
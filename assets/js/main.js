const textbox = document.querySelector(".textbox");
const input = document.querySelector("#enter");
const btn = document.querySelector("#submit");
const del = document.querySelector("#delete");
const blu = document.querySelector("#blu");
let test =false;
let test2=false;
btn.addEventListener("click", function(){
    if(input.value!=""){
        textbox.innerHTML+=`<div class="text">${input.value}</div>`;
    }
    input.value="";
})
del.addEventListener("click" , function(){
    test=!test;
});
textbox.addEventListener("click" , function(e){
    if (e.target.classList[0]=="text" && test){
        e.target.style.display="none";        
    }
});

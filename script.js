console.log("hello world")
 let btn=document.querySelector("#btn")
 btn.onclick=()=>{
    console.log("hello")
 }
 let new1=document.querySelector("#new1")
new1.onmouseover=()=>{
    alert("thank you")
 }
 let hi=document.querySelector("#hi");
 hi.addEventListener("click",() => {
    console.log("welcome to js")
 })
 function bigImg(x) {
   x.style.height = "64px";
   x.style.width = "64px";
 }
 
 function normalImg(x) {
   x.style.height = "32px";
   x.style.width = "32px";
 }
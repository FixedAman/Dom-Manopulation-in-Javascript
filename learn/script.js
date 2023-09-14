// document.querySelector("h1");
// // THATS HOW WE  SELECT ANY ElementS IN JS USING DOM 
// var a = document.querySelector("h1");
// // changing in html 
// a.innerHTML = ("enma");
// document.querySelector("h1").innerHTML = "bruhh"
// // changing in css using js 
// a.style.color = "purple"
// a.style.backgroundColor="black"
// // event listener 
// a.addEventListener("click",function(){
//     a.innerHTML =("cano tipli bara ?")
//     a.style.color = "white"
//     a.style.backgroundColor = "orange"
// });
// a.addEventListener("mouseover", function(){
//     a.innerHTML = ("haibara")
//     a.style.color = "blue"
//     a.style.backgroundColor = "red"
// })
// var a = document.querySelector("button");
// var b = document.querySelector("#bulb");
// var off = 0
// a.addEventListener("click", function () {
//     if (off == 0) {
//         b.style.backgroundColor = "yellow"
//         off = 1
//     }
//     else {
//         b.style.backgroundColor = "transparent"
//         off = 0
//     }
// })
var a = document.querySelectorAll("h1") ;
     console.log(a);
     a.forEach(function(e){
         console.log(e)
     })
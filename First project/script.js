var istatus = document.querySelector("h5");
var btn  = document.querySelector("#add")
var check = 0 
btn.addEventListener("click",function(){
    if(check ==0){
        istatus.innerHTML= "Friends"
        istatus.style.color = "Green"
        btn.innerHTML = "Remove Friend"
        check = 1 ;
    }
    else{
        istatus.innerHTML= "Removed"
        istatus.style.color = "Red "
        btn.innerHTML = "Add Friend"
        check = 0 ;
    }
    
})
// var remove = document.querySelector("#remove");
// remove.addEventListener("click", function(){
//     istatus.innerHTML = "Removed"
//     istatus.style.color = "red"
// })

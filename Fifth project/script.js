var arr = [
    {
        dp: "https://images.unsplash.com/photo-1694309984301-60e69e095ae7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",story : "https://images.unsplash.com/photo-1687360440101-739008e55576?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1694098679485-fdaeb20aadde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80", story:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1694290124012-c1d19f091e5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" ,story: "https://images.unsplash.com/photo-1689044739553-f799a3b4ff53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1694046078505-7486ffcf88f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",story : "https://images.unsplash.com/photo-1687360440094-949b8fe71c8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
    }
]
var clutter  = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
    <img id="${idx}" src="${elem.dp}" alt="">
   </div>`
})

document.querySelector("#stories").innerHTML = clutter

var  stories  = document.querySelector("#stories")
stories.addEventListener("click" ,function(dets)
{
  document.querySelector("#full-screen").style.display = "block"
  document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`
})
setTimeout(function(){
    document.querySelector("#full-screen").style.display = "none"
},3000)

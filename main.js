menuIcon = document.querySelector(".nav-button")
closeIcon =document.querySelector(".close-icon")
navBar= document.querySelector(".div1")
console.log("hello")

menuIcon.addEventListener('click', () =>{
    console.log("clicked")
    
    navBar.classList.toggle('show')
})
closeIcon.addEventListener("click", ()=>{
    navBar.classList.remove("show")
    
})
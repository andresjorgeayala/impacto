const boton = document.getElementById("botonMenu");
let menu = document.querySelector(".contenedor__2")

let header = document.getElementById("yape")

boton.addEventListener("click",function(){
    menu.classList.toggle("activar")
})


window.addEventListener('scroll', function(){
    header.classList.toggle("sticky", window.scrollY > 0)
})


//formulario 
const formulario=document.getElementById("formulario")
const nombre = document.getElementById("nombre")
const email =document.getElementById("email")
const mensaje = document.getElementById("mensaje")
const boton =document.getElementById("btn")




formulario.addEventListener("submit", (e) => {
e.preventDefault();
  //console.log (e)
console.log(nombre.value);

console.log(email.value);
console.log(mensaje.value);

});


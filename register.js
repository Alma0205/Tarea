const inputNombre = document.getElementById("Nombre");
const selectLugar = document.getElementById("lugar");
const inputEdad = document.getElementById("edad");
const inputCorreo = document.getElementById("correo");
const inputContraseña = document.getElementById("contraseña");
const botonCrear = document.querySelector("button");

botonCrear.addEventListener("click", (event) => {
  event.preventDefault();

  if (!inputNombre.value || selectLugar.value === "seleccionar" ||
      !inputEdad.value || !inputCorreo.value || !inputContraseña.value) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const nuevoUsuario = {
    nombre: inputNombre.value,
    lugar: selectLugar.value,
    edad: inputEdad.value,
    correo: inputCorreo.value,
    contraseña: inputContraseña.value
  };

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  usuarios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  localStorage.setItem("loggedUser", JSON.stringify(nuevoUsuario));


  window.location.href = "home.html";
})

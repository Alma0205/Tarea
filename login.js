const inputCorreo = document.getElementById("correo");
const inputContraseña = document.getElementById("contraseña");
const btnLogin = document.getElementById("btnLogin");
const mensaje = document.getElementById("mensaje");

btnLogin.addEventListener("click", (event) => {
  event.preventDefault();

  const correo = inputCorreo.value.trim();
  const contraseña = inputContraseña.value.trim();

  if (!correo || !contraseña) {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.style.color = "orange";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuarioValido = usuarios.find(
    (user) => user.correo === correo && user.contraseña === contraseña
  );

  if (usuarioValido) {

    localStorage.setItem("loggedUser", JSON.stringify(usuarioValido));


    window.location.href = "home.html";
  } else {
    mensaje.textContent = "Correo o contraseña incorrectos.";
    mensaje.style.color = "red";
  }
});


const inputNombre = document.getElementById("Nombre");
const selectLugar = document.getElementById("lugar");
const inputEdad = document.getElementById("edad");
const inputCorreo = document.getElementById("correo");
const inputContraseña = document.getElementById("contraseña");
const botonCrear = document.querySelector("button");

let areaResultados = document.createElement("div");
areaResultados.id = "resultados";
areaResultados.style.marginTop = "20px";
areaResultados.style.padding = "15px";
areaResultados.style.background = "rgba(255,255,255,0.1)";
areaResultados.style.borderRadius = "8px";
areaResultados.style.textAlign = "center";
areaResultados.innerText = "💀 Bienvenido, completa el formulario y presiona el botón 💀";
document.querySelector(".registro-cuadro").appendChild(areaResultados);


function mostrarDatos() {
  // Obtener valores de los inputs
  const nombre = inputNombre.value.trim();
  const lugar = selectLugar.value;
  const edad = inputEdad.value;
  const correo = inputCorreo.value;
  const contraseña = inputContraseña.value;


  if (!nombre || lugar === "seleccionar" || !edad || !correo || !contraseña) {
    areaResultados.textContent = "⚠️ Por favor, completa todos los campos.";
    areaResultados.style.color = "orange";
    return;
  }


  areaResultados.innerHTML = "";


  let titulo = document.createElement("h3");
  titulo.textContent = `🎬 Usuario Registrado 🎬`;
  titulo.style.color = "rgb(255,56,56)";

  let parrafo = document.createElement("p");
  parrafo.innerHTML = `
    <strong>Nombre:</strong> ${nombre} <br>
    <strong>País:</strong> ${lugar} <br>
    <strong>Edad:</strong> ${edad} años <br>
    <strong>Correo:</strong> ${correo}
  `;


  areaResultados.appendChild(titulo);
  areaResultados.appendChild(parrafo);

 
  areaResultados.classList.add("activo");
  setTimeout(() => {
    areaResultados.classList.remove("activo");
  }, 2000);
}


botonCrear.addEventListener("click", (event) => {
  event.preventDefault(); 
  mostrarDatos();
});

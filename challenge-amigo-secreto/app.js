const listaDeAmigos = [];

function agregarAmigo() {
  const inputAmigo = document.getElementById("amigo");
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  listaDeAmigos.push(nombreAmigo);
  mostrarListaAmigos();
  inputAmigo.value = "";
  inputAmigo.focus();
}

function mostrarListaAmigos() {
  const listaElemento = document.getElementById("listaAmigos");
  listaElemento.innerHTML = "";

  listaDeAmigos.forEach((nombre) => {
    const li = document.createElement("li");
    li.textContent = nombre;
    listaElemento.appendChild(li);
  });
}

function sortearAmigo() {
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = ""; // Limpiar resultado anterior

  if (listaDeAmigos.length === 0) {
    alert("No hay participantes para el sorteo.");
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceSorteado];

  const liResultado = document.createElement("li");
  liResultado.textContent = `🎉 El amigo secreto es: ${amigoSorteado}`;
  resultadoElemento.appendChild(liResultado);
}

function limpiarLista() {
  listaDeAmigos.length = 0;

  // Limpiar la lista visual y el resultado
  document.getElementById("listaAmigos").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}

// Habilitar tecla Enter para añadir amigo
document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("amigo");
  input.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      agregarAmigo();
    }
  });
});

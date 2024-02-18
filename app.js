
let textcod = "";
let textdescof = "";


function myFunction() {
  return alert("Teste de JS");
}

function mostrarDiv1() {
  document.getElementById("divclear01").style.display = "block";
  document.getElementById("divclear02").style.display = "none";
}

// Função para mostrar apenas a segunda div e esconder a primeira
function mostrarDiv2() {
  document.getElementById("divclear01").style.display = "none";
  document.getElementById("divclear02").style.display = "block";
}
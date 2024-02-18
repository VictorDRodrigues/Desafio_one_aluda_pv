
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


function exibirValorTextarea() {
  // Buscar o textarea pelo ID
  var textarea = document.getElementById("010");

  // Obter o valor do textarea
  textcod = textarea.value;

  // Exibir o valor em um alerta
  alert(textcod);
}


function atualizaValorTextarea(id_btn) {
  // Buscar os textareas pelos IDs
  var textarea1 = document.getElementById("010");
  var textarea2 = document.getElementById("020");

  // Verificar se textarea1 existe e se está vazio ou nulo
  if (!textarea1 || !textarea1.value.trim()) {
    if (typeof mostrarDiv2 === 'function') {
      mostrarDiv2(); // Mostrar a segunda div
    }
  } else {
    if (typeof mostrarDiv1 === 'function') {
      mostrarDiv1(); // Mostrar a primeira div
    }

    // Atualizar o valor do textarea2 com base no botão clicado
    if (id_btn === "apresentacao__texto__div__btn__criptografa") {
      if (typeof codificarTexto === 'function') {
        textarea2.value = codificarTexto(textarea1.value);
      }
    } else {
      if (typeof decodificarTexto === 'function') {
        textarea2.value = decodificarTexto(textarea1.value);
      }
    }
  }
}


window.addEventListener('load', function() {
  mostrarDiv2(); // Chama a função após a página ser completamente carregada
  if (textcod != ""){
    mostrarDiv1();
  }
});


function codificarTexto(texto) {
  return texto.replace(/e/g, "enter")
              .replace(/i/g, "imes")
              .replace(/a/g, "ai")
              .replace(/o/g, "ober")
              .replace(/u/g, "ufat");
}

// Função para decodificar o texto
function decodificarTexto(texto) {
  return texto.replace(/enter/g, "e")
              .replace(/imes/g, "i")
              .replace(/ai/g, "a")
              .replace(/ober/g, "o")
              .replace(/ufat/g, "u");
}




let textcod = "";











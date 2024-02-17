
const textarea = document.getElementsByClassName('meuTextarea');

textarea.addEventListener('input', function() {
  this.style.height = 'auto'; // Define a altura como automática para ajustar o tamanho
  this.style.height = this.scrollHeight + 'px'; // Define a altura do textarea para a altura do conteúdo
});



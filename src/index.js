let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.button')

botones.forEach(button => {
    button.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('diminish')) {
      contador--;
    }
    else if(estilos.contains('increase')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        valor.style.color = '#fff';
      }
      if(contador < 0) {
        valor.style.color = '#ba215a';
      }
  })
})
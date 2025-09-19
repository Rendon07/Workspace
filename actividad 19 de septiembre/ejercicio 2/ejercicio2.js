function mostrarNombre() {
      document.getElementById('resultado').innerHTML = 'Nombre: Angie Ibañez';
    }
    function mostrarNumeros() {
      let numeros = '';
      for (let i = 25; i <= 35; i++) {
        numeros += i + ' ';
      }
      document.getElementById('resultado').innerHTML = 'Números: ' + numeros;
    }
    function cambiarColor() {
      const colores = ['#5bfcfcff', '#388dc5ff', '#b488ddff', '#c06790ff', '#8ee778ff'];
      const colorActual = document.body.style.backgroundColor;
      let nuevoColor = colores[Math.floor(Math.random() * colores.length)];
      while (nuevoColor === colorActual) {
        nuevoColor = colores[Math.floor(Math.random() * colores.length)];
      }
      document.body.style.backgroundColor = nuevoColor;
    }
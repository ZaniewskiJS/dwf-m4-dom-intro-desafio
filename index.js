document.addEventListener('DOMContentLoaded', function () {
  const cosasQueAprendimos = [
    { tema: "terminal", class: "" },
    { tema: "node", class: "" },
    { tema: "oop", class: "" },
    { tema: "typescript", class: "" },
    { tema: "css", class: "" },
    { tema: "dom", class: "special" },
  ];

  function main() {
    const listaUl = document.getElementById('lista');
    listaUl.innerHTML = '';

    cosasQueAprendimos.forEach(item => {
      const nuevoLi = document.createElement('li');
      nuevoLi.textContent = item.tema;

      if (item.class) {
        nuevoLi.classList.add(item.class);
      }

      listaUl.appendChild(nuevoLi);
    });
  }

  // Llamar a la función main al cargar el DOM
  main();
});

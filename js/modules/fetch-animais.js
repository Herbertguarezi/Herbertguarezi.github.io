import initAnimaNumeros from "./animaNumeros.js";

export default function initFetchAnimais() {
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");
    div.innerHTML = `<h3>${animal.especie}</h3><span data-numero>${animal.total}</span>`;
    return div;
  }
  async function puxaDados(url) {
    try {
      const animaisResponse = fetch(url);
      const animaisDados = await (await animaisResponse).json();
      const numerosGrid = document.querySelector(".numeros-grid");

      animaisDados.forEach((animal) => {
        const divAnimal = createAnimal(animal);
        numerosGrid.appendChild(divAnimal);
      });
      initAnimaNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }
  puxaDados("./animaisapi.json");
}

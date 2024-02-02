export default function initModal() {
  const login = document.querySelector('[data-modal="abrir"]');
  const modal = document.querySelector('[data-modal="container"]');
  const fechar = document.querySelector('[data-modal="fechar"]');
  function handleModal(event) {
    event.preventDefault();
    modal.classList.toggle("ativo");
  }

  function fecharForaModal(event) {
    const fora = event.target;
    if (this === fora) handleModal(event);
  }

  if (login && modal && fechar) {
    login.addEventListener("click", handleModal);
    fechar.addEventListener("click", handleModal);
    modal.addEventListener("click", fecharForaModal);
  }
}

export default class Modal {
  constructor(login, modal, fechar) {
    this.login = document.querySelector(login);
    this.modal = document.querySelector(modal);
    this.fechar = document.querySelector(fechar);

    // bind this ao callback para fazer referência ao objeto da classe
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.fecharForaModal = this.fecharForaModal.bind(this);
  }

  toggleModal() {
    this.modal.classList.toggle("ativo");
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  // fecha o modal ao clicar fora dele
  fecharForaModal(event) {
    const fora = event.target;
    if (this.modal === fora) {
      this.eventToggleModal(event);
    }
  }

  // adiciona os eventos ao modal
  addEventModal() {
    this.login.addEventListener("click", this.eventToggleModal);
    this.fechar.addEventListener("click", this.eventToggleModal);
    this.modal.addEventListener("click", this.fecharForaModal);
  }

  // inicia a função
  init() {
    if (this.login && this.modal && this.fechar) {
      this.addEventModal();
    }
    return this;
  }
}

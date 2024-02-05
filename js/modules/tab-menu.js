export default class TabNav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activaClass = "ativo";
  }
  // adiciona a classe ativo de acordo com o index
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activaClass);
    });
    // adiciona a direção da animação
    const direcao = this.tabContent[index].dataset.anime;
    this.tabContent[index].classList.add(this.activaClass, direcao);
  }
  // adicionar os eventos as imagens
  addEventTab() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.activeTab(index));
    });
  }
  init() {
    if (this.tabMenu.length && this.tabContent.length) {
      // ativar primeiro item
      this.activeTab(0);
      this.addEventTab();
    }
  }
}

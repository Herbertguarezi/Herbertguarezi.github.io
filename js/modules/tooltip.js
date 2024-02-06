export default class Tolltip {
  constructor(tolltips) {
    this.tolltips = document.querySelectorAll(tolltips);

    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  onMouseMove({ pageY, pageX }) {
    this.tolltipbox.style.top = `${pageY + 20}px`;
    if (pageX + 240 > window.innerWidth) {
      this.tolltipbox.style.left = `${pageX - 190}px`;
    } else {
      this.tolltipbox.style.left = `${pageX + 20}px`;
    }
  }
  onMouseOut({ currentTarget }) {
    this.tolltipbox.remove();
    currentTarget.removeEventListener("mouseleave", this.onMouseOut);
    currentTarget.removeEventListener("mousemove", this.onMouseMove);
  }

  // cria a tolltip box e coloca no body
  criarTolltipBox(element) {
    const tolltipbox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tolltipbox.classList.add("tolltip");
    tolltipbox.innerText = text;
    document.body.appendChild(tolltipbox);
    this.tolltipbox = tolltipbox;
  }
  onMouseOver({ currentTarget }) {
    // cria a tolltip box e coloca em uma propriedade
    this.criarTolltipBox(currentTarget);
    currentTarget.addEventListener("mouseleave", this.onMouseOut);
    currentTarget.addEventListener("mousemove", this.onMouseMove);
  }

  addTolltipsEvents() {
    this.tolltips.forEach((i) => {
      i.addEventListener("mouseover", this.onMouseOver);
      // i.addEventListener("mousemove", this.onMouseMove);
    });
  }

  init() {
    if (this.tolltips.length) {
      this.addTolltipsEvents();
    }
  }
}

export default function initTolltip() {
  const tolltips = document.querySelectorAll("[data-tolltip]");
  const onMouseMove = {
    handleEvent(event) {
      this.tolltipbox.style.top = `${event.pageY + 20}px`;
      this.tolltipbox.style.left = `${event.pageX + 20}px`;
    },
  };
  const onMouseOut = {
    handleEvent() {
      this.tolltipbox.remove();
      this.element.removeEventListener("mouseleave", onMouseOut);
      this.element.removeEventListener("mousemove", onMouseMove);
    },
  };

  function criarTolltipBox(element) {
    const tolltipbox = document.createElement("div");
    const text = element.getAttribute("aria-label");
    tolltipbox.classList.add("tolltip");
    tolltipbox.innerText = text;
    document.body.appendChild(tolltipbox);
    return tolltipbox;
  }
  function onMouseOver() {
    const tolltipbox = criarTolltipBox(this);

    onMouseOut.tolltipbox = tolltipbox;
    onMouseOut.element = this;
    this.addEventListener("mouseleave", onMouseOut);
    onMouseMove.tolltipbox = tolltipbox;
    this.addEventListener("mousemove", onMouseMove);
  }
  tolltips.forEach((i) => {
    i.addEventListener("mouseover", onMouseOver);
    i.addEventListener("mousemove", onMouseMove);
  });
}

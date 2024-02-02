import outsideClick from "./outsideClick.js";

export default function initMenuMobile() {
  const menu = document.querySelector("#menu");
  const btn = document.querySelector('[data-menu="button"]');
  const eventos = ["click", "touchstart"];
  function openMenu() {
    menu.classList.add("ativo");
    btn.classList.add("ativo");
    outsideClick(menu, eventos, () => {
      menu.classList.remove("ativo");
      btn.classList.remove("ativo");
    });
  }
  if (btn) {
    eventos.forEach((evento) => btn.addEventListener(evento, openMenu));
  }
}

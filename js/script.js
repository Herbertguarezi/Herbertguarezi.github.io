import ScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import Accordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-menu.js";
import initModal from "./modules/modal.js";
import initTolltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-nav="menu"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();
initTabNav();
initModal();
initTolltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimacaoScroll();

console.log("teste");

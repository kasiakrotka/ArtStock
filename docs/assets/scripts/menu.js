import { DomHelper } from "./domHelper.js";

export class Menu {
  constructor() {
    this.addMenuHeadersStyling();
    this.connectBurgerButton();
    this.connectHomeButton();
    this.connectMenuLinks();
  }

  addMenuHeadersStyling() {
    const menuHeaders = document.getElementsByClassName("a-big");
    Array.from(menuHeaders).forEach((element) => {
      element.addEventListener("click", () => {
        element.classList.toggle("active-link-menu");
      });
    });
  }

  connectHomeButton() {
    const homeButton = document.querySelector(".a-home");
    homeButton.addEventListener("click", () => {
      if (DomHelper.mode !== "home") DomHelper.changeView("home");
    });
  }

  connectBurgerButton() {
    const burgerButton = document.querySelector(".btn-hamburger-menu");
    burgerButton.addEventListener("click", () => {
      console.log(this);
      const menu = document.querySelector(".menu");
      menu.classList.toggle("menu-slide");
    });
  }

  connectMenuLinks() {
    const menu = document.querySelector(".menu");
    const menuLinks = menu.querySelectorAll(".menu-links");
    menuLinks.forEach((element) => {
      element.addEventListener("click", (event) => {
        const mode = element.id;
        try {
          const filter = event.target.closest("a").dataset.filter;
          if (DomHelper.mode !== "list") {
            DomHelper.changeView("list");
          }
          DomHelper.generateList(mode, filter);
        } catch {
            return;
        }
      });
    });
  }
}

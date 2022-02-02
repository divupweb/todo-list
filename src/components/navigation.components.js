import { Component } from "../core/component";
export class NavigationComponent extends Component {
  constructor(id) {
    super(id);
    this.tabs = [];
    this.init();
  }
  init = () => {
    this.$element.addEventListener("click", tabClickHandler.bind(this));
  };
  registerTabs = (tabs) => {
    this.tabs = tabs;
  };
}

function tabClickHandler(event) {
  event.preventDefault();
  const target = event.target.classList.contains("menu__item")
    ? event.target
    : event.target.parentNode.classList.contains("menu__item")
    ? event.target.parentNode
    : event.target.parentNode.parentNode.classList.contains("menu__item")
    ? event.target.parentNode.parentNode
    : null;
  if (target) {
    Array.from(this.$element.querySelectorAll(".menu__item")).forEach((tab) => {
      tab.classList.contains("menu__item_active")
        ? tab.classList.remove("menu__item_active")
        : null;
    });
    target.classList.add("menu__item_active");

    this.tabs.forEach((obj) => {
      obj.component.$element.classList.remove("shared_page-show");
    });

    const $activeTab = this.tabs.find(
      (obj) => obj.component.$element.dataset.page == target.dataset.menuItem
    );
    $activeTab.component.$element.classList.add("shared_page-show");
  }
}

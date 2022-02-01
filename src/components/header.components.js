import { Component } from "../core/component";
export class HeaderComponents extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    const $BTN = this.$element.querySelector(".js-header-start");
    localStorage.getItem("privacy") ? this.hide(true) : null;
    $BTN.addEventListener("click", buttonHandler.bind(this));
  };
}

function buttonHandler() {
  this.hide();
  localStorage.setItem("privacy", true);
}

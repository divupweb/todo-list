import { Component } from "../core/component";
export class HeaderComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    const $BTN = this.$element.querySelector(".js-header-start");
    localStorage.getItem("privacy") ? this.hide(true) : null;
    $BTN.addEventListener("click", buttonHandler.bind(this));

    const $animation_text_items = this.$element.getElementsByClassName(
      "shared_text-animation"
    );
    this.textAnimation($animation_text_items, "to-do list project");
  };
}

function buttonHandler() {
  this.hide();
  localStorage.setItem("privacy", true);
}

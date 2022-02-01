export class Component {
  constructor(id) {
    this.$element = document.getElementById(id);
    this.init();
  }
  init = () => {};
  hide = (trigger) => {
    if (trigger) {
      this.$element.classList.add("shared__section-hide");
    } else {
      this.$element.classList.add("shared__section-fade-out");
      setTimeout(() => {
        this.$element.classList.add("shared__section-hide");
      }, 2000);
    }
  };
  show = () => {
    this.$element.classList.remove("shared__section-hide");
  };
}

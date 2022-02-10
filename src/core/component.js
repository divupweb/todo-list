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

  textAnimation = ($elements, text) => {
    Array.from($elements).forEach(($element) => {
      let text_array = text.split("");
      for (let i = 0; i < text_array.length; i++) {
        setTimeout(() => {
          if ((i + 1) % 2 == 0) {
            $element.textContent = $element.textContent.substr(
              0,
              $element.textContent.length - 1
            );
            $element.textContent += text_array[i];
          } else {
            $element.textContent += text_array[i] + "█";
          }
        }, i * 75);
      }
    });
  };
}

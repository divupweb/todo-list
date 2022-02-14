export class Component {
  constructor(id) {
    this.$element = document.getElementById(id);
    this.init();
  }
  init = () => {};

  hide = () => {
    this.$element.classList.remove("shared_page-show");
  };

  privacyHide = (trigger) => {
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
    this.$element.classList.add("shared_page-show");
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

  notification = (type, message) => {
    const $notification = document.createElement("div");
    $notification.classList.add("shared__notification");
    type == true
      ? $notification.classList.add("shared__notification_success")
      : $notification.classList.add("shared__notification_error");
    $notification.innerHTML = `<p class="shared__notification-message"><span class="shared__notification-title">Notification: </span>${message}</p>`;
    document.getElementById("notifications").appendChild($notification);
    setTimeout(() => {
      $notification.remove();
      return;
    }, 5000);
  };
}

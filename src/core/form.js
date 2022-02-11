export class Form {
  constructor(form, controls) {
    this.form = form;
    this.controls = controls;
  }
  value() {
    const value = {};
    Object.keys(this.controls).forEach((control) => {
      value[control] = this.form[control].value;
    });
    return value;
  }
  clear() {
    Object.keys(this.controls).forEach((control) => {
      this.form[control].value = "";
    });
  }

  isValid() {
    let isFormValid = true;
    Object.keys(this.controls).forEach((control) => {
      const validators = this.controls[control];
      let isValid = true;
      validators.forEach((validator) => {
        isValid = validator(this.form[control].value) && isValid;
      });
      if (!isValid) {
        setError(this.form[control]);
      } else {
        clearError(this.form[control]);
      }
      isFormValid = isFormValid && isValid;
    });
    return isFormValid;
  }
}
function setError($control) {
  clearError($control);
  const error = `<p class='shared__validation-error'>Notification: violated rules</p>`;
  $control.parentNode.classList.add("shared__invalid");
  $control.parentNode.insertAdjacentHTML("afterend", error);
}
function clearError($control) {
  console.log($control);
  // document.querySelectorAll(".shared__validation-error").forEach((item) => {
  //   item.remove();
  // });
  // if ($control.parentNode.closest(".shared__validation-error"))
  //    $control.parentNode.closest(".shared__validation-error").remove();
  // console.log($control.parentNode.closest(".shared__validation-error"));
  // if (document.querySelector(".shared__validation-error")) {
  //   document.querySelector(".shared__validation-error").remove();
  // }
}

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
}
// let zalupa = new Form("zzzz", "zzzz")
// console.log("bbb", );

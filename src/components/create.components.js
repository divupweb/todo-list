import { Component } from "../core/component";
import { Form } from "../core/form";
import { Validators } from "../core/validators";

export class CreateComponent extends Component {
  constructor(id) {
    super(id);
    this.init();
  }
  init = () => {
    this.$form_create = document.getElementById("create_posts_form");
    this.$form_create.addEventListener("submit", submitHandler.bind(this));
    this.form = new Form(this.$form_create, {
      title: [Validators.required],
      fulltext: [Validators.required, Validators.minLength(10)],
    });
  };
}

function submitHandler(event) {
  event.preventDefault();

  if (this.form.isValid()) {
    const formData = {
      type: this.$form_create.post_type.value,
      date: new Date().toLocaleDateString(),
      ...this.form.value(),
    };
    console.log(formData);
    this.form.clear();
  }
}
